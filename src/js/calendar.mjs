// Import FullCalendar library modules and the update_countdown function from the special_day module
import { Calendar } from '@fullcalendar/core';                  // Import the Calendar class from FullCalendar
import interactionPlugin from '@fullcalendar/interaction';      // Import the interaction plugin for FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid';              // Import the dayGrid plugin for FullCalendar
import { update_countdown } from './special_day.mjs';           // Import the update_countdown function from the special_day module

// Add an event listener to run the code after the DOM has loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get the DOM element where the calendar will be displayed
  const calendarEl = document.getElementById('calendar');

  // Create a new FullCalendar instance and configure it
  const calendar = new Calendar(calendarEl, {
    plugins: [interactionPlugin, dayGridPlugin],    // Add the imported plugins to the FullCalendar instance
    
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
    
    // Allow selecting dates and call the update_countdown function on selection
    selectable:true,
    select: function (info) {
      update_countdown(info.start);         // Call the update_countdown function with the selected date
    },
  });

  // Render the calendar on the specified DOM element
  calendar.render();

  // Call the update_countdown function to initially display the countdown
  update_countdown();

});


