import BSDetector from '@/components/BSDetector'

export default function DetectorPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          🔍 Detector de BS
        </h1>
        <p className="text-dark-600 text-lg">
          Pega cualquier afirmación sobre salud, nutrición o fitness.
          <br />
          Te decimos si es ciencia o humo.
        </p>
      </div>

      <BSDetector />

      <div className="mt-12 p-4 bg-cream-dark rounded-lg text-dark-500 text-sm text-center">
        ⚠️ NOISE informa basándose en evidencia científica disponible.
        No es consejo médico. Consulta siempre con un profesional.
      </div>
    </div>
  )
}
