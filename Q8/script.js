document.addEventListener("DOMContentLoaded", function() {
    // Get the button and paragraph elements by their IDs
    var button = document.getElementById("myButton");
    var paragraph = document.getElementById("myParagraph");
  
    // Add a click event listener to the button
    button.addEventListener("click", function() {
      // Change the text content of the paragraph when the button is clicked
      paragraph.textContent = "Button Clicked!";
    });
  });
  