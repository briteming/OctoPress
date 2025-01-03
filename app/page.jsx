import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { FeaturedPosts } from './components/FeaturedPosts'

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <FeaturedPosts />
      <Features />
    </div>
  )
}
