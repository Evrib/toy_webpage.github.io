// Get a reference to the button element
var button = document.querySelector("button");

// Add an event listener to the button
button.addEventListener("click", function() {
  // Get a reference to the days container element
  var daysContainer = document.getElementById("days");

  // Define an array of the days of the week
  var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  // Clear the days container
  daysContainer.innerHTML = "";

  // Loop through the days array and add each day to the container
  for (var i = 0; i < days.length; i++) {
    var dayElement = document.createElement("p");
    var dayText = document.createTextNode(days[i]);
    dayElement.appendChild(dayText);
    daysContainer.appendChild(dayElement);
  }
});
