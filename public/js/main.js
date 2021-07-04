events();

function events() {
  let calendar;

  initCalendar();

  const button = document.getElementById('submit');
  button.addEventListener('click', async event => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    addEvent({
      title: title,
      date: date
    })
    const data = {title, date}
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const response = await fetch('/create-event', options);
    // console.log(json);
  });

  function initCalendar() {
    const calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2021-06-07',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: []
    });
    calendar.render();
  };
  

  function addEvent(event) {
    calendar.addEvent( event )
  }
}
