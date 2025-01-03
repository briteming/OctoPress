export async function generateMetadata({ params }) {
  // In a real implementation, this would fetch the post data from GitHub Issues API
  return {
    title: `Blog Post ${params.id} - OctoPress`,
    description: 'Read this interesting blog post on OctoPress.',
  }
}

export default function PostPage({ params }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime="2025-01-03" className="text-gray-500">
              Jan 3, 2025
            </time>
            <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
              Tutorial
            </span>
          </div>
          
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900">
            Example Blog Post Title {params.id}
          </h1>
          
          <div className="mt-4 flex items-center gap-x-4">
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">Shaswat Raj</p>
              <p className="text-gray-600">5 min read</p>
            </div>
          </div>

          <div className="mt-10 prose prose-lg prose-blue">
            <p>
              This is a placeholder for the blog post content. In the actual implementation, 
              this would be pulled from the GitHub Issues content and rendered as markdown.
            </p>
            
            <h2>Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2>Main Content</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h2>Conclusion</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

          {/* Comments Section */}
          <div className="mt-16 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Comments</h2>
            <div className="mt-8 space-y-8">
              {/* This would be populated from GitHub Issues comments */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                </div>
                <div>
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">John Doe</span>
                    <span className="ml-2 text-gray-500">2 days ago</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-700">
                    Great article! Thanks for sharing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
