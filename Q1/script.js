// Function to get the day of the week for a given date
function getDayOfWeek(dateString) {
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var date = new Date(dateString);
    var dayOfWeek = date.getDay();
  
    return daysOfWeek[dayOfWeek];
  }
  
  // Function to display the current day of the week
  function displayCurrentDayOfWeek() {
    var currentDate = new Date();
    var dayOfWeek = getDayOfWeek(currentDate.toISOString().slice(0, 10));
  
    var dayOfWeekElement = document.getElementById('dayOfWeek');
    dayOfWeekElement.textContent = 'Today is ' + dayOfWeek;
  }
  
  // Call the displayCurrentDayOfWeek function when the page loads
  window.onload = displayCurrentDayOfWeek;
  