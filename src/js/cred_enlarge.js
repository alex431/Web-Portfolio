let images = [
    { src: "../img/codelou-cert-dac1-sept2022-ALEX_HINKLE.jpg", alt: "Data_Analysis-1" },
    { src: "../img/codelou-cert-dac2-jan2023-ALEX_HINKLE.jpg", alt: "Data_Analysis-2" },
    { src: "../img/UofL-cert-network.jpg", alt: "UofL-net" },
    { src: "../img/UofL-cert-cloud.jpg", alt: "UofL-cloud" },
    { src: "../img/UofL-cert-ai.jpg", alt: "UofL-ai" }
];

// let imageSources = [
//     "src\\img\\codelou-cert-dac1-sept2022-ALEX_HINKLE.jpg",
//     // "../img/codelou-cert-dac1-sept2022-ALEX_HINKLE.jpg",
//     "../img/codelou-cert-dac2-jan2023-ALEX_HINKLE.jpg",
//     "../img/UofL-cert-network.jpg",
//     "../img/UofL-cert-cloud.jpg",
//     "../img/UofL-cert-ai.jpg"
// ];

// Event listener for thumbnail clicks
let thumbnails = document.querySelectorAll('.thumbnail');
let expandImg = document.getElementById("expandedImg");

thumbnails.forEach(function (thumbnail, index) {
    thumbnail.addEventListener('click', function () {
        displayImage(index);
    });
});

function displayImage(index) {
    // Set the source and alt attributes of the expanded image
        expandImg.src = images[index].src;
        expandImg.alt = images[index].alt;    

        // expandImg.onerror = function() {
        //     console.error("Error loading image:", src);
        // };
    // expandImg.src = img.src;
    // expandImg.alt = img.alt;
}

// const imageCollection = [
//     { src: "../img/codelou-cert-dac1-sept2022-ALEX_HINKLE.jpg", class: "thumbnail codelou" },
//     { src: "../img/codelou-cert-dac2-jan2023-ALEX_HINKLE.jpg", class: "thumbnail codelou" },
//     { src: "../img/UofL-cert-network.jpg", class: "thumbnail uofl" },
//     { src: "../img/UofL-cert-cloud.jpg", class: "thumbnail uofl" },
//     { src: "../img/UofL-cert-ai.jpg", class: "thumbnail uofl" }
//   ];

// const thumbnails = document.querySelectorAll('.thumbnail');
// const expandImg = document.getElementById("expandedImg");

// thumbnails.forEach(function (thumbnail) {
//     thumbnail.addEventListener('click', function () {
//         // Check if the clicked thumbnail is already the displayed image
//         if (expandImg.src === thumbnail.src) {
//             // If it is, reset the source to an empty string or a placeholder image
//             expandImg.src = "";
//         } else {
//             // If it's a different thumbnail, set the source to the clicked thumbnail
//             expandImg.src = thumbnail.src;
//         }
//     });
// });

// function displayImage(thumbnail) {
//     // Find the index of the clicked thumbnail in the NodeList
//     const index = Array.from(thumbnails).indexOf(thumbnail);

//     // Retrieve the information for the clicked image using the index
//     const clickedImage = imageCollection[index];

//     // Check if the clicked thumbnail is already the displayed image
//     if (expandImg.src === thumbnail.src) {
//         // If it is, reset the source and alt to an empty string or a placeholder
//         expandImg.src = "";
//         // expandImg.alt = "";
//     } else {
//         // If it's a different thumbnail, set the source and alt to the clicked thumbnail
//         expandImg.src = thumbnail.src;
//         // expandImg.alt = clickedImage.alt || ""; // Use alt from data structure or fallback to an empty string
//     }


// images.forEach((image, index) => {
//     image.addEventListener('click', () => {
//         // Retrieve the information for the clicked image using the index
//         console.log(`Clicked image at index ${index}`);
//         const clickedImage = imageCollection[index];
//         console.log(clickedImage); // Check the clickedImage object in the console
//         // Display the clicked image in the expandedImg container
//         const expandedImg = document.getElementById('expandedImg');
//         console.log(expandedImg); // Check if expandedImg is correctly retrieved
//         expandedImg.src = clickedImage.src;
//         expandedImg.alt = clickedImage.alt;
//         expandedImg.className = clickedImage.class;
//     });
// });

// let thumbnails = document.querySelectorAll('.thumbnail');
// let expandImg = document.getElementById("expandedImg");

// thumbnails.forEach(function (thumbnail) {
//     thumbnail.addEventListener('click', function () {
//         displayImage(thumbnail);
//     });
// });

// function displayImage(img) {

// // expandImg.src = img.src;    

//             // Check if the clicked thumbnail is already the displayed image
//     if (expandImg.src === img.src) 
//     {
//         // If it is, reset the source to an empty string or a placeholder image
//         expandImg.src = "";
//     } else 
//     {
//         // If it's a different thumbnail, set the source to the clicked thumbnail
//         expandImg.src = img.src;
//     }
// }
