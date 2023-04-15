// Get a reference to the button element
var button = document.querySelector("button");

// Add an event listener to the button
button.addEventListener("click", function() {
  // Get a reference to the days container element
  var daysContainer = document.getElementById("days");

  // Get an array of the day elements
  var dayElements = daysContainer.getElementsByTagName("p");

  // Loop through the day elements and add "eat dinner!" to each one
  for (var i = 0; i < dayElements.length; i++) {
    var dayElement = dayElements[i];
    var dayText = dayElement.textContent;
    dayElement.textContent = dayText + " - eat dinner!";
  }
});
