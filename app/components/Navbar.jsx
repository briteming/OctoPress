import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">🐙 OctoPress</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link 
              href="/posts"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600"
            >
              Posts
            </Link>
            <Link 
              href="/categories"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600"
            >
              Categories
            </Link>
            <Link 
              href="https://github.com/SH20RAJ/OctoPress"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
          
          <div className="flex items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Create Post
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
