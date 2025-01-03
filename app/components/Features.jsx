const features = [
  {
    name: 'Blazing Fast Setup',
    description: 'No installation headaches. Just plug in and play with our streamlined setup process.',
    icon: '⚡'
  },
  {
    name: 'Label Management',
    description: 'Use labels to categorize and organize your posts efficiently.',
    icon: '🏷️'
  },
  {
    name: 'Best-in-Class SEO',
    description: 'Boost your blog\'s visibility with baked-in optimization, including auto-generation of sitemap.xml and more.',
    icon: '🔍'
  },
  {
    name: 'GitHub Integration',
    description: 'Your blog, your repo—manage it all with Issues seamlessly.',
    icon: '🐙'
  },
  {
    name: 'Database-Free Option',
    description: 'Create a blog without a database subscription by using GitHub Issues and APIs.',
    icon: '💾'
  },
  {
    name: 'Next.js for SSR',
    description: 'Built with Next.js for server-side rendering, ensuring optimal SEO and performance.',
    icon: '🚀'
  },
]

export function Features() {
  return (
    <div className="py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Powerful Features for Modern Blogging
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            OctoPress combines the power of GitHub with modern web technologies to create the perfect blogging platform.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <span className="text-2xl">{feature.icon}</span>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
