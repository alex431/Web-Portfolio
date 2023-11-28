// document.addEventListener('DOMContentLoaded', function () {
    let thumbnails = document.querySelectorAll('.thumbnail');
    let expandImg = document.getElementById("expandedImg");

    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener('click', function () {
            displayImage(thumbnail);
        });
    });

    function displayImage(img) {
    
    // expandImg.src = img.src;    

            // Check if the clicked thumbnail is already the displayed image
    if (expandImg.src === img.src) {
        // If it is, reset the source to an empty string or a placeholder image
        expandImg.src = "";
    } else {
        // If it's a different thumbnail, set the source to the clicked thumbnail
        expandImg.src = img.src;
    }
        
    
    }
// });