import Link from 'next/link'
import { Shield, Search, Zap, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-4">
      {/* Hero */}
      <section className="py-20 md:py-28 text-center">
        <h1 className="font-hero font-black leading-tight mb-10" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}>
          <span className="block">
            <span className="text-dark-900">No More </span>
            <span className="text-coral">Bullshit</span>
          </span>
          <span className="block text-dark-900">in Health</span>
        </h1>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-dark-700 mb-10">
            En salud, nutrición y fitness hay demasiado ruido, modas y consejos
            contradictorios. Noise te dice qué es Bullshit y cuál es la dosis mínima efectiva que la ciencia realmente respalda.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <Link
              href="/detector"
              className="text-center px-5 py-3 bg-coral text-white font-bold rounded-lg text-base transition-all duration-200 hover:scale-105 hover:bg-coral-dark"
            >
              Probar el Detector de BS
            </Link>
            <Link
              href="/protocolos"
              className="text-center px-5 py-3 bg-white text-dark-900 font-bold rounded-lg text-base border border-dark-300 transition-all duration-200 hover:scale-105 hover:bg-cream-dark hover:border-dark-500"
            >
              Ver Protocolos MED
            </Link>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-16">
          Tres herramientas. Cero ruido.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Search className="w-8 h-8 text-coral" />}
            title="Detector de BS"
            description="Pregunta cualquier claim de salud. Te decimos si es ciencia o humo, con fuentes."
            href="/detector"
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-coral" />}
            title="Protocolos MED"
            description="La dosis mínima efectiva para ejercicio, nutrición, sueño, mente y suplementos."
            href="/protocolos"
          />
          <FeatureCard
            icon={<TrendingUp className="w-8 h-8 text-coral" />}
            title="Noise Score"
            description="Las tendencias de salud del momento, puntuadas del 0 al 10 según su evidencia."
            href="/tendencias"
          />
        </div>
      </section>

      {/* Principio */}
      <section className="py-20">
        <div className="bg-white border border-dark-200 rounded-2xl p-10 text-center max-w-3xl mx-auto">
          <p className="text-2xl italic text-dark-800 mb-6">
            &ldquo;La dosis mínima efectiva es la dosis más pequeña que produce
            el resultado deseado. Todo lo que va más allá es desperdicio.&rdquo;
          </p>
          <p className="text-dark-600">— Tim Ferriss, The 4-Hour Body</p>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-20 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-coral" />
          <span className="text-dark-600 text-sm uppercase tracking-wider">
            Filosofía
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-6">
          Inspirado en ciencia, no en influencers
        </h2>
        <div className="flex flex-wrap justify-center gap-6 text-dark-600">
          {[
            '📖 "Tu Mejor Yo" — Darío Pescador',
            '📖 "Outlive" — Peter Attia',
            '🎙️ Huberman Lab',
            '📖 "The 4-Hour Body" — Tim Ferriss',
            '📖 "Fitness Revolution" — Marcos Vázquez',
          ].map((source) => (
            <span
              key={source}
              className="px-4 py-2 bg-white rounded-full text-sm border border-dark-200"
            >
              {source}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}) {
  return (
    <Link href={href}>
      <div className="bg-white border border-dark-200 rounded-xl p-8 hover:bg-dark-900 hover:border-dark-900 transition group cursor-pointer h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-dark-900 group-hover:text-white transition">
          {title}
        </h3>
        <p className="text-dark-600 group-hover:text-dark-300 transition">{description}</p>
      </div>
    </Link>
  )
}
