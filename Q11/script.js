document.addEventListener("DOMContentLoaded", function() {
    var ul = document.getElementById("list");
  
    for (var i = 1; i <= 5; i++) {
      var li = document.createElement("li");
      li.textContent = i;
      ul.appendChild(li);
    }
  });
  