export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Vibe Coding. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-900">Docs</a>
          <a href="#" className="hover:text-gray-900">Changelog</a>
          <a href="#" className="hover:text-gray-900">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
