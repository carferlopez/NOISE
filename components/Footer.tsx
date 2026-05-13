export default function Footer() {
  return (
    <footer className="border-t border-dark-200 py-10 mt-20">
      <div className="max-w-5xl mx-auto px-4 text-center text-dark-500 text-sm space-y-2">
        <p>
          ⚡ NOISE — Filtra el ruido, quédate con lo que funciona.
        </p>
        <p>
          ⚠️ Esto no es consejo médico. Consulta siempre con un profesional de la salud.
        </p>
        <p>© {new Date().getFullYear()} NOISE</p>
      </div>
    </footer>
  )
}
