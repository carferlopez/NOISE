import ProtocolCard from '@/components/ProtocolCard'
import { PROTOCOLS } from '@/lib/constants'

export default function ProtocolosPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          ⚡ Protocolos MED
        </h1>
        <p className="text-dark-600 text-lg">
          La <strong className="text-dark-800">Dosis Mínima Efectiva</strong> para cada pilar de tu salud.
          <br />
          Lo mínimo que funciona. Todo lo demás es ruido.
        </p>
      </div>

      <div className="space-y-4">
        {PROTOCOLS.map((protocol) => (
          <ProtocolCard key={protocol.id} protocol={protocol} />
        ))}
      </div>

      <div className="mt-12 bg-white border border-dark-200 rounded-xl p-8 text-center">
        <p className="text-dark-700 italic text-lg mb-2">
          &ldquo;No necesitas hacerlo todo. Necesitas hacer lo mínimo, pero hacerlo bien y de forma consistente.&rdquo;
        </p>
        <p className="text-dark-500 text-sm">— Principio MED</p>
      </div>
    </div>
  )
}
