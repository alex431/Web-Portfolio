import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin, dayGridPlugin],
    headerToolbar: {
      left: 'prev',
      center: 'title',
      right: 'next',
    },
  
  // buttonIcons: {
  //   prev: 'fc-icon fc-icon-chevron-left',
  // },

    now: new Date(),
    navLinks: false, // can click day/week names to navigate views
    editable: true,
    selectable: true,
  });

  calendar.render();

});
