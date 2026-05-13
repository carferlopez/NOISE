import NoiseScore from '@/components/NoiseScore'
import { TRENDS } from '@/lib/constants'

export default function TendenciasPage() {
  const sorted = [...TRENDS].sort((a, b) => b.noiseScore - a.noiseScore)

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">📊 Noise Score</h1>
        <p className="text-dark-600 text-lg">
          Las tendencias de salud del momento, puntuadas según su evidencia
          científica.
          <br />
          <span className="text-evidence-high">🟢 Verde = ciencia sólida</span>
          {' · '}
          <span className="text-evidence-medium">🟡 Amarillo = matices</span>
          {' · '}
          <span className="text-evidence-low">🔴 Rojo = humo</span>
        </p>
      </div>

      <div className="space-y-3">
        {sorted.map((trend) => (
          <NoiseScore key={trend.id} trend={trend} />
        ))}
      </div>
    </div>
  )
}
