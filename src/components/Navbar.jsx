import { Rocket, Star } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 bg-white/80 backdrop-blur border-b border-gray-200 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-sky-500 text-white">
            <Rocket size={18} />
          </span>
          <span className="font-semibold text-gray-900">Vibe Coding</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <li><a href="#features" className="hover:text-gray-900 transition-colors">Features</a></li>
          <li><a href="#how" className="hover:text-gray-900 transition-colors">How it works</a></li>
          <li><a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a></li>
        </ul>
        <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-gray-800">
          <Star size={16} />
          Get started
        </a>
      </nav>
    </header>
  )
}
