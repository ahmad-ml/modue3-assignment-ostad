// Function to calculate the square root of the sum of squares of an array of numbers
function calculateSquareRoot() {
    var numbersInput = document.getElementById("numbers").value;
    var numbers = numbersInput.split(",").map(Number);
    
    var sumOfSquares = 0;
    
    for (var i = 0; i < numbers.length; i++) {
      sumOfSquares += Math.pow(numbers[i], 2);
    }
  
    var squareRoot = Math.sqrt(sumOfSquares);
  
    // Display the result on the web page
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Square Root of Sum of Squares: " + squareRoot;
  }
  