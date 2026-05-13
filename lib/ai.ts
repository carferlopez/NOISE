import Anthropic from '@anthropic-ai/sdk'
import { SYSTEM_PROMPT } from './constants'
import { AnalysisResult } from './types'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6'

export async function analyzeHealthClaim(claim: string): Promise<AnalysisResult> {
  const message = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 2048,
    system: SYSTEM_PROMPT,
    tools: [
      {
        type: 'web_search_20250305',
        name: 'web_search',
        max_uses: 3,
      },
    ],
    messages: [
      {
        role: 'user',
        content: `Analiza esta afirmación o pregunta sobre salud: "${claim}"`,
      },
    ],
  })

  // El JSON final viene en el último bloque de texto (después de cualquier tool_use / web_search_result)
  const textBlocks = message.content.filter(
    (b): b is Anthropic.TextBlock => b.type === 'text'
  )
  const text = textBlocks.length > 0 ? textBlocks[textBlocks.length - 1].text : ''

  // El modelo a veces envuelve el JSON en ```json … ``` aunque le digamos que no.
  // Extraemos el objeto buscando { … } por las bravas.
  const start = text.indexOf('{')
  const end = text.lastIndexOf('}')
  const jsonText = start !== -1 && end !== -1 ? text.slice(start, end + 1) : text

  try {
    const result: AnalysisResult = JSON.parse(jsonText)
    return result
  } catch (err) {
    console.error('[NOISE] JSON parse failed. Raw text from model:', text)
    console.error('[NOISE] Parse error:', err)
    return {
      verdict: 'Error al procesar la respuesta',
      emoji: '⚠️',
      evidenceLevel: 'medium',
      evidenceScore: 0,
      explanation: 'Hubo un problema al analizar esta consulta. Mira la terminal para ver el detalle.',
      minimumDose: '',
      sources: [],
      bullshitFactors: [],
    }
  }
}
