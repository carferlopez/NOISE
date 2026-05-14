import Link from 'next/link'
import { Shield, Search, Zap, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-4">
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <h1 className="font-black tracking-tighter leading-[0.82] text-coral select-none mb-8 text-center" style={{ fontSize: 'clamp(3rem, 18vw, 10rem)' }}>
          <span className="relative inline-block">
            <span aria-hidden className="absolute left-0 top-0 text-coral/25" style={{ transform: 'translateY(-0.31em)' }}>N</span>
            <span aria-hidden className="absolute left-0 top-0 text-coral/50" style={{ transform: 'translateY(-0.16em)' }}>N</span>
            <span className="relative">N</span>
          </span>
          OISE
        </h1>

        <div className="h-2 bg-coral my-6 md:my-8 max-w-xs mx-auto" />

        <p className="text-base md:text-lg font-bold uppercase tracking-[0.18em] text-dark-900 mb-6 md:mb-8 text-center">
          No more bullshit in health.
        </p>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-dark-700 mb-8">
            En salud, nutrición y fitness hay demasiado ruido, modas y consejos
            contradictorios. NOISE te dice qué es BS y cuál es la{' '}
            <strong className="text-dark-900">dosis mínima efectiva</strong> que
            la ciencia realmente respalda.
          </p>
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
      <div className="bg-white border border-dark-200 rounded-xl p-8 hover:border-coral transition group cursor-pointer h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-coral transition">
          {title}
        </h3>
        <p className="text-dark-600">{description}</p>
      </div>
    </Link>
  )
}
