let nav = 0;
let clicked = null;
var eventDays = [];
const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function openModal(date) {
  
  clicked = date;
  const eventForDay = false;

  if (eventForDay) {
    document.getElementById('eventText').innerText = eventForDay.title;
    deleteEventModal.style.display = 'block';
  } else {
    newEventModal.style.display = 'block';
  }

  backDrop.style.display = 'block';
}

function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  clicked = null;
  initCalendar();
}



function initCalendar(){
  fetch('/groupApi/events').then(function(response) {
    return response.json();
  }).then(function(json) { 
    console.log(json)
    var datepair = json.events.rows;
    eventDays.push.apply(eventDays, datepair);
    render(json.usercolor);
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

  function render(usercolor){
  for(let i = 1; i <= padDays + daysInMonth; i++){
    const daySquare = document.createElement('div');
    daySquare.style.backgroundColor = usercolor
    daySquare.classList.add('day');

    const n = i - padDays
    const twoDigDay = ("0" + (date.getDate() + n - 3)).slice(-2)
    const twoDigMonth = ("0" + (date.getMonth() + 1)).slice(-2)

    const dayString = `${year}-${twoDigMonth}-${twoDigDay}`;
    const eventString = JSON.stringify(eventDays)
    const eventForDay = eventString.includes(dayString)
    


    if (i > padDays) {
      daySquare.innerText = i - padDays;
      daySquare.addEventListener('click', () => openModal(dayString));
    } if (eventForDay) {
      daySquare.classList.add('event')
    }    
    else {
      daySquare.classList.add('padding')
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