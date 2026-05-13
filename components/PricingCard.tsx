import { Check } from 'lucide-react'
import Link from 'next/link'

interface Props {
  name: string
  price: string
  period?: string
  features: string[]
  cta: string
  href: string
  highlighted?: boolean
}

export default function PricingCard({
  name,
  price,
  period,
  features,
  cta,
  href,
  highlighted = false,
}: Props) {
  return (
    <div
      className={`rounded-2xl p-8 ${
        highlighted
          ? 'bg-white border-2 border-coral relative'
          : 'bg-white border border-dark-200'
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral text-white px-3 py-1 rounded-full text-xs font-bold">
          RECOMENDADO
        </span>
      )}

      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {period && <span className="text-dark-600">/{period}</span>}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-dark-700">
            <Check className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={`block text-center py-3 rounded-lg font-bold transition ${
          highlighted
            ? 'bg-coral text-white hover:bg-coral-dark'
            : 'bg-cream-dark text-dark-800 hover:bg-cream-dark'
        }`}
      >
        {cta}
      </Link>
    </div>
  )
}
