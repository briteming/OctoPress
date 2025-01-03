# OctoPress Installation Guide

Welcome to OctoPress! This guide will help you set up your blog powered by GitHub Issues.

## Prerequisites

- Node.js 16.x or higher
- A GitHub account
- Basic knowledge of GitHub Issues

## Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/SH20RAJ/OctoPress.git
   cd OctoPress
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   GITHUB_REPO=your-username/your-repo
   GITHUB_TOKEN=your_github_token_here
   ```
   
   Get your GitHub token from: https://github.com/settings/tokens
   Required permissions: `repo` access

4. **Configuration**
   Edit `app/config.js` to customize your blog:
   - Site information
   - Theme settings
   - Navigation links
   - Feature toggles
   - And more!

5. **Start Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Creating Blog Posts

1. Go to your GitHub repository
2. Create a new issue
3. Add the following labels:
   - `type:post` - Required to mark as a blog post
   - `state:published` - Required to make it visible
   - `slug:your-post-slug` - Define the URL (optional)
   - `tag:your-tag` - Categorize your post (optional)
   - `featured:true` - Feature on homepage (optional)

### Post Format

Your issue should follow this format:

```markdown
---
title: Your Post Title
description: A brief description of your post
cover: https://your-image-url.com/image.jpg
date: 2024-01-01
---

Your post content here in Markdown format.

## Subheading

Regular text with **bold** and *italic* formatting.

- List items
- More items

\`\`\`javascript
// Code blocks are supported
console.log('Hello World!');
\`\`\`
```

## Sample Posts

Check the `samples/` directory for example posts you can copy to your issues.

## Deployment

### Vercel (Recommended)
1. Fork this repository
2. Connect your fork to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify
1. Fork this repository
2. Connect your fork to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy!

## Configuration Guide

### Site Information
```javascript
// app/config.js
export const siteConfig = {
  title: "Your Blog Name",
  description: "Your blog description",
  // ... more options
}
```

### Theme Customization
```javascript
theme: {
  defaultTheme: 'light', // or 'dark'
  colors: {
    primary: '#your-color',
    secondary: '#your-color'
  }
}
```

### Features Toggle
```javascript
features: {
  categories: true,  // Enable/disable category pages
  tags: true,        // Enable/disable tag filtering
  search: true,      // Enable/disable search
  newsletter: false, // Enable/disable newsletter
  comments: true     // Enable/disable comments
}
```

## Need Help?

- Check our [FAQ](FAQ.md)
- Open an issue
- Join our community discussions

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.
