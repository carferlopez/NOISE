import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Tu Dashboard</h1>

      <div className="grid gap-6">
        {/* Plan actual */}
        <div className="bg-white border border-dark-200 rounded-xl p-6">
          <h2 className="font-bold text-dark-700 text-sm uppercase tracking-wider mb-2">
            Tu plan
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">Gratis</p>
              <p className="text-dark-600">5 consultas/día</p>
            </div>
            <Link
              href="/pricing"
              className="px-4 py-2 bg-coral text-white font-bold rounded-lg hover:bg-coral-dark transition text-sm"
            >
              Upgrade a Pro
            </Link>
          </div>
        </div>

        {/* Acciones rápidas */}
        <div className="grid sm:grid-cols-3 gap-4">
          <Link
            href="/detector"
            className="bg-white border border-dark-200 rounded-xl p-6 hover:border-coral transition text-center"
          >
            <span className="text-3xl block mb-2">🔍</span>
            <span className="font-bold">Detector de BS</span>
          </Link>
          <Link
            href="/protocolos"
            className="bg-white border border-dark-200 rounded-xl p-6 hover:border-coral transition text-center"
          >
            <span className="text-3xl block mb-2">📋</span>
            <span className="font-bold">Protocolos</span>
          </Link>
          <Link
            href="/tendencias"
            className="bg-white border border-dark-200 rounded-xl p-6 hover:border-coral transition text-center"
          >
            <span className="text-3xl block mb-2">📊</span>
            <span className="font-bold">Tendencias</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
