function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
  
    document.getElementById("latitude").textContent = latitude;
    document.getElementById("longitude").textContent = longitude;
  }
  
  // Call the getLocation function when the page loads
  window.onload = getLocation;
  