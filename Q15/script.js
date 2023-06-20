window.addEventListener('DOMContentLoaded', function() {
    // Function to send AJAX POST request
    function sendPostRequest() {
      var url = 'https://api.example.com/submit';
      var data = {
        name: 'John Doe',
        email: 'johndoe@example.com'
      };
  
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
  
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          var responseDiv = document.getElementById('response');
          responseDiv.innerText = 'Response: ' + JSON.stringify(response);
        }
      };
  
      xhr.send(JSON.stringify(data));
    }
  
    // Trigger the AJAX POST request when the page is loaded
    sendPostRequest();
  });
  