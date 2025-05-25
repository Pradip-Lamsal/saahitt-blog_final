// Banner component with a layered design
const Banner = () => {
  return (
    // Main container - holds all three layers
    <div className="relative w-full max-w-[1000px] h-[340px] mx-auto my-16 px-5 flex items-center justify-center">
      {/* Bottom layer - golden background layer (smallest width, tallest height) */}
      <div className="absolute w-[80%] h-[290px] bg-[#f0ac41] rounded-3xl opacity-60 z-10"></div>

      {/* Middle layer - medium golden layer */}
      <div className="absolute w-[90%] h-[255px] bg-[#f3b84e] rounded-3xl opacity-80 z-20"></div>

      {/* Main content layer - top golden layer (widest width) */}
      <div className="relative w-full h-[230px] bg-[#f6bc4e] rounded-3xl shadow-lg z-30 flex flex-col items-center justify-center p-8">
        <div className="text-center">
          {/* Title section with decorative lines */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-16 h-px bg-[#8b4513] opacity-50"></span>
            <span className="text-[#8b4513] text-sm font-medium">Customize your Experience</span>
            <span className="w-16 h-px bg-[#8b4513] opacity-50"></span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl font-semibold text-[#654321] mb-2">
            What are you Looking for?
          </h1>

          {/* Description text */}
          <p className="text-sm text-[#8b4513] opacity-80 mb-6 max-w-[600px] mx-auto">
            Explore our dedicated vendors & services curated just for you
          </p>

          {/* Search form with dropdowns */}
          <div className="flex items-center justify-center gap-4 w-full">
            {/* First label */}
            <span className="text-base font-medium text-[#8b4513]">I am looking for</span>

            {/* Vendors dropdown */}
            <div>
              <button type="button" className="flex items-center gap-2 px-4 py-2 bg-white/25 border border-white/40 rounded-xl text-[#8b4513] font-medium min-w-[140px] justify-center">
                <svg className="w-4 h-4 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Select Vendors
                <svg className="w-4 h-4 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Second label */}
            <span className="text-base font-medium text-[#8b4513]">in / around</span>

            {/* Location dropdown */}
            <div>
              <button type="button" className="flex items-center gap-2 px-4 py-2 bg-white/25 border border-white/40 rounded-xl text-[#8b4513] font-medium min-w-[140px] justify-center">
                <svg className="w-4 h-4 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Select Location
                <svg className="w-4 h-4 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Submit button */}
            <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-[#8b4513] font-medium shadow-sm">
              Personalize my Experience
              <svg className="w-4 h-4 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
