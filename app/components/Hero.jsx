import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link href="https://github.com/SH20RAJ/OctoPress" className="inline-flex space-x-6">
              <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
                Latest Updates
              </span>
            </Link>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Turn GitHub Issues into a CMS for your blog
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Create and manage your blog using GitHub Issues, combining seamless content management with GitHub's excellent versioning and collaboration features.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/posts"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View Posts
            </Link>
            <Link href="https://github.com/SH20RAJ/OctoPress" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="https://socialify.git.ci/SH20RAJ/OctoPress/image?description=1&forks=1&issues=1&language=1&name=1&owner=1&stargazers=1&theme=Auto"
              alt="OctoPress Preview"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-400/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
