import '../css/nav_style.css';
import { config } from "../../apod-config.js";

document.addEventListener('DOMContentLoaded', function () {
    const apiKey = config.apod_apikey;
    const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(apodUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('apod-image').src = data.url;
            document.getElementById('apod-title').textContent = data.title;
            document.getElementById('apod-explanation').textContent = data.explanation;
        })
        .catch(error => {
            console.error('Error fetching APOD data: ', error);
        });
});
