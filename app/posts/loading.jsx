export default function Loading() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="animate-pulse">
            {/* Header Skeleton */}
            <div className="h-8 w-2/3 bg-gray-200 rounded"></div>
            <div className="mt-2 h-4 w-full bg-gray-200 rounded"></div>
            
            {/* Search Bar Skeleton */}
            <div className="mt-8 h-12 w-full bg-gray-200 rounded-md"></div>
            
            {/* Filter Buttons Skeleton */}
            <div className="mt-4 flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-20 bg-gray-200 rounded-full"></div>
              ))}
            </div>

            {/* Posts Skeleton */}
            <div className="mt-10 space-y-16 border-t border-gray-200 pt-10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                  <div className="h-20 w-full bg-gray-200 rounded"></div>
                  <div className="flex gap-4">
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
