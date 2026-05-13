import { NextRequest, NextResponse } from 'next/server'
import { analyzeHealthClaim } from '@/lib/ai'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { claim } = body

    if (!claim || typeof claim !== 'string') {
      return NextResponse.json(
        { error: 'Envía una afirmación para analizar' },
        { status: 400 }
      )
    }

    if (claim.length > 500) {
      return NextResponse.json(
        { error: 'La consulta es demasiado larga (máx 500 caracteres)' },
        { status: 400 }
      )
    }

    // Aquí iría el rate limiting con Supabase cuando lo conectes
    // Por ahora funciona sin auth para el MVP

    const result = await analyzeHealthClaim(claim)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error analyzing claim:', error)
    return NextResponse.json(
      { error: 'Error al analizar. Inténtalo de nuevo.' },
      { status: 500 }
    )
  }
}
