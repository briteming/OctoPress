export const siteConfig = {
  // Basic site info
  title: "OctoPress blog of brite",
  description: "A modern blog platform powered by GitHub Issues",
  logo: "🐙",
  
  // Layout Configuration
  layout: {
    showLandingPage: true, // Set to false to show posts directly
    postsPerPage: 5,
    defaultView: 'list', // 'grid' or 'list'
  },

  // GitHub Configuration
  github: {
    repo: process.env.GITHUB_REPO || "briteming/OctoPress",
    branch: "main",
    // Optional: Custom label configuration
    labels: {
      post: "type:post",
      published: "state:published",
      featured: "featured:true",
    }
  },

  // Navigation
  nav: {
    links: [
      { text: "Home", href: "/" },
      { text: "Blog", href: "/blog" },
      { text: "About", href: "/about" },
      { text: "Contact", href: "/contact" },
      { text: "GitHub", href: "https://github.com/SH20RAJ/OctoPress" },
    ]
  },

  // Theme Configuration
  theme: {
    defaultTheme: 'light', // 'light' or 'dark'
    darkMode: false,
    accentColor: "#0070f3",
    fontFamily: "Inter",
    colors: {
      primary: '#0ea5e9',
      secondary: '#64748b',
    },
    fonts: {
      body: 'Inter, sans-serif',
      heading: 'Inter, sans-serif',
    },
    images: {
      dangerouslyAllowSVG: true, // Allow SVG images
      domains: ['socialify.git.ci', 'i.imgur.com', 'raw.githubusercontent.com'],
    }
  },

  // Blog Features
  features: {
    categories: true, // Enable/disable category pages
    tags: true, // Enable/disable tag filtering
    search: true, // Enable/disable search
    newsletter: false, // Enable/disable newsletter subscription
    comments: true, // Enable/disable GitHub comments
    rss: true,
    sitemap: true,
  },

  // Homepage Sections
  homepage: {
    hero: {
      title: "Welcome to OctoPress",
      description: "A modern blog platform powered by GitHub Issues. Write your content in GitHub, and let OctoPress handle the rest.",
      button: {
        text: "Explore Posts",
        href: "/posts"
      }
    },
    featuredPosts: {
      enabled: true,
      title: "Featured Posts",
      count: 3
    }
  },

  // SEO Configuration
  seo: {
    twitter: "@sh20raj",
    siteUrl: "https://octopress.netlify.app",
    googleAnalytics: "UA-XXXXXXXXX-X", // GA measurement ID
  },

  // Footer Configuration
  footer: {
    copyright: `© ${new Date().getFullYear()} OctoPress. All rights reserved.`,
    links: [
      { text: "Privacy", href: "/privacy" },
      { text: "Terms", href: "/terms" },
      { text: "RSS", href: "/rss.xml" },
    ]
  },
  social: {
    twitter: "https://twitter.com/sh20raj",
    github: "https://github.com/sh20raj",
    linkedin: "https://linkedin.com/in/sh20raj"
  },
  analytics: {
    googleAnalyticsId: "UA-XXXXXXXXX-X"
  },
  commenting: {
    enabled: true,
    platforms: {
      disqus: {
        enabled: true,
        shortname: "octopress"
      },
      utterances: {
        enabled: true,
        repo: "sh20raj/OctoPress"
      }
    }
  },
  newsletter: {
    provider: "mailchimp",
    action: "https://"
  },
  advertising: {
    enabled: true,
    providers: {
      adsense: {
        enabled: true,
        clientId: "ca-pub-XXXXXXXXXXXXXXXX",
        slots: {
          sidebar: "XXXXXXXXXX",
          inArticle: "XXXXXXXXXX",
          banner: "XXXXXXXXXX"
        },
        autoAds: true
      },
      medianet: {
        enabled: false,
        siteId: "XXXXXXXXXX"
      },
      taboola: {
        enabled: false,
        publisherId: "XXXXXXXXXX"
      }
    },
    placements: {
      showInHeader: false,
      showInSidebar: true,
      showInArticle: true,
      showInFooter: false
    }
  }
}
