import React from 'react'

export default function Tags() {
  return (
    <div><div className="max-w-screen-xl mx-auto px-4 py-8">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold">Check out what's new</h2>
      <p className="text-gray-600 mt-2">
        We get insulted by others, lose trust for those others. We get back
        freezes every winter.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* First Item */}
      <div className="bg-black text-white rounded-lg p-6 flex flex-col">
        <h3 className="text-sm uppercase mb-2">Landscape</h3>
        <h2 className="text-2xl font-bold mb-4">Nature's Light</h2>
        <p className="flex-grow mb-4">
          It really matters and then like it really doesn't matter. What matters
          is the people who are sparked by it.
        </p>
        <button className="bg-white text-black py-2 px-4 rounded">Read More</button>
      </div>
      {/* Second Item */}
      <div className="bg-white rounded-lg overflow-hidden shadow">
        <img src="https://via.placeholder.com/400x200" alt="Cultural" className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg">Cultural</h3>
          <p className="text-gray-600">257 SPOTS</p>
        </div>
      </div>
      {/* Third Item */}
      <div className="bg-white rounded-lg overflow-hidden shadow">
        <img src="https://via.placeholder.com/400x200" alt="Popularity" className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg">Popularity</h3>
          <p className="text-gray-600">363 SPOTS</p>
        </div>
      </div>
      {/* Fourth Item */}
      <div className="bg-white rounded-lg overflow-hidden shadow">
        <img src="https://via.placeholder.com/400x200" alt="Modern Life" className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg">Modern Life</h3>
          <p className="text-gray-600">117 SPOTS</p>
        </div>
      </div>
      {/* Fifth Item */}
      <div className="bg-white rounded-lg overflow-hidden shadow">
        <img src="https://via.placeholder.com/400x200" alt="Good Vibes" className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg">Good Vibes</h3>
          <p className="text-gray-600">215 SPOTS</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
