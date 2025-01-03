'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { siteConfig } from '../../config';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function PostPage() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPost();
  }, [params.id]);

  async function fetchPost() {
    try {
      const response = await fetch(`https://api.github.com/repos/${siteConfig.github.repo}/issues/${params.id}`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch post');
      }

      const issue = await response.json();
      setPost({
        title: issue.title,
        body: issue.body,
        createdAt: issue.created_at,
        author: {
          name: issue.user.login,
          avatarUrl: issue.user.avatar_url,
          url: issue.user.html_url,
        },
        labels: issue.labels,
        reactions: issue.reactions,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
          <h1 className="text-red-600 dark:text-red-400 text-lg font-medium">Error loading post</h1>
          <p className="text-red-500 dark:text-red-300">{error}</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <h1 className="text-yellow-600 dark:text-yellow-400 text-lg font-medium">Post not found</h1>
          <p className="text-yellow-500 dark:text-yellow-300">The requested post could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Post Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatarUrl}
              alt={post.author.name}
              className="w-6 h-6 rounded-full"
            />
            <a href={post.author.url} className="hover:text-primary-600 dark:hover:text-primary-400">
              {post.author.name}
            </a>
          </div>
          <span>•</span>
          <time dateTime={post.createdAt}>
            {new Date(post.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
        {post.labels.length > 0 && (
          <div className="flex gap-2 mt-4">
            {post.labels.map(label => (
              <span
                key={label.id}
                className="px-2 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {label.name}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Post Content */}
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.body}
        </ReactMarkdown>
      </div>

      {/* Reactions */}
      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex gap-4">
          {Object.entries(post.reactions).map(([reaction, count]) => {
            if (reaction === 'total_count' || count === 0) return null;
            return (
              <div key={reaction} className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                <span>{getReactionEmoji(reaction)}</span>
                <span>{count}</span>
              </div>
            );
          })}
        </div>
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
