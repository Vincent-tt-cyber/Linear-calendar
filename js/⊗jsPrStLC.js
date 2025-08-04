const linearCalendar = document.querySelector(".linear-calendar");
const monthName = document.querySelector(".month-name");
const monthYear = document.querySelector(".month-year");

// Текущая дата
let currentDate = new Date().getDate();
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let currentDay = new Date().getDay() - 1;

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

let dayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

console.log(dayNames[currentDay]);

function updateCalendar() {
  // Очистка календаря
  linearCalendar.innerHTML = "";

  // TODO: 
  // Первый день месяца
  const firstDay = new Date(currentYear, currentMonth, 1).getDate();
  console.log(firstDay);

  // Последний день месяца
  const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Заполнение названий месяцев и годов
  monthName.textContent = monthNames[currentMonth];
  monthYear.textContent = currentYear;

  // Заполнение календаря
  for (let day = 1; day <= lastDay; day++) {
    let li = document.createElement("li");
    li.textContent = day;
    li.classList.add("date-item");

    // Добавление класса для текущей даты
    if (
      day == currentDate &&
      currentMonth == new Date().getMonth() &&
      currentYear == new Date().getFullYear()
    ) {
      li.classList.add("current-date");
    }

    linearCalendar.appendChild(li);
  }
}

const prevMonth = document.querySelector(".prev-month");
const nextMonth = document.querySelector(".next-month");

prevMonth.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  updateCalendar();
});

nextMonth.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  updateCalendar();
});

updateCalendar();
