let nav = 0;
let clicked = null;
var eventDays = [];

const calendar = document.getElementById('calendar')
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function initCalendar(){
  fetch('/api/events').then(function(response) {
    return response.json();
  }).then(function(json) {
    var datepair = json.events.rows;
    eventDays.push.apply(eventDays, datepair);
    render();
  });


  const date = new Date();

  if (nav !== 0) {
    date.setMonth(new Date().getMonth() + nav);
  }

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dateString = firstDayOfMonth.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  const padDays = days.indexOf(dateString.split(', ')[0]);

  document.getElementById('currentMonth').innerText = `${date.toLocaleDateString('en-GB', {month: 'short'})} ${year}`;

  calendar.innerHTML = '';

  function render(){
  for(let i = 1; i <= padDays + daysInMonth; i++){
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');

    const dayString = `${year}-0${month + 1}-${i - padDays}`;
    console.log(dayString)
    const eventString = JSON.stringify(eventDays)
    const eventForDay = eventString.includes(dayString)
    console.log(eventForDay)

    if (i > padDays) {
      daySquare.innerText = i - padDays;
      daySquare.addEventListener('click', () => daySquare.classList.add('clicked'));
    } else {
      daySquare.classList.add('padding')
    }

    if (eventForDay) {
      daySquare.classList.add('event')
    }

    calendar.appendChild(daySquare);
  }
}
}

function initButtons(){
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++;
    initCalendar();
  });
  document.getElementById('prevButton').addEventListener('click', () => {
    nav--;
    initCalendar();
  });
}
initButtons();
initCalendar();