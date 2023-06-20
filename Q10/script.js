document.getElementById("highlightButton").addEventListener("click", function() {
    var paragraph = document.getElementById("myParagraph");
    paragraph.classList.add("highlight", "big");
  });
  
  var learnNext = "Next.js is a popular JavaScript framework for building server-side rendered React applications. It provides a great developer experience with features like automatic code splitting, server-side rendering, and hot module replacement. With Next.js, you can easily create dynamic and scalable web applications. It's a powerful tool to learn for frontend development.";
  
  var paragraph = document.getElementById("myParagraph");
  paragraph.textContent = learnNext;
  