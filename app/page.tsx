import LoginForm from "@/components/auth/login-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-700 mb-2">ReWear</h1>
          <p className="text-gray-600">Sustainable Fashion Exchange Platform</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
