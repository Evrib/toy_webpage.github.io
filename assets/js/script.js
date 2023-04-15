
// Get a reference to the button element
var button = document.querySelector("button");

// Get a reference to the days container element
var daysContainer = document.getElementById("days");

// Get an array of the day elements
var dayElements = daysContainer.getElementsByTagName("p");

// Add an event listener to the button
button.addEventListener("click", function() {
  // Shuffle the dinner options array
  for (var i = dinnerOptions.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = dinnerOptions[i];
    dinnerOptions[i] = dinnerOptions[j];
    dinnerOptions[j] = temp;
  }

  // Loop through the day elements and update the dinner option for each one
  for (var i = 0; i < dayElements.length; i++) {
    var dayElement = dayElements[i];
    var randomDinnerOption = dinnerOptions[i];
    var dayText = dayElement.textContent;
    var currentDinnerOption = dayText.split(" - ")[1]; // Get the current dinner option
    dayElement.textContent = dayText.replace(" - " + currentDinnerOption, "") + " - " + randomDinnerOption; // Replace the old dinner option with the new one
  }
});
