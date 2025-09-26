export function ContentSection() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 text-balance">All-Inclusive Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Enjoy a unique all-inclusive experience in the heart of Mazatlán, where luxury meets Mexican hospitality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ocean View</h3>
            <p className="text-gray-600">Rooms with panoramic views of the Pacific Ocean</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Private Beach</h3>
            <p className="text-gray-600">Direct access to our exclusive beach</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Service</h3>
            <p className="text-gray-600">Personalized attention 24/7</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="space-y-4">
            <img
              src="/img/hero1.webp"
              alt="Room with ocean view"
              className="w-full h-180 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-gray-800">Luxury Rooms</h3>
            <p className="text-gray-600">
              Our rooms combine modern comfort with traditional Mexican style, offering breathtaking ocean views from every window.
            </p>
          </div>

          <div className="space-y-4">
            <img
              src="/img/hero2.webp"
              alt="Hotel restaurant"
              className="w-full h-180 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-gray-800">Exceptional Dining</h3>
            <p className="text-gray-600">
              Savor the finest Mexican and international cuisine at our restaurants, featuring fresh ingredients and panoramic ocean views.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-yellow-50 rounded-2xl p-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Ready for Your Perfect Escape?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book now and discover why Costa de Oro is the preferred destination in Mazatlán
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              Book Now
            </button>
            <button className="border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              View Special Offers
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
