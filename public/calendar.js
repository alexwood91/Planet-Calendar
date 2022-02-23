let nav = 0;
let clicked = null;

const calendar = document.getElementById('calendar')
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function initCalendar(){
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

  document.getElementById('currentMonth').innerText = `${date.toLocaleDateString('en-GB', {month: 'long'})} ${year}`;

  calendar.innerHTML = '';

  for(let i = 1; i <= padDays + daysInMonth; i++){
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');

    if (i > padDays) {
      daySquare.innerText = i - padDays;
      daySquare.addEventListener('click', () => console.log('click'));
    } else {
      daySquare.classList.add('padding')
    }

    calendar.appendChild(daySquare);
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