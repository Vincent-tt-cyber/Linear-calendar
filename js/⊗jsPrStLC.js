const linearCalendar = document.querySelector(".linear-calendar");
const monthName = document.querySelector(".month-name");
const monthYear = document.querySelector(".month-year");

// Текущая дата
const currentDate = new Date().getDate();
const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear() ;

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

// Последний день месяца
const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

// Массив дат в месяце
let days = [];

// Создание списка дней
for (let i = 1; i <= lastDay; i++) {
  days.push(i);
}

// Отобразить даты месяца
function showCalendarDays(days) {
  days.map((day) => {
    let li = document.createElement("li");
    li.textContent = day;
    li.classList.add("date-item");
    linearCalendar.appendChild(li);

    // Отметка текущего дня
    day == currentDate && li.classList.add("current-date");
  });
}

if (days.length > 0) {
  showCalendarDays(days);
}

// отобразить название месяца
function showCalendarMonth(months) {
  months.map((month, i) => {
    if (i == currentMonth) {
      monthName.textContent = monthNames[currentMonth];
    }
  });
}

// Отобразить год
function showCalendarYear(year) {
  monthYear.textContent = year;
}

showCalendarMonth(monthNames);
showCalendarYear(currentYear);
