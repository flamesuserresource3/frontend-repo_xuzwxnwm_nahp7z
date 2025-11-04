import { Rocket, Shield, Star, Zap } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Backend-first workflow',
    desc: 'Spin up FastAPI endpoints with database persistence in seconds.'
  },
  {
    icon: Star,
    title: 'Beautiful UIs fast',
    desc: 'Vite + React + Tailwind with prebuilt patterns and animations.'
  },
  {
    icon: Shield,
    title: 'Safe by default',
    desc: 'Clear separation of concerns and secure environment by design.'
  },
  {
    icon: Zap,
    title: 'Live preview',
    desc: 'Instant feedback loops with hot-reload and shareable previews.'
  }
]

export default function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need to ship</h2>
          <p className="mt-3 text-gray-600">From API routes to polished components — all inside an isolated, ephemeral sandbox.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
