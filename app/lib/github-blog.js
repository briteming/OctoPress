// Check if we're on the server side
const isServer = typeof window === 'undefined';

// Get environment variables based on environment
const getEnvVar = (name) => {
  if (isServer) {
    return process.env[name];
  }
  return process.env[`NEXT_PUBLIC_${name}`];
};

const GITHUB_TOKEN = getEnvVar('GITHUB_TOKEN');
const GITHUB_REPO = getEnvVar('GITHUB_REPO') || 'SH20RAJ/OctoPress';

const [owner, repo] = GITHUB_REPO.split('/');

async function fetchGitHub(endpoint, params = {}) {
  const queryString = new URLSearchParams(params).toString();
  const url = `https://api.github.com/repos/${GITHUB_REPO}${endpoint}${queryString ? '?' + queryString : ''}`;
  
  const response = await fetch(url, {
    headers: {
      // 'Authorization': `token ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }

  return response.json();
}

export async function getPosts({ page = 1, limit = 10 } = {}) {
  try {
    const issues = await fetchGitHub('/issues', {
      state: 'open',
      labels: 'type:post,state:published',
      per_page: limit,
      page,
      sort: 'created',
      direction: 'desc',
    });

    return issues.map(issue => ({
      id: issue.id,
      number: issue.number,
      title: issue.title,
      body: issue.body,
      createdAt: issue.created_at,
      updatedAt: issue.updated_at,
      author: {
        name: issue.user.login,
        avatarUrl: issue.user.avatar_url,
        login: issue.user.login,
      },
      labels: issue.labels.map(label => ({
        name: label.name,
      })),
      url: issue.html_url,
      comments: {
        totalCount: issue.comments,
      },
      reactions: {
        totalCount: issue.reactions.total_count,
      },
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPost(slug) {
  try {
    const issues = await fetchGitHub('/issues', {
      state: 'open',
      labels: `type:post,state:published,slug:${slug}`,
    });

    if (!issues.length) return null;

    const issue = issues[0];
    return {
      id: issue.id,
      number: issue.number,
      title: issue.title,
      body: issue.body,
      createdAt: issue.created_at,
      updatedAt: issue.updated_at,
      author: {
        name: issue.user.login,
        avatarUrl: issue.user.avatar_url,
        login: issue.user.login,
      },
      labels: issue.labels.map(label => ({
        name: label.name,
      })),
      url: issue.html_url,
      comments: {
        totalCount: issue.comments,
      },
      reactions: {
        totalCount: issue.reactions.total_count,
      },
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getPostsByTag(tag, { page = 1, limit = 10 } = {}) {
  try {
    const issues = await fetchGitHub('/issues', {
      state: 'open',
      labels: `type:post,state:published,tag:${tag}`,
      per_page: limit,
      page,
      sort: 'created',
      direction: 'desc',
    });

    return issues.map(issue => ({
      id: issue.id,
      number: issue.number,
      title: issue.title,
      body: issue.body,
      createdAt: issue.created_at,
      updatedAt: issue.updated_at,
      author: {
        name: issue.user.login,
        avatarUrl: issue.user.avatar_url,
        login: issue.user.login,
      },
      labels: issue.labels.map(label => ({
        name: label.name,
      })),
      url: issue.html_url,
      comments: {
        totalCount: issue.comments,
      },
      reactions: {
        totalCount: issue.reactions.total_count,
      },
    }));
  } catch (error) {
    console.error('Error fetching posts by tag:', error);
    return [];
  }
}
