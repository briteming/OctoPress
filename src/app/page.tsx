'use client';

import { useState, useEffect } from 'react';
import { GithubBlog } from '@rena.to/github-blog';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

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

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const blog = new GithubBlog({
          repo: process.env.NEXT_PUBLIC_GITHUB_REPO || '',
          token: process.env.NEXT_PUBLIC_GITHUB_TOKEN || '',
          queryDefaults: {
            state: 'published',
            type: 'post',
          },
        });

        const response = await blog.getPosts({
          pager: { limit: 10, offset: 0 },
        });

        setPosts(response.edges.map(edge => edge.post));
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            🐙 OctoPress
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Turn your GitHub Issues into a CMS for your blog
          </p>
        </div>

        <div className="mt-12">
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  href={`/post/${post?.number}`}
                  key={post?.number}
                  className="block"
                >
                  <article
                    className="bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-semibold text-gray-900">
                        {post.title}
                      </h2>
                      <ChevronRightIcon className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {Array.isArray(post.labels) ? post.labels.map((label) => (
                        <span
                          key={label.name}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {label.name}
                        </span>
                      )) : null}
                    </div>
                    <p className="mt-3 text-gray-600 line-clamp-3">
                      {(post.body ?? '').substring(0, 200)}...
                    </p>
                    <div className="mt-4 text-sm text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
