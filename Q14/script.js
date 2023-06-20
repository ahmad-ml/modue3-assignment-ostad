// JavaScript code

// Function to send AJAX GET request
function sendGetRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(xhr.responseText);
      }
    };
  
    xhr.send();
  }
  
  // Function to handle the response and update the web page
  function handleResponse(response) {
    var responseDiv = document.getElementById("response");
    responseDiv.textContent = response;
  }
  
  // Send the AJAX GET request
  sendGetRequest("https://api.example.com/data", handleResponse);
  