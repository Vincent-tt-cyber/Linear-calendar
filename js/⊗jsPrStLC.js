let linearCalendar = document.querySelector(".linear-calendar");

// Текущая дата
const currentDate = new Date();
const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();

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
  });
}

if (days.length > 0) {
  showCalendarDays(days);
}
