import PricingCard from '@/components/PricingCard'

export default function PricingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple. Sin trucos.</h1>
        <p className="text-dark-600 text-lg">
          Empieza gratis. Pasa a Pro cuando lo necesites.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        <PricingCard
          name="Gratis"
          price="€0"
          features={[
            '5 consultas al Detector de BS por día',
            'Protocolos MED básicos (5 pilares)',
            'Noise Score de tendencias',
          ]}
          cta="Empezar gratis"
          href="/detector"
        />

        <PricingCard
          name="Pro"
          price="€7"
          period="mes"
          highlighted
          features={[
            'Detector de BS ilimitado',
            'Protocolos MED detallados con fuentes',
            'Historial de consultas',
            'Sin publicidad',
            'Soporte prioritario',
          ]}
          cta="Ser Pro"
          href="/api/create-checkout"
        />
      </div>

      <p className="text-center text-dark-500 text-sm mt-8">
        Cancela cuando quieras. Sin permanencia. Sin preguntas.
      </p>
    </div>
  )
}
