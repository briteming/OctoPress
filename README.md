# 🐙 OctoPress

Turn your GitHub Issues into a CMS for your blog! 🎉

[![Visitors](https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FOctoPress&countColor=%23dce775&style=flat)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FOctoPress)
[![GitHub license](https://img.shields.io/github/license/SH20RAJ/OctoPress)](https://github.com/SH20RAJ/OctoPress/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/SH20RAJ/OctoPress)](https://github.com/SH20RAJ/OctoPress/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/SH20RAJ/OctoPress)](https://github.com/SH20RAJ/OctoPress/issues)
[![GitHub forks](https://img.shields.io/github/forks/SH20RAJ/OctoPress)](https://github.com/SH20RAJ/OctoPress/network)
[![Twitter](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FOctoPress)](https://twitter.com/intent/tweet?text=Check%20out%20OctoPress!&url=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FOctoPress)

![OctoPress](https://socialify.git.ci/SH20RAJ/OctoPress/image?description=1&forks=1&issues=1&language=1&name=1&owner=1&stargazers=1&theme=Auto)

## 🌟 Features

- **🚀 Zero-Config Setup**: Get started in minutes with minimal configuration
- **📝 GitHub Issues as CMS**: Use GitHub Issues to write and manage your blog posts
- **🎨 Beautiful UI**: Modern, responsive design with dark mode support
- **🔍 SEO Optimized**: Built-in SEO features for better visibility
- **⚡ Next.js Powered**: Fast, server-side rendered pages
- **🏷️ Label Management**: Organize posts with GitHub labels
- **🔎 Search & Filter**: Find posts easily with built-in search
- **📱 Mobile Friendly**: Looks great on all devices
- **🌙 Dark Mode**: Built-in dark mode support
- **🔧 Fully Customizable**: Easy configuration through a single file

## 🚀 Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/SH20RAJ/OctoPress.git
   cd OctoPress
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment**
   Create `.env.local`:
   ```env
   GITHUB_REPO=your-username/your-repo
   GITHUB_TOKEN=your_github_token_here
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

Visit [INSTALLATION.md](INSTALLATION.md) for detailed setup instructions.

## 📝 Creating Posts

1. Go to your GitHub repository
2. Create a new issue
3. Add required labels:
   - `type:post` (required)
   - `state:published` (required)
   - `slug:your-post-slug` (optional)
   - `tag:your-tag` (optional)

Check the [samples/](samples/) directory for example posts!

## ⚙️ Configuration

Easy configuration through `app/config.js`:

```javascript
export const siteConfig = {
  title: "Your Blog Name",
  description: "Your blog description",
  // ... more options
}
```

## 🎨 Customization

1. **Theme Settings**
   ```javascript
   theme: {
     defaultTheme: 'light', // or 'dark'
     colors: {
       primary: '#0ea5e9',
       secondary: '#64748b',
     }
   }
   ```

2. **Feature Toggles**
   ```javascript
   features: {
     categories: true,
     tags: true,
     search: true,
     newsletter: false,
     comments: true
   }
   ```

## 🚀 Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FOctoPress)

### Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/SH20RAJ/OctoPress)

## 🤝 Contributing

We love contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📜 License

MIT License - see [LICENSE](LICENSE) for details.

## 👨‍💻 Author

**Shaswat Raj**
- GitHub: [@sh20raj](https://github.com/sh20raj)
- Twitter: [@sh20raj](https://twitter.com/sh20raj)

---

⭐ If you like OctoPress, give it a star on GitHub! ⭐
