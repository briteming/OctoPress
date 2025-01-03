import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { FeaturedPosts } from './components/FeaturedPosts'
import { getPosts } from './lib/github-blog'
import { siteConfig } from './config'
import PostsPage from './posts/page'

export const revalidate = 3600 // Revalidate every hour

export default async function Home() {
  // If landing page is disabled, show posts directly
  if (!siteConfig.layout.showLandingPage) {
    return <PostsPage />
  }

  // Otherwise show the landing page with featured posts
  const posts = await getPosts({ limit: siteConfig.homepage.featuredPosts.count });
  
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <Features />
      <FeaturedPosts posts={posts} />
    </div>
  )
}
