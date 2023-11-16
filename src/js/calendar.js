// Import FullCalendar library modules and the updateCountdown function from the special_day module
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { updateCountdown } from './special_day';

// Add an event listener to run the code after the DOM has loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get the DOM element where the calendar will be displayed
  const calendarEl = document.getElementById('calendar');

  // Create a new FullCalendar instance and configure it
  const calendar = new Calendar(calendarEl, {
    plugins: [interactionPlugin, dayGridPlugin],
    
    // Configure the header toolbar with navigation buttons and title
    headerToolbar:
    {
      left: 'prev',
      center: 'title',
      right: 'next',
    },

    // Set the initial date to the current date
    now: new Date(), 
    
    // Disable navigation by clicking day/week names
    navLinks: false, 
    
    // Allow events to be edited
    editable: true, 
    
    // Allow selecting dates and call the updateCountdown function on selection
    selectable:true,
    select: function (info) {
      updateCountdown(info.start);
    },
  });

  // Render the calendar on the specified DOM element
  calendar.render();

  // Call the updateCountdown function to initially display the countdown
  updateCountdown();

  // Set a timeout to update the countdown after a specific interval (e.g., every second)
  setTimeout(() => {
    updateCountdown();
  }, 1000);

});


