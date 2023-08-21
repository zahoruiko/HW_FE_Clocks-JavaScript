// Defining the current time display function
function clockTimer2 () { 
    // Getting the current time
    let date = new Date(); 
    // // Defining the formatting style of the time information for output
    const formatter = new Intl.DateTimeFormat(
        "en-GB",  // Output style for a specific (English) language
    {   
        hour: "2-digit", // output of the clock with only two signs
        minute: "2-digit", // output minutes with only two characters
        second: "2-digit" // output seconds with only two characters
    }); 
    // Looking for an element with id = clock
    let clock = document.getElementById("clock"); 
    // Shadow for time text
    clock.style.textShadow = "3px 5px 3px #c8daf5";
    // Setting the formatted time value to the clock element
    clock.innerHTML = formatter.format(date); 
    // Defining an array of names of days of the week for the English language
    let dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
    // Link to the DOM element with id = dayOfWeekWrapper
    let dayOfWeekDomElement = document.getElementById("dayOfWeekWrapper"); 
    // Setting the value with the name of the day of the week
    dayOfWeekDomElement.innerHTML = dayOfWeek[date.getDay()]; 
}

setInterval(clockTimer2, 1000);
