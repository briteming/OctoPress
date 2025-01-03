export const metadata = {
  title: 'Blog Posts - OctoPress',
  description: 'Browse all blog posts from our GitHub Issues-powered blog.',
}

export default function PostsPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All Posts</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Browse through our collection of articles, tutorials, and guides.
          </p>
          
          {/* Search and Filter Section */}
          <div className="mt-8">
            <div className="relative">
              <input
                type="text"
                className="block w-full rounded-md border-0 py-3 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="Search posts..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <button className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold text-blue-600 hover:bg-blue-600/20">
                All Posts
              </button>
              <button className="rounded-full bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-600 hover:bg-gray-100">
                Tutorials
              </button>
              <button className="rounded-full bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-600 hover:bg-gray-100">
                Guides
              </button>
              <button className="rounded-full bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-600 hover:bg-gray-100">
                News
              </button>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {/* Post Items - These would be fetched from GitHub Issues API */}
            {[1, 2, 3, 4, 5].map((post) => (
              <article key={post} className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2025-01-03" className="text-gray-500">
                    Jan 3, 2025
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    Tutorial
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0" />
                      Example Blog Post Title {post}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    This is a placeholder description for the blog post. In the actual implementation, 
                    this would be pulled from the GitHub Issues content.
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      Shaswat Raj
                    </p>
                    <p className="text-gray-600">5 min read</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <nav className="mt-10 flex items-center justify-between border-t border-gray-200 pt-10">
            <div className="flex flex-1 justify-between">
              <a href="#" className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Previous
              </a>
              <a href="#" className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Next
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
