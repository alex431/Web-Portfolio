// Get the API key from an environment variable (process.env.apod_api_key)
const apiKey = process.env.apod_api_key;

// Build the URL for the Astronomy Picture of the Day (APOD) API
const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

// An asynchronous function to fetch and display the APOD image
async function loadAPOD() {
  try {
    // Fetch data from the APOD API and await the response
    const response = await fetch(apodUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch APOD data');
    }

    const data = await response.json();

    // Update the 'src' attribute of the 'apod-image' element with the APOD image URL
    if (data.media_type === 'image') {
      document.getElementById('apod-image').src = data.url;
      document.getElementById('apod-video').style.display = 'none';
    }
    else if (data.media_type === 'video') {
      const apod_video = document.getElementById('apod-video');
      apod_video.src = data.url;

      apod_video.style.display = 'block';
      document.getElementById('apod-image').style.display = 'none';
    }

    // Set the text content of the 'apod-title' and 'apod-explanation' elements with APOD data
    document.getElementById('apod-title').textContent = data.title;
    document.getElementById('apod-explanation').textContent = data.explanation;
  }
  catch (error) {
    console.error('Error fetching or displaying APOD data: ', error);
  }
}

// Call the function to adjust the container size when APOD content is loaded
loadAPOD();
