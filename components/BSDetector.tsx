'use client'

import { useState } from 'react'
import EvidenceCard from './EvidenceCard'
import { AnalysisResult } from '@/lib/types'
import { Search, Loader2 } from 'lucide-react'

const EXAMPLE_QUERIES = [
  '¿El ayuno intermitente acelera el metabolismo?',
  '¿Los BCAAs son necesarios si como suficiente proteína?',
  '¿El agua con limón en ayunas desintoxica?',
  '¿La creatina es peligrosa para los riñones?',
  '¿Necesito 8 vasos de agua al día?',
  '¿El cardio en ayunas quema más grasa?',
]

export default function BSDetector() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ claim: query.trim() }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Error al analizar')
      }

      const data = await res.json()
      setResult(data)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error inesperado'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  function handleExample(q: string) {
    setQuery(q)
    setResult(null)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Ej: "¿La dieta keto es mejor para perder peso?"'
              className="w-full pl-12 pr-4 py-4 bg-white border border-dark-300 rounded-lg text-dark-900 placeholder-dark-400 focus:outline-none focus:border-coral transition"
            />
          </div>
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="px-6 py-4 bg-coral text-white font-bold rounded-lg hover:bg-coral-dark transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Analizando
              </>
            ) : (
              'Analizar'
            )}
          </button>
        </div>
      </form>

      {/* Ejemplos */}
      {!result && !loading && (
        <div className="mb-10">
          <p className="text-dark-500 text-sm mb-3">
            Prueba con estas preguntas:
          </p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLE_QUERIES.map((q) => (
              <button
                key={q}
                onClick={() => handleExample(q)}
                className="px-3 py-2 bg-white border border-dark-200 rounded-lg text-sm text-dark-700 hover:border-coral hover:text-coral transition"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="text-center py-16">
          <Loader2 className="w-10 h-10 text-coral animate-spin mx-auto mb-4" />
          <p className="text-dark-600">
            Analizando evidencia científica...
          </p>
          <p className="text-dark-400 text-sm mt-2">
            Consultando metaanálisis, revisiones sistemáticas y ensayos clínicos
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {error}
        </div>
      )}

      {/* Resultado */}
      {result && <EvidenceCard result={result} query={query} />}
    </div>
  )
}
