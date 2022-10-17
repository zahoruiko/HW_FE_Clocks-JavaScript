// Определяем функцию отображения текущего времени
function clockTimer2 () { 
    // Получаем текущее время
    let date = new Date(); 
    // Определяем стиль форматирования информации о времения для вывода
    const formatter = new Intl.DateTimeFormat(
        "en-GB",  // Стиль вывода для конкретного (английского) языка
    {   
        hour: "2-digit", // вывод часов только с двумя знаками
        minute: "2-digit", // вывод минут только с двумя знаками
        second: "2-digit" // вывод секунд только с двумя знаками
    }); 
    // Ищем елемент с id = clock
    let clock = document.getElementById("clock"); 
    // Тень для текста времени
    clock.style.textShadow = "3px 5px 3px #c8daf5";
    // Устанавливаем в элемент clock форматированное значение времени
    clock.innerHTML = formatter.format(date); 
    // Определяем массив названий дней недели для английского языка
    let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
    // Ссылка на элемент DOM с id = dayOfWeekWrapper
    let dayOfWeekDomElement = document.getElementById("dayOfWeekWrapper"); 
    // Устанавливаем значение с названием дня недели
    dayOfWeekDomElement.innerHTML = dayOfWeek[date.getDay()]; 
}

setInterval(clockTimer2, 1000);