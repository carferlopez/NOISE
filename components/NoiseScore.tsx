import { Trend } from '@/lib/types'

interface Props {
  trend: Trend
}

export default function NoiseScore({ trend }: Props) {
  const getColor = (score: number) => {
    if (score >= 7) return 'text-evidence-high'
    if (score >= 4) return 'text-evidence-medium'
    return 'text-evidence-low'
  }

  const getBgColor = (score: number) => {
    if (score >= 7) return 'bg-evidence-high'
    if (score >= 4) return 'bg-evidence-medium'
    return 'bg-evidence-low'
  }

  const getLabel = (score: number) => {
    if (score >= 8) return '✅ Sólido'
    if (score >= 6) return '🟡 Hay matices'
    if (score >= 3) return '⚠️ Dudoso'
    return '🔴 BS'
  }

  return (
    <div className="bg-white border border-dark-200 rounded-xl p-5 hover:border-dark-400 transition">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-dark-900">{trend.name}</h3>
        <span className={`font-bold text-lg ${getColor(trend.noiseScore)}`}>
          {trend.noiseScore}/10
        </span>
      </div>

      {/* Bar */}
      <div className="w-full h-2 bg-cream-dark rounded-full mb-3">
        <div
          className={`h-2 rounded-full transition-all ${getBgColor(trend.noiseScore)}`}
          style={{ width: `${trend.noiseScore * 10}%` }}
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-dark-600 text-sm">{trend.oneLiner}</p>
        <span className="text-xs text-dark-500 whitespace-nowrap ml-3">
          {getLabel(trend.noiseScore)}
        </span>
      </div>
    </div>
  )
}
