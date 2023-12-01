

let thumbnails = document.querySelectorAll('.thumbnail');
let expand_img = document.getElementById("expanded_img");

let images = [
    "./img/codelou-cert-dac1-sept2022-ALEX_HINKLE.jpg",
    "./img/codelou-cert-dac2-jan2023-ALEX_HINKLE.jpg",
    "./img/UofL-cert-network.jpg",
    "./img/UofL-cert-cloud.jpg",
    "./img/UofL-cert-ai.jpg"
]

let current_index = null;

thumbnails.forEach(function (thumbnail,index) {
    thumbnail.addEventListener('click', function () {
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
        
        // display_image(index);
        // display_image(thumbnail);
    });
});

function display_image(index) {
    // Set the source of the expanded image using the index
    expand_img.src = `/${images[index]}`;
}


// function display_image(img) {

// // expand_img.src = img.src;    

//             // Check if the clicked thumbnail is already the displayed image
//     if (expand_img.src === img.src) 
//     {
//         // If it is, reset the source to an empty string or a placeholder image
//         expand_img.src = "";
//     } else 
//     {
//         // If it's a different thumbnail, set the source to the clicked thumbnail
//         expand_img.src = img.src;
//     }
// }
