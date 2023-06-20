document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Reset error messages
    resetErrorMessages();
  
    // Get form values
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;
    var confirmPasswordInput = document.getElementById("confirmPassword").value;
  
    // Validate name
    if (!nameInput || !/^[a-zA-Z]+$/.test(nameInput)) {
      displayErrorMessage("nameError", "Name should not be empty and should contain only letters.");
    }
  
    // Validate email
    if (!emailInput || !validateEmail(emailInput)) {
      displayErrorMessage("emailError", "Please enter a valid email address.");
    }
  
    // Validate password
    if (!passwordInput || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(passwordInput)) {
      displayErrorMessage("passwordError", "Password should have a minimum length of 8 characters, at least one uppercase letter, one lowercase letter, and one digit.");
    }
  
    // Validate confirm password
    if (confirmPasswordInput !== passwordInput) {
      displayErrorMessage("confirmPasswordError", "Confirm Password should match the Password field.");
    }
  });
  
  function validateEmail(email) {
    // Basic email validation regex pattern
    var emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(email);
  }
  
  function displayErrorMessage(elementId, message) {
    var errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
  }
  
  function resetErrorMessages() {
    var errorElements = document.getElementsByClassName("error-message");
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = "";
    }
  }
  