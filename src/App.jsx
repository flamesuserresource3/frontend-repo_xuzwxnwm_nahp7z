import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="get-started" className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold">Ready to build something great?</h3>
            <p className="mt-3 text-gray-600">Use the preconfigured stack to move from idea to live preview in minutes.</p>
            <div className="mt-6">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-6 py-3 text-sm font-semibold shadow hover:bg-gray-800">
                Open the sandbox
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
