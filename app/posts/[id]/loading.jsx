export default function Loading() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto animate-pulse">
          {/* Header Skeleton */}
          <div className="flex gap-4">
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
          </div>
          
          {/* Title Skeleton */}
          <div className="mt-6 h-12 w-3/4 bg-gray-200 rounded"></div>
          
          {/* Author Info Skeleton */}
          <div className="mt-4 flex gap-4">
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
          </div>

          {/* Content Skeleton */}
          <div className="mt-10 space-y-6">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            
            <div className="h-6 w-1/4 bg-gray-200 rounded mt-8"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            
            <div className="h-6 w-1/4 bg-gray-200 rounded mt-8"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
          </div>

          {/* Comments Section Skeleton */}
          <div className="mt-16 border-t border-gray-200 pt-10">
            <div className="h-8 w-32 bg-gray-200 rounded"></div>
            <div className="mt-8 space-y-8">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex gap-2">
                      <div className="h-4 w-24 bg-gray-200 rounded"></div>
                      <div className="h-4 w-20 bg-gray-200 rounded"></div>
                    </div>
                    <div className="mt-2 h-4 w-full bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
