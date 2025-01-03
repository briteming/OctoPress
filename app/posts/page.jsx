'use client';

import { useState, useEffect } from 'react';
import { getPosts } from '../lib/github-blog';
import { siteConfig } from '../config';
import Image from 'next/image';
import Link from 'next/link';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState('grid'); // 'grid' or 'list'
  const postsPerPage = siteConfig.layout.postsPerPage;

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  async function fetchPosts() {
    try {
      const fetchedPosts = await getPosts({ 
        page: currentPage, 
        limit: postsPerPage 
      });
      setPosts(fetchedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  }

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const readingTime = (text) => {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-900 dark:to-primary-950">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:16px_16px]" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Latest Posts
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-primary-100">
              Explore our collection of articles, tutorials, and insights.
            </p>
          </div>
        </div>
      </div>

      {/* Search and View Toggle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-lg ${
                view === 'grid'
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                  : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-lg ${
                view === 'list'
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                  : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
        ) : view === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {post.image && (
                  <div className="relative h-48 w-full">
                    <img
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.labels.map(label => (
                      <span
                        key={label.name}
                        className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                      >
                        {label.name}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    <Link
                      href={`/posts/${post.number}`}
                      className="hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.body.slice(0, 150)}...
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <div className="relative h-6 w-6 rounded-full overflow-hidden">
                          <img
                            src={post.author.avatarUrl}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span>{post.author.name}</span>
                      </div>
                      <span>{readingTime(post.body)} min read</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col md:flex-row gap-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {post.image && (
                  <div className="relative h-48 md:h-auto md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.labels.map(label => (
                      <span
                        key={label.name}
                        className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                      >
                        {label.name}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    <Link
                      href={`/posts/${post.number}`}
                      className="hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.body.slice(0, 300)}...
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden">
                          <Image
                            src={post.author.avatarUrl}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span>{post.author.name}</span>
                      </div>
                      <span>•</span>
                      <time dateTime={post.createdAt}>
                        {new Date(post.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                      <span>•</span>
                      <span>{readingTime(post.body)} min read</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <span>👍</span>
                        <span>{post.reactions['+1'] || 0}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>💭</span>
                        <span>{post.comments?.totalCount || 0}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {!loading && filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-600 dark:text-gray-400">
              No posts found
            </h3>
          </div>
        )}

        {/* Pagination */}
        <nav className="mt-12 flex justify-center space-x-4">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(p => p + 1)}
            disabled={posts.length < postsPerPage}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}
