'use client'

import { Protocol } from '@/lib/types'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Check, X } from 'lucide-react'

interface Props {
  protocol: Protocol
}

export default function ProtocolCard({ protocol }: Props) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white border border-dark-200 rounded-xl overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 flex items-center justify-between hover:bg-cream-dark/50 transition"
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl">{protocol.icon}</span>
          <div className="text-left">
            <h3 className="text-xl font-bold text-dark-900">
              {protocol.title}
            </h3>
            <p className="text-dark-600 text-sm">{protocol.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-evidence-high font-bold text-sm hidden sm:block">
            Evidencia: {protocol.evidenceScore}/10
          </span>
          {expanded ? (
            <ChevronUp className="w-5 h-5 text-dark-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-dark-600" />
          )}
        </div>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="px-6 pb-6 space-y-6 border-t border-dark-200 pt-6">
          {/* MED */}
          <div>
            <h4 className="font-bold text-coral mb-3 flex items-center gap-2">
              ⚡ Dosis Mínima Efectiva
            </h4>
            <ul className="space-y-2">
              {protocol.minimumDose.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-dark-800">
                  <Check className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Ignore list */}
          <div>
            <h4 className="font-bold text-evidence-low mb-3 flex items-center gap-2">
              🔇 Lo que puedes ignorar
            </h4>
            <ul className="space-y-2">
              {protocol.ignoreList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-dark-600">
                  <X className="w-5 h-5 text-evidence-low flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
