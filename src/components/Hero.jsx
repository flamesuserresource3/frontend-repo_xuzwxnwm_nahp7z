export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Build full-stack apps with an AI coding copilot
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Design, code, and deploy in minutes. Spin up backends, craft beautiful UIs,
            and preview everything live in one seamless workspace.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-indigo-500">
              Start building
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 ring-1 ring-gray-200 px-5 py-3 text-sm font-semibold hover:bg-gray-50">
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
