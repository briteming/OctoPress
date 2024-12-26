'use client';

import { useEffect, useState } from 'react';
import { GithubBlog } from '@rena.to/github-blog';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

interface Post {
  title: string;
  body: string;
  number: number;
  labels: { name: string }[];
  createdAt: string;
  reactions: {
    THUMBS_UP: number;
    THUMBS_DOWN: number;
    LAUGH: number;
    HOORAY: number;
    CONFUSED: number;
    HEART: number;
    ROCKET: number;
    EYES: number;
  };
  author: {
    avatarUrl: string | null;
    name: string;
    login: string | null;
    twitterUsername: string | null;
  };
  totalReactions: number;
}

export default function PostPage() {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const blog = new GithubBlog({
          repo: process.env.NEXT_PUBLIC_GITHUB_REPO || '',
          token: process.env.NEXT_PUBLIC_GITHUB_TOKEN || '',
        });

        const response = await blog.getPost({
          query: { issue_number: Number(params?.number) },
        });

        setPost(response?.post);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    if (params?.number) {
      fetchPost();
    }
  }, [params?.number]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
        <Link href="/" className="mt-4 text-blue-600 hover:underline">
          Return home
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeftIcon className="h-4 w-4 mr-2" />
        Back to posts
      </Link>
      
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post?.title}</h1>
        <div className="flex items-center space-x-4">
          {post?.author?.avatarUrl && (
            <img
              src={post.author.avatarUrl}
              alt={post.author.name}
              className="h-10 w-10 rounded-full"
            />
          )}
          <div>
            <p className="text-gray-700">{post?.author?.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(post?.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {Array.isArray(post?.labels) ? post.labels.map((label) => (
            <span
              key={label?.name}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {label?.name}
            </span>
          )) : null}
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        {post?.body?.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-8 flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">❤️ {post?.reactions?.HEART || 0}</span>
          <span className="text-gray-600">👍 {post?.reactions?.THUMBS_UP || 0}</span>
          <span className="text-gray-600">🚀 {post?.reactions?.ROCKET || 0}</span>
        </div>
      </div>
    </article>
  );
} 