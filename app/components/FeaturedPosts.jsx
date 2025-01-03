import Link from 'next/link'

export function FeaturedPosts() {
  // This would typically fetch from GitHub Issues API
  const posts = [
    {
      id: 1,
      title: 'Getting Started with OctoPress',
      description: 'Learn how to set up your blog using OctoPress and GitHub Issues in minutes.',
      author: 'Shaswat Raj',
      date: '2025-01-03',
      readingTime: '5 min read',
      category: 'Tutorial'
    },
    {
      id: 2,
      title: 'Advanced Label Management',
      description: 'Master the art of organizing your blog posts with GitHub labels and categories.',
      author: 'Shaswat Raj',
      date: '2025-01-02',
      readingTime: '7 min read',
      category: 'Guide'
    },
    {
      id: 3,
      title: 'SEO Best Practices',
      description: 'Optimize your OctoPress blog for search engines and increase visibility.',
      author: 'Shaswat Raj',
      date: '2025-01-01',
      readingTime: '6 min read',
      category: 'SEO'
    }
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Posts</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn, share, and grow with our community of developers.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500">
                  {post.date}
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {post.category}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={`/posts/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {post.author}
                  </p>
                  <p className="text-gray-600">{post.readingTime}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
