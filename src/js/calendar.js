import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

// Add an event listener to run the code after the DOM has loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the DOM element where the calendar will be displayed
  var calendarEl = document.getElementById('calendar');

  // Create a new FullCalendar instance and configure it
  var calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin, dayGridPlugin],
    headerToolbar: 
    {
      left: 'prev',
      center: 'title',
      right: 'next',
    },

    now: new Date(), // Set the initial date to the current date
    navLinks: false, // Disable navigation by clicking day/week names
    editable: true, // Allow events to be edited
    selectable: true, // Allow date selection
  });

  // Render the calendar on the specified DOM element
  calendar.render();
});
