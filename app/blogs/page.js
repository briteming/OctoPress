import { getPosts } from '../actions/github';
import { siteConfig } from '../config';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Blog - ' + siteConfig.title,
  description: 'Explore our latest articles, tutorials, and insights.',
  openGraph: {
    title: 'Blog - ' + siteConfig.title,
    description: 'Explore our latest articles, tutorials, and insights.',
    type: 'website',
    url: siteConfig.seo.siteUrl + '/blogs',
    images: [
      {
        url: siteConfig.seo.defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - ' + siteConfig.title,
    description: 'Explore our latest articles, tutorials, and insights.',
    creator: siteConfig.seo.twitter,
    images: [siteConfig.seo.defaultOgImage],
  },
};

export default async function BlogsPage({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  const posts = await getPosts({ page });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Latest Posts
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Explore our latest articles, tutorials, and insights.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {post.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                <Link
                  href={`/blogs/${post.number}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {post.title}
                </Link>
              </h2>

              {/* Description */}
              {post.description && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.description}
                </p>
              )}

              {/* Metadata */}
              <div className="flex items-center justify-between mt-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Image
                    src={post.author.avatarUrl}
                    alt={post.author.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span>{post.author.name}</span>
                </div>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>

              {/* Reactions */}
              <div className="flex gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-1">
                  <span>👍</span>
                  <span>{post.reactions['+1'] || 0}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>❤️</span>
                  <span>{post.reactions.heart || 0}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>💭</span>
                  <span>{post.comments?.totalCount || 0}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <nav className="mt-12 flex justify-center space-x-4">
        {page > 1 && (
          <Link
            href={`/blogs?page=${page - 1}`}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Previous
          </Link>
        )}
        {posts.length === 10 && (
          <Link
            href={`/blogs?page=${page + 1}`}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Next
          </Link>
        )}
      </nav>
    </div>
  );
}