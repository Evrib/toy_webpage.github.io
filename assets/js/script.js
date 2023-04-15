// import suggestions from './suggestions.js';

const generateButton = document.getElementById('generate-button');
const activitySuggestion = document.getElementById('activity-suggestion');

function generateSuggestion2() {
  // Pick a random suggestion from the array
  const randomIndex = Math.floor(Math.random() * suggestions.length);
  const suggestion = suggestions[randomIndex];

  // Update the text and href of the suggestion element
  const suggestionEl = document.getElementById("activity-suggestion");
  suggestionEl.textContent = suggestion.text;
  suggestionEl.href = suggestion.url;
}

function generateSuggestion() {
  // Pick a random suggestion from the array
  const randomIndex = Math.floor(Math.random() * suggestions.length);
  const suggestion = suggestions[randomIndex];

  // Update the text and href of the suggestion element
  const suggestionEl = document.getElementById("activity-suggestion");
  suggestionEl.innerHTML = '<a href="' + suggestion.url + '" target="_blank">' + suggestion.text + '</a>';
}



generateButton.addEventListener('click', generateSuggestion);

generateSuggestion();

