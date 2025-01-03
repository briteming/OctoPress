'use server';

import { siteConfig } from '../config';
import matter from 'gray-matter';

export async function fetchGitHubAPI(endpoint, params = {}) {
  const queryString = new URLSearchParams(params).toString();
  const url = `https://api.github.com/repos/${process.env.GITHUB_REPO}${endpoint}${queryString ? '?' + queryString : ''}`;
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `token ${process.env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
    },
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }

  return response.json();
}

export async function getPosts({ page = 1, limit = 10 } = {}) {
  const issues = await fetchGitHubAPI('/issues', {
    state: 'open',
    labels: 'type:post,state:published',
    per_page: limit,
    page,
    sort: 'created',
    direction: 'desc',
  });

  return issues.map(processPost);
}

export async function getPost(number) {
  const issue = await fetchGitHubAPI(`/issues/${number}`);
  return processPost(issue);
}

function processPost(issue) {
  // Parse frontmatter from markdown content
  const { data: frontmatter, content } = matter(issue.body);

  return {
    id: issue.id,
    number: issue.number,
    title: frontmatter.title || issue.title,
    description: frontmatter.description,
    image: frontmatter.image,
    date: frontmatter.date || issue.created_at,
    author: {
      name: issue.user.login,
      avatarUrl: issue.user.avatar_url,
      url: issue.user.html_url,
    },
    tags: frontmatter.tags || [],
    content,
    labels: issue.labels,
    reactions: issue.reactions,
    url: issue.html_url,
  };
}
