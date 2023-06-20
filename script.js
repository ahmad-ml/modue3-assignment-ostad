window.onload = function() {
    // Function to get the day of the week for a given date
    function getDayOfWeek(dateString) {
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const date = new Date(dateString);
      const dayOfWeek = date.getDay();
      return daysOfWeek[dayOfWeek];
    }
  
    // Function to display the day of the week for the current date
    function displayCurrentDayOfWeek() {
      const currentDate = new Date();
      const dayOfWeek = getDayOfWeek(currentDate.toISOString().split('T')[0]);
      document.getElementById('result').innerHTML = 'Today is ' + dayOfWeek;
    }
  
    // Call the displayCurrentDayOfWeek function when the page loads
    displayCurrentDayOfWeek();
  };
  
  