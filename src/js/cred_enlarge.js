
// Select all elements with the class 'thumbnail'
let thumbnails = document.querySelectorAll('.thumbnail');

// Select the element with the ID 'expanded_img'
let expand_img = document.getElementById("expanded_img");

// Array of image paths
let images = [
    "./img/codelou-cert-dac1-sept2022-ALEX_HINKLE.jpg",
    "./img/codelou-cert-dac2-jan2023-ALEX_HINKLE.jpg",
    "./img/cy-cert-may2023-alex_hinkle.jpg",
    "./img/UofL-cert-network.jpg",
    "./img/UofL-cert-cloud.jpg",
    "./img/UofL-cert-ai.jpg"
]

// Variable to store the current index of the clicked thumbnail
let current_index = null;

// Add a click event listener to each thumbnail
thumbnails.forEach(function (thumbnail,index) {
    thumbnail.addEventListener('click', function () {
        // Check if the clicked thumbnail is the same as the currently expanded one
        if (current_index === index) 
        {
            // If it is, close the expanded image
            expand_img.src = "";
            current_index = null; // Reset the current_index
        } 
        else 
        {
            // If it's a different thumbnail, set the source to the clicked thumbnail
            display_image(index);
            current_index = index; // Update the current_index
        }
    });
});

// Function to display the image based on the provided index
function display_image(index) 
{
    // Set the source of the expanded image using the index
    expand_img.src = `/${images[index]}`;
}
