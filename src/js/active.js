// Select the hamburger menu and navigation elements by their CSS selectors
const hamburger = document.querySelector(".hamburger") // Selects the hamburger menu icon
const top_nav = document.querySelector("#top-nav") // Selects the navigation element
const calendar = document.querySelector(".calendar-container")

// Add a click event listener to the hamburger menu icon
hamburger.addEventListener("click", nav_class_toggle);

// Function to toggle the 'active' class on the navigation element and calendar container
function nav_class_toggle() 
{
  // Toggle the 'active' class on the navigation element to show/hide it
  top_nav.classList.toggle('active'); 
  
  // Toggle the 'active' class on the calendar container for consistency
  calendar.classList.toggle('active');
}

  