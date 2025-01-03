import { getPost } from '../../actions/github';
import { siteConfig } from '../../config';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import rehypePrism from 'rehype-prism-plus';

export async function generateMetadata({ params }) {
  const post = await getPost(params.id);
  
  if (!post) {
    return {
      title: 'Post Not Found - ' + siteConfig.title,
    };
  }

  return {
    title: post.title + ' - ' + siteConfig.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `${siteConfig.seo.siteUrl}/blogs/${post.number}`,
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [
        {
          url: siteConfig.seo.defaultOgImage,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: siteConfig.seo.twitter,
      images: [post.image || siteConfig.seo.defaultOgImage],
    },
  };
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.id);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <h1 className="text-yellow-600 dark:text-yellow-400 text-lg font-medium">
            Post not found
          </h1>
          <p className="text-yellow-500 dark:text-yellow-300">
            The requested post could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Post Header */}
      <header className="mb-8">
        {post.image && (
          <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>

        {post.description && (
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            {post.description}
          </p>
        )}

        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <Image
              src={post.author.avatarUrl}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <a
              href={post.author.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 dark:hover:text-primary-400"
            >
              {post.author.name}
            </a>
          </div>
          <span>•</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </header>

      {/* Post Content */}
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkFrontmatter]}
          rehypePlugins={[rehypePrism]}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      {/* Reactions */}
      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex gap-4">
          {Object.entries(post.reactions).map(([reaction, count]) => {
            if (reaction === 'total_count' || count === 0) return null;
            const emoji = getReactionEmoji(reaction);
            return (
              <div
                key={reaction}
                className="flex items-center gap-1 text-gray-600 dark:text-gray-400"
              >
                <span>{emoji}</span>
                <span>{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* GitHub Link */}
      <div className="mt-8 text-center">
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
        >
          View on GitHub →
        </a>
      </div>
    </article>
  );
}

function getReactionEmoji(reaction) {
  const emojis = {
    '+1': '👍',
    '-1': '👎',
    laugh: '😄',
    hooray: '🎉',
    confused: '😕',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀',
  };
  return emojis[reaction] || reaction;
}
