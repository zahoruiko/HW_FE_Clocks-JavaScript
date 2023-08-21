// Creating a style block
var styleSheet = document.createElement("style");
// We insert the import of external fonts into the style block
styleSheet.innerText = `@import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');`;

// Adding the style block to the head block
document.head.appendChild(styleSheet);

// A container is being created to place information about the current time
let timeContainerWrapper = document.createElement('div');
// A unique identifier is set for this element
timeContainerWrapper.id = "timeContainer";
// We insert the "timeContainer" container into the body container
timeContainerWrapper.style.fontFamily = "'Syne Mono', monospace";
// "Fatness" of the font
timeContainerWrapper.style.fontWeight = "bold";
// Font Size
timeContainerWrapper.style.fontSize = "45px";
// Block width
timeContainerWrapper.style.width = "250px";
// External margins from the block
timeContainerWrapper.style.margin = "100px 0 0 100px";
// Container frame color
timeContainerWrapper.style.border = "1px solid #009";
// Radius of rounding the corners of the container
timeContainerWrapper.style.borderRadius = "40px";
// Defining shadows around the container
timeContainerWrapper.style.boxShadow = "0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, .8), 23px 0 20px -23px rgba(0, 0, 0, .8), 0 0 40px rgba(0, 0, 0, .1) inset";
// We set the cursor display only in the form of an arrow
timeContainerWrapper.style.pointer = "initial";
// Prohibiting text selection for different browsers
timeContainerWrapper.style.webkitTouchCallout = "none"; // iOS Safari
timeContainerWrapper.style.webkitUserSelect = "none"; // Chrome/Safari/Opera
timeContainerWrapper.style.khtmlUserSelect = "none"; // Konqueror
timeContainerWrapper.style.mozUserSelect = "none"; // Firefox
timeContainerWrapper.style.msUserSelect = "none"; //Internet Explorer/Edge
timeContainerWrapper.style.userSelect = "none"; // Non-prefixed version, currently not supported by any browser

// Adding a block to the body container
document.body.appendChild(timeContainerWrapper);

// Connecting to the created element to add nested blocks to it
var timeContainer = document.getElementById('timeContainer');

// Creating a block for placing the text-the title of the clock
var clockHeader = document.createElement('div');
// A unique identifier is set for this element
clockHeader.id = 'clockHeader';
// We insert the necessary text into this block
clockHeader.innerHTML = "Current time:";
// Shadow behind the text
clockHeader.style.textShadow = "3px 5px 3px #c8daf5";
// Font color
clockHeader.style.color = "#008";
// Font Size
clockHeader.style.fontSize = "25px";
// Text alignment
clockHeader.style.textAlign = "center";
// External indentation from the top of the block
clockHeader.style.marginTop = "10px";

// Inserting the block into the "timeContainer" container
timeContainer.appendChild(clockHeader);

var clock = document.createElement('div');
// Inserting the block into the "timeContainer" container
clock.id = 'clock';
// Text color
clock.style.color = "#009";
// Text alignment
clock.style.textAlign = "center";

// Inserting the element into the "timeContainer" container
timeContainer.appendChild(clock);

var dayOfWeek = document.createElement('div');
// A unique identifier is set for this element
dayOfWeek.id = 'dayOfWeek';
// Font color
dayOfWeek.style.color = "#008";
// Font size
dayOfWeek.style.fontSize = "30px";
// Text alignment
dayOfWeek.style.textAlign = "center";
// Indentation inside the block
dayOfWeek.style.padding = "0 10px";
// External indentation around the block 
dayOfWeek.style.margin = "15px 0 15px 0";

// Inserting the element into the "timeContainer" container
timeContainer.appendChild(dayOfWeek);

// We find the DayOfWeek block to put a wrapper for the text of the day of the week in it
var dayOfWeekContainer = document.getElementById('dayOfWeek');

// Creating a wrapper for the text of the day of the week
var dayOfWeekWrapper = document.createElement('span');
// Block ID
dayOfWeekWrapper.id = 'dayOfWeekWrapper';
// Block border
dayOfWeekWrapper.style.border = "1px solid #4c7ad5";
// Radius of the corners of the block
dayOfWeekWrapper.style.borderRadius = "30px";
// Margins inside the block
dayOfWeekWrapper.style.padding = "0 10px";
dayOfWeekWrapper.style.margin = "10px 0";
// Block background color
dayOfWeekWrapper.style.background = "#4c7ad5";
// Block text color
dayOfWeekWrapper.style.color = "#fff";
// Shadow around the block
dayOfWeekWrapper.style.boxShadow = "0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, .8), 23px 0 20px -23px rgba(0, 0, 0, .8), 0 0 40px rgba(0, 0, 0, .1) inset";
// Shadow around the text
dayOfWeekWrapper.style.textShadow = "0px 0 #009, 0 1px #009, 1px 0 #009, 0 0px #009";

// Adding a block to the parent
dayOfWeekContainer.appendChild(dayOfWeekWrapper);
