import AuthButton from '@/components/AuthButton'

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-bold mb-4">Entra en NOISE</h1>
      <p className="text-dark-600 mb-8">
        Accede a tu historial, guarda consultas y gestiona tu plan.
      </p>
      <div className="flex justify-center">
        <AuthButton />
      </div>
    </div>
  )
}
