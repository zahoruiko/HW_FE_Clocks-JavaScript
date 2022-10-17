// Создаем блок style
var styleSheet = document.createElement("style");
// Вставляем в блок стайл импорт внешних шрифтов
styleSheet.innerText = `@import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');`;
// Добавляем блок style в блок head
document.head.appendChild(styleSheet);

// Создается контейнер для размещения информации о текущем времени
let timeContainerWrapper = document.createElement('div');
// Устанавливается уникальный идентификатор для этого элемента
timeContainerWrapper.id = "timeContainer";
// Вставляем в контейнер body контейнер "timeContainer" 
timeContainerWrapper.style.fontFamily = "'Syne Mono', monospace";
// "Жирность" шрифта
timeContainerWrapper.style.fontWeight = "bold";
// Размер шрифта
timeContainerWrapper.style.fontSize = "45px";
// Ширина блока
timeContainerWrapper.style.width = "250px";
// Внешние отступы от блока
timeContainerWrapper.style.margin = "100px 0 0 100px";
// Цвет рамки контейнера
timeContainerWrapper.style.border = "1px solid #009";
// Радиус скругления углов контейнера
timeContainerWrapper.style.borderRadius = "40px";
// Определяем тени вокруг контейнера
timeContainerWrapper.style.boxShadow = "0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, .8), 23px 0 20px -23px rgba(0, 0, 0, .8), 0 0 40px rgba(0, 0, 0, .1) inset";
// Запрет выделения текста для разных браузеров
timeContainerWrapper.style.webkitTouchCallout = "none"; // iOS Safari
timeContainerWrapper.style.webkitUserSelect = "none"; // Chrome/Safari/Opera
timeContainerWrapper.style.khtmlUserSelect = "none"; // Konqueror
timeContainerWrapper.style.mozUserSelect = "none"; // Firefox
timeContainerWrapper.style.msUserSelect = "none"; //Internet Explorer/Edge
timeContainerWrapper.style.userSelect = "none"; // Non-prefixed version, currently not supported by any browser

// Добавляем блок в контейнер body
document.body.appendChild(timeContainerWrapper);

// Подключаемся к созданному элементу, чтобы добавить в него вложенные блоки
var timeContainer = document.getElementById('timeContainer');

// Создаем блок для размещения текста-заголовка часов
var clockHeader = document.createElement('div');
// Устанавливается уникальный идентификатор для этого элемента
clockHeader.id = 'clockHeader';
// Вставляем необходимый текст в этот блок
clockHeader.innerHTML = "Current time:";
// Тень позади текста
clockHeader.style.textShadow = "3px 5px 3px #c8daf5";
// Цвет шрифта
clockHeader.style.color = "#008";
// Размер шрифта
clockHeader.style.fontSize = "25px";
// Выравнивание текста
clockHeader.style.textAlign = "center";
// Внешний отступ от блока сверху
clockHeader.style.marginTop = "10px";

// Вставляем блок в контейнер "timeContainer"
timeContainer.appendChild(clockHeader);

var clock = document.createElement('div');
// Устанавливается уникальный идентификатор для этого элемента
clock.id = 'clock';
// Цвет текста
clock.style.color = "#009";
// Выраванивание текста
clock.style.textAlign = "center";

// Вставляем элемент в контейнер "timeContainer"
timeContainer.appendChild(clock);

var dayOfWeek = document.createElement('div');
// Устанавливается уникальный идентификатор для этого элемента
dayOfWeek.id = 'dayOfWeek';
// Цвет шрифта
dayOfWeek.style.color = "#008";
// Размер шрифта
dayOfWeek.style.fontSize = "30px";
// Выравнивание текста
dayOfWeek.style.textAlign = "center";
// Отступ внутри блока
dayOfWeek.style.padding = "0 10px";
// Внешний отступ вокруг блока 
dayOfWeek.style.margin = "15px 0 15px 0";

// Вставляем элемент в контейнер "timeContainer"
timeContainer.appendChild(dayOfWeek);

// Находим блок dayOfWeek, чтобы вложить в него обертку для текста дня недели
var dayOfWeekContainer = document.getElementById('dayOfWeek');

// Создаем обертку для текста дня недели
var dayOfWeekWrapper = document.createElement('span');
// Идентификатор блока
dayOfWeekWrapper.id = 'dayOfWeekWrapper';
// Рамка блока
dayOfWeekWrapper.style.border = "1px solid #4c7ad5";
// Радиус углов блока
dayOfWeekWrapper.style.borderRadius = "30px";
// Отступы внутри блока
dayOfWeekWrapper.style.padding = "0 10px";
dayOfWeekWrapper.style.margin = "10px 0";
// Цвет фона блока
dayOfWeekWrapper.style.background = "#4c7ad5";
// Цвет текста блока
dayOfWeekWrapper.style.color = "#fff";
// Тень вокруг блока
dayOfWeekWrapper.style.boxShadow = "0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, .8), 23px 0 20px -23px rgba(0, 0, 0, .8), 0 0 40px rgba(0, 0, 0, .1) inset";
// Тень вокруг текста
dayOfWeekWrapper.style.textShadow = "0px 0 #009, 0 1px #009, 1px 0 #009, 0 0px #009";

// Добавляем блок в родительский
dayOfWeekContainer.appendChild(dayOfWeekWrapper);