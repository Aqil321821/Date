//Q1 display crnt date n time
/*
// Get the current date and time
var currentDate = new Date();

// Display the current date and time
document.write("Current Date and Time: " + currentDate);
*/

//Q2.Write a program that alerts the current month in words.
/*
// Create an array of month names
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Get the current date
var currentDate = new Date();

// Get the current month (0 to 11) from the date object
var currentMonth = currentDate.getMonth();

// Get the month name from the array using the current month
var currentMonthName = monthNames[currentMonth];

// Alert the current month name
alert("Current Month: " + currentMonthName);


*/

//////////////////
/*Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun. */
/*
// Create an array of day names
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Get the current date
var currentDate = new Date();

// Get the current day of the week (0 to 6) from the date object
var currentDay = currentDate.getDay();

// Get the day name (abbreviated) from the array using the current day
var currentDayName = dayNames[currentDay];

// Alert the abbreviated current day name
alert("Abbreviated Current Day: " + currentDayName);



*/
//////////
/*
Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today.
*/
/*
// Get the current date
var currentDate = new Date();

// Get the current day of the week (0 to 6) from the date object
var currentDay = currentDate.getDay();

// Check if the current day is Saturday (6) or Sunday (0)
if (currentDay === 6 || currentDay === 0) {
  document.write("It's Fun day");
} else {
  document.write("It's not Fun day");
}

///////////

*/
//Q5
/*
Write a program that shows the message “First fifteen
days of the month” if the date is less than 16th of the month
else shows “Last days of the month”.

*/
/*
// Get the current date
var currentDate = new Date();

// Get the current day of the month (1 to 31) from the date object
var currentDay = currentDate.getDate();

// Check if the current day is less than 16
if (currentDay < 16) {
  document.write("First fifteen days of the month");
} else {
  document.write("Last days of the month");
}

*/
////////////////////
/*
 Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date object.
 */

/*
// Assign the current timestamp in milliseconds to an undeclared variable
var currentTime = Date.now();

// Convert milliseconds to minutes
var minutesSinceMidnight = Math.floor(currentTime / 60000);

// Display the minutes since midnight
document.write("Minutes since midnight, Jan. 1, 1970: " + minutesSinceMidnight);
*/

//////////////
/*
// Get the current date
var currentDate = new Date();

// Get the current hour (0 to 23) from the date object
var currentHour = currentDate.getHours();

// Check if the current hour is before noon (AM)
if (currentHour < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

*/
//////////////////////
/*
Write a program that creates a Date object for the last day
of the last month of 2020 and assigns it to variable named
laterDate.
*/

/*
// Create a Date object for December 31, 2023
var laterDate = new Date(2023, 11, 31);

// Display the date in the variable
document.write("Later Date: " + laterDate);
*/
/////////////////////////////////////////
/*
important
//Q.Create a date object of the starting date of this Ramadan
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015
*/
/*
// Create a Date object for the start of Ramadan (June 18, 2015)
var ramadanStart = new Date(2015, 5, 15); // Months are 0-based, so June is 5

// Get the current date
var currentDate = new Date();

// Calculate the time difference in milliseconds
var timeDifference = currentDate - ramadanStart;

// Convert the time difference to days
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Alert the number of days passed since 1st Ramadan
alert("Number of days passed since 1st Ramadan: " + daysPassed);

*/
///////////////

/*Q.Write a program that displays in your browser the
seconds that elapsed between the reference date and the
beginning of 2015.*/
/*
// Create a Date object for the beginning of 2015 (January 1, 2015)
var beginningOf2015 = new Date(2015, 0, 1); // Months are 0-based, so January is 0

// Get the current date
var currentDate = new Date();

// Calculate the time difference in milliseconds
var timeDifference = currentDate - beginningOf2015;

// Convert the time difference to seconds
var secondsElapsed = Math.floor(timeDifference / 1000);

// Display the number of seconds that have elapsed
document.write("Seconds elapsed since the beginning of 2015: " + secondsElapsed + " seconds");
*/

///////////////////////
/*
Q.Create a Date object for the current date and time.
Extract the hours, reset the date object an hour ahead and
finally display the date object in your browser.
*/
/*
// Create a Date object for the current date and time
var currentDate = new Date();

// Extract the hours and add 1 hour
var currentHours = currentDate.getHours() + 1;

// Set the date object to the modified hour
currentDate.setHours(currentHours);

// Display the modified date object
document.write("Modified Date Object: " + currentDate);
*/
////////////////////////////

/*Q.Write a program that creates a date object and show the
date in an alert box that is reset to 100 years back?

*/
/*
// Create a Date object for today's date
var currentDate = new Date();

// Create a Date object 100 years back
var date100YearsAgo = new Date();
date100YearsAgo.setFullYear(date100YearsAgo.getFullYear() - 100);

// Convert dates to a string format
var todayDate = currentDate.toDateString();
var date100YearsAgoString = date100YearsAgo.toDateString();

// Display both dates in an alert box
alert("Today's Date: " + todayDate + "\n100 Years Ago: " + date100YearsAgoString);
*/
/*
In the code you provided, `toDateString()` is used to convert the `Date` objects to a human-readable string format that represents the date without the time component. The purpose of using `toDateString()` is to display the dates in a more user-friendly and concise format in the alert box. This method converts the date to a string that typically includes the day of the week, the month, the day of the month, and the year.

For example, if today's date is October 12, 2023, and the date 100 years ago is also October 12 but in the year 1923, the `toDateString()` method will format them as follows:

- Today's Date: "Wed Oct 12 2023"
- 100 Years Ago: "Thu Oct 12 1923"

This format provides a clear representation of the date in a way that most people can understand. It omits the time information, which is not relevant for this particular scenario where you are interested in the date only.

You could choose to use other methods like `toLocaleDateString()` to format the date differently based on your preferences, but `toDateString()` is commonly used for displaying dates in a simple, human-readable format.
*/
///////////////////////
/*
Q.Write a program to ask the user about his age. Calculate
and show his birth year in your browser.
*/
/*
// Ask the user for their age
var userAge = prompt("Please enter your age:");

// Calculate the birth year
var currentYear = new Date().getFullYear(); // Get the current year
var birthYear = currentYear - parseInt(userAge); // Convert userAge to a number and subtract from the current year

// Display the birth year in the browser
document.write("Your birth year is: " + birthYear);

*/
/////////////////////////
/*Q.

*/
