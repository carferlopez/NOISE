import { AnalysisResult } from '@/lib/types'
import { AlertTriangle, CheckCircle, HelpCircle, BookOpen, Zap, XCircle } from 'lucide-react'

interface Props {
  result: AnalysisResult
  query: string
}

export default function EvidenceCard({ result, query }: Props) {
  const levelConfig = {
    high: {
      color: 'text-evidence-high',
      bg: 'bg-evidence-high/10',
      border: 'border-evidence-high/30',
      icon: <CheckCircle className="w-6 h-6" />,
      label: 'Evidencia fuerte',
    },
    medium: {
      color: 'text-evidence-medium',
      bg: 'bg-evidence-medium/10',
      border: 'border-evidence-medium/30',
      icon: <HelpCircle className="w-6 h-6" />,
      label: 'Evidencia moderada',
    },
    low: {
      color: 'text-evidence-low',
      bg: 'bg-evidence-low/10',
      border: 'border-evidence-low/30',
      icon: <AlertTriangle className="w-6 h-6" />,
      label: 'Evidencia débil / BS',
    },
  }

  const config = levelConfig[result.evidenceLevel]

  return (
    <div className={`${config.bg} ${config.border} border rounded-2xl p-8 space-y-6`}>
      {/* Veredicto */}
      <div className="flex items-start gap-4">
        <span className="text-4xl">{result.emoji}</span>
        <div>
          <p className="text-dark-500 text-sm mb-1">Tu pregunta: &ldquo;{query}&rdquo;</p>
          <h3 className={`text-2xl font-bold ${config.color}`}>
            {result.verdict}
          </h3>
        </div>
      </div>

      {/* Score */}
      <div className="flex items-center gap-3">
        <div className={`flex items-center gap-2 ${config.color}`}>
          {config.icon}
          <span className="font-medium">{config.label}</span>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`w-6 h-3 rounded-sm ${
                i < result.evidenceScore
                  ? result.evidenceLevel === 'high'
                    ? 'bg-evidence-high'
                    : result.evidenceLevel === 'medium'
                    ? 'bg-evidence-medium'
                    : 'bg-evidence-low'
                  : 'bg-cream-dark'
              }`}
            />
          ))}
        </div>
        <span className={`font-bold ${config.color}`}>
          {result.evidenceScore}/10
        </span>
      </div>

      {/* Explicación */}
      <div>
        <h4 className="font-bold text-dark-800 mb-2 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          Lo que dice la ciencia
        </h4>
        <p className="text-dark-700 leading-relaxed whitespace-pre-line">
          {result.explanation}
        </p>
      </div>

      {/* MED */}
      {result.minimumDose && (
        <div className="bg-white/60 rounded-lg p-5">
          <h4 className="font-bold text-coral mb-2 flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Dosis Mínima Efectiva
          </h4>
          <p className="text-dark-700 leading-relaxed">
            {result.minimumDose}
          </p>
        </div>
      )}

      {/* BS Factors */}
      {result.bullshitFactors.length > 0 && (
        <div>
          <h4 className="font-bold text-evidence-low mb-2 flex items-center gap-2">
            <XCircle className="w-4 h-4" />
            Lo que suelen decir (y es falso)
          </h4>
          <ul className="space-y-1">
            {result.bullshitFactors.map((bs, i) => (
              <li key={i} className="text-dark-600 flex items-start gap-2">
                <span className="text-evidence-low mt-0.5">✗</span>
                {bs}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Fuentes */}
      {result.sources.length > 0 && (
        <div className="border-t border-dark-200 pt-4">
          <h4 className="font-bold text-dark-600 text-sm mb-2">📚 Fuentes verificadas</h4>
          <ul className="space-y-2">
            {result.sources.map((source, i) => (
              <li key={i} className="text-sm">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral hover:underline break-words"
                >
                  {source.title}
                </a>
                <span className="text-dark-400 ml-2 text-xs">↗</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
