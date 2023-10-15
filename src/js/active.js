// Get the hamburger menu and navigation elements by their CSS selectors
const hamburger = document.querySelector(".hamburger") // Selects the element with the class "hamburger"
const top_nav = document.querySelector("#nav1") // Selects the element with the id "nav1"

// Add a click event listener to the hamburger menu
hamburger.addEventListener("click", class_toggle);

// Function to toggle the 'active' class on the navigation element
function class_toggle() {
  top_nav.classList.toggle('active'); // Toggles the 'active' class on the navigation element
  }

  