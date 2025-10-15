let userName = prompt("Как вас зовут?");

alert("Привет, " + userName + "!");

console.log("Пользователь: " + userName);

// Поиск кнопки по ID
const myButton = document .getElementById( "myBtn" );
myButton.addEventListener( "click" , function () {   alert( "Кнопка нажата!" ); });

// Инициализация счётчика
let clickCount = 0;
const counterBtn = document.getElementById("counterBtn");
const clickDisplay = document.getElementById("clickCount");

// Обработчик события для счётчика
counterBtn.addEventListener("click", function() {
    clickCount++; // Увеличение счётчика
    clickDisplay.textContent = clickCount; // Обновление отображения
    console.log("Количество кликов: " + clickCount); // Вывод в консоль
});