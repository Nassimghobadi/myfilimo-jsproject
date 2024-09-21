let fetchContent = async (type) => {
  let favorites = "";
  try {
    // Fetching the data
    let data = await fetch(`http://localhost:3001/favorites`);
    
    // Checking if the fetch was successful
    if (!data.ok) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }

    let res = await data.json(); // Parse the JSON response

    let category = "";
    if (type === 'series') {
      category = "سریال"; // Persian word for series
    } else if (type === 'movies') {
      category = "فیلم"; // Persian word for movies
    }

    // Ensure res is an array
    if (Array.isArray(res)) {
      let filteredFavorites = res.filter(item => item.category === category);

      // Handle empty results
      if (filteredFavorites.length === 0) {
        document.querySelector(".favorites").innerHTML = `<p>No ${category} available.</p>`;
        return;
      }

      // Generate the HTML content
      favorites = filteredFavorites.map((item) => {
        return `
          <div class="favorite">
            <img class="relative rounded-lg w-full h-full transition-opacity duration-500 opacity-20 hover:opacity-100" src="${item.image}" alt="${item.title}">
            <div class="absolute bottom-0 z-1000">
              <span>${item.ekhtesasi}</span>
              <span class="text-orange-500 mr-2 text-lg">${item.filimo}</span>
            </div>
          </div>`;
      }).join("");

      // Insert the favorites into the DOM
      document.querySelector(".favorites").innerHTML = favorites;
    } else {
      console.log("Error: fetched data is not an array.");
    }
  } catch (error) {
    console.log("Error fetching data: ", error.message);
  }
};

// Toggle active/inactive classes for tabs
let setActiveTab = (activeTabId) => {
  // Get all the tabs
  let tabs = document.querySelectorAll(".tabs button");

  // Remove active class from all tabs and set inactive
  tabs.forEach(tab => {
    tab.classList.remove("active");
    tab.classList.add("inactive");
  });

  // Add active class to the clicked tab
  document.getElementById(activeTabId).classList.add("active");
  document.getElementById(activeTabId).classList.remove("inactive");
};

document.addEventListener("DOMContentLoaded", () => {
  // Add event listeners for the tabs
  document.getElementById("seriesTab").addEventListener("click", () => {
    fetchContent('series');  // Fetch series
    setActiveTab("seriesTab");  // Set seriesTab as active
  });

  document.getElementById("moviesTab").addEventListener("click", () => {
    fetchContent('movies');  // Fetch movies
    setActiveTab("moviesTab");  // Set moviesTab as active
  });

  // Initial load (default to series)
  fetchContent('series');  // Load series by default
  setActiveTab("seriesTab");  // Set seriesTab as active by default
});

export default fetchContent;
