export const siteConfig = {
    "siteMetadata": {
        "name": "OctoPress",
        "title": "OctoPress - GitHub Issues as CMS",
        "titleTemplate": "%s | OctoPress Blog",
        "description": "A modern blog platform built with React and GitHub integration. Share your thoughts, code, and ideas with the world.",
        "siteUrl": "https://octopress.netlify.app/",
        "author": "sh20raj",
        "twitter": "https://twitter.com/sh20raj",
        "github": "https://github.com/sh20raj",
        "image": "/og-image.jpg",
        "language": "en",
        "ogMetadata": {
            "type": "website",
            "locale": "en_US",
            "siteName": "OctoPress Blog",
            "twitterCard": "summary_large_image",
            "twitterCreator": "@sh20raj"
        },
        "keywords": "blog, tech blog, fintech, programming, web development, react"
    },
    "blog": {
        "postsPerPage": 10,
        "featuredPosts": 3,
        "repository": {
            "owner": "sh20raj",
            "name": "OctoPress",
            "branch": "main",
            "repoUrl": "https://github.com/SH20RAJ/OctoPress",
            "showRepoLink": true
        }
    },

    "navigation": {
        "header": [
            { "label": "Blog", "path": "/blog" },
            { "label": "About", "path": "/about" },
            { "label": "Contact", "path": "/contact" }
        ],
        "footer": [
            { "label": "Privacy", "path": "/privacy" },
            { "label": "Terms", "path": "/terms" }
        ]
    },
    "features": {
        "search": {
            "enabled": true,
        },
        "rss": {
            "enabled": true,
            "path": "/rss.xml"
        },
        "sitemap": {
            "enabled": true
        }
    },
    "theme": {
        "darkMode": false,
        "accentColor": "#0070f3",
        "fontFamily": "Inter"
    },
    "social": {
        "twitter": "https://twitter.com/sh20raj",
        "github": "https://github.com/sh20raj",
        "linkedin": "https://linkedin.com/in/sh20raj"
    },
    "analytics": {
        "googleAnalyticsId": "UA-XXXXXXXXX-X"
    },
    "commenting": {
        "enabled": true,
        "platforms": {
            "disqus": {
                "enabled": true,
                "shortname": "octopress"
            },
            "utterances": {
                "enabled": true,
                "repo": "sh20raj/OctoPress"
            }
        }
    },
    "newsletter": {
        "provider": "mailchimp",
        "action": "https://"
    },
    "search": {
        "enabled": true,
        "algolia": {
            "enabled": false,
            "appId": "XXXXXXXXXX",
        }
    }
    ,
    "advertising": {
        "enabled": true,
        "providers": {
            "adsense": {
                "enabled": true,
                "clientId": "ca-pub-XXXXXXXXXXXXXXXX",
                "slots": {
                    "sidebar": "XXXXXXXXXX",
                    "inArticle": "XXXXXXXXXX",
                    "banner": "XXXXXXXXXX"
                },
                "autoAds": true
            },
            "medianet": {
                "enabled": false,
                "siteId": "XXXXXXXXXX"
            },
            "taboola": {
                "enabled": false,
                "publisherId": "XXXXXXXXXX"
            }
        },
        "placements": {
            "showInHeader": false,
            "showInSidebar": true,
            "showInArticle": true,
            "showInFooter": false
        }
    }


}