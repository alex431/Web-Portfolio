
const endpoint_url= '/api/apod';

// An asynchronous function to fetch and display the APOD image
async function loadAPOD() {
  try 
  {
    // Fetch data from the APOD API and await the response
    const response = await fetch(endpoint_url);
    
    // Check if the response is successful; if not, throw an error
    if (!response.ok) 
    {
      throw new Error('Failed to fetch APOD data');
    }

    // Parse the response JSON data
    const data = await response.json();

    // Update the 'src' attribute of the 'apod_image' element with the APOD image URL
    if (data.media_type === 'image') 
    {
      // Display the image and hide the video element
      document.getElementById('apod_image').src = data.url;
      document.getElementById('apod_video').style.display = 'none';
    }
    else if (data.media_type === 'video') 
    {
      // Display the video and hide the image element
      const apod_video = document.getElementById('apod_video');
      apod_video.src = data.url;

      apod_video.style.display = 'block';
      document.getElementById('apod_image').style.display = 'none';
    }

    // Set the text content of the 'apod_title' and 'apod_explanation' elements with APOD data
    document.getElementById('apod_title').textContent = data.title;
    document.getElementById('apod_explanation').textContent = data.explanation;
  }
  catch (error) 
  {
    // Handle errors by logging to the console
    console.error('Error fetching or displaying APOD data: ', error);
  }
}

// Call the function to adjust the container size when APOD content is loaded
loadAPOD();
