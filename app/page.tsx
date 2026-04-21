import Image from "next/image"
import { LoginForm } from "@/components/login-form"
import { Bot, Users, Zap, Shield } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Premium Branding */}
      <div className="hidden lg:flex lg:w-[55%] bg-white relative overflow-hidden border-r border-gray-100">
        {/* Subtle accent element */}
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-purple-100 blur-[100px]" />
        
        <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16 w-full">
          {/* Logo with tagline */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Image src="/chatboq-logo.svg" alt="Chatboq" width={40} height={50} />
              <span className="text-4xl font-bold tracking-tight text-gray-900">Chatboq</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600 border border-purple-200">
              <Zap className="h-3 w-3" />
              AI-Powered Live Chat
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-lg">
            <h1 className="text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-gray-900 text-balance">
              Supercharge your customer conversations
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed text-pretty">
              Chatboq brings AI and live chat together in one powerful platform. Respond faster, convert more, and delight every customer.
            </p>

            {/* Value Props instead of stats */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  <Bot className="h-4 w-4" />
                </div>
                <span className="text-gray-700">AI that handles common questions instantly</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  <Users className="h-4 w-4" />
                </div>
                <span className="text-gray-700">Seamless handoff to your team when needed</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  <Shield className="h-4 w-4" />
                </div>
                <span className="text-gray-700">Enterprise-grade security and privacy</span>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="rounded-2xl bg-purple-50 p-6 border border-purple-100">
            <p className="text-gray-600 italic leading-relaxed">
              &quot;The future of customer support is here. AI and humans working together seamlessly.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex w-full flex-col items-center justify-center px-6 py-12 lg:w-[45%] bg-card">
        {/* Mobile Logo */}
        <div className="flex items-center gap-1 mb-10 lg:hidden">
          <Image src="/chatboq-logo.svg" alt="Chatboq" width={32} height={40} />
          <span className="text-2xl font-bold text-foreground">Chatboq</span>
        </div>
        
        <LoginForm />
      </div>
    </div>
  )
}
