// Banner component with a layered design
const Banner = () => {
  // Style objects for readability
  const styles = {
    // Container styles
    container: "relative w-full max-w-[1000px] mx-auto my-16 px-5 flex items-center justify-center",
    
    // Layer styles
    bottomLayer: "absolute w-[80%] h-[290px] bg-[#f0ac41] rounded-[28px] opacity-60 z-[1]",
    middleLayer: "absolute w-[90%] h-[255px] bg-[#f3b84e] rounded-[28px] opacity-80 z-[2]",
    mainLayer: "relative w-full h-[230px] bg-[#f6bc4e] rounded-[28px] shadow-lg z-[3] flex flex-col items-center justify-center p-8",
    
    // Content styles
    contentWrapper: "text-center",
    subtitleWrapper: "flex items-center justify-center gap-3 mb-2",
    decorativeLine: "w-16 h-[1px] bg-[#8b4513] opacity-50",
    subtitleText: "text-[#8b4513] text-sm font-medium",
    mainHeading: "text-3xl font-semibold text-[#654321] mb-2",
    description: "text-sm text-[#8b4513] opacity-85 mb-6 max-w-[600px] mx-auto",
    
    // Form styles
    formWrapper: "flex items-center justify-center gap-4 w-full",
    labelText: "text-base font-medium text-[#8b4513]",
    dropdownButton: "flex items-center gap-2 px-4 py-2 bg-white/25 border border-white/40 rounded-xl text-[#8b4513] font-medium min-w-[140px] justify-center",
    submitButton: "flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-[#8b4513] font-medium shadow-sm",
    icon: "w-4 h-4 opacity-70"
  };

  return (
    // Main container - holds all three layers
    <div className={styles.container} style={{ height: '340px' }}>
      {/* Bottom layer - golden background layer (smallest width, tallest height) */}
      <div className={styles.bottomLayer}></div>

      {/* Middle layer - medium golden layer */}
      <div className={styles.middleLayer}></div>

      {/* Main content layer - top golden layer (widest width) */}
      <div className={styles.mainLayer}>
        <div className={styles.contentWrapper}>
          {/* Title section with decorative lines */}
          <div className={styles.subtitleWrapper}>
            <span className={styles.decorativeLine}></span>
            <span className={styles.subtitleText}>Customize your Experience</span>
            <span className={styles.decorativeLine}></span>
          </div>

          {/* Main heading */}
          <h1 className={styles.mainHeading}>
            What are you Looking for?
          </h1>

          {/* Description text */}
          <p className={styles.description}>
            Explore our dedicated vendors & services curated just for you
          </p>

          {/* Search form with dropdowns */}
          <div className={styles.formWrapper}>
            {/* First label */}
            <span className={styles.labelText}>I am looking for</span>

            {/* Vendors dropdown */}
            <div>
              <button type="button" className={styles.dropdownButton}>
                <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Select Vendors
                <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Second label */}
            <span className={styles.labelText}>in / around</span>

            {/* Location dropdown */}
            <div>
              <button type="button" className={styles.dropdownButton}>
                <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Select Location
                <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Submit button */}
            <button type="submit" className={styles.submitButton}>
              Personalize my Experience
              <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20">
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
