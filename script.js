// Variables
let selectedNumber = 0;

// Elements
// Thanks-state
const thanksState = document.querySelector(".thanks-state");
const thanksNumber = document.querySelector(".thanks-rating-number");
// Rating-state
const ratingState = document.querySelector(".rating-state");
const ratingNumbers = document.querySelectorAll(".rating-number");
const ratingSubmit = document.querySelector(".rating-submit");
const ratingError = document.querySelector(".rating-error");

// Event-listeners
// All number boxes
ratingNumbers.forEach(function (item) {
  item.addEventListener("click", selectRating);
});
// Submit box
ratingSubmit.addEventListener("click", submitRating);

// Functions
// Select new rating number
function selectRating(event) {
  // Remove all other selections
  ratingNumbers.forEach(function (item) {
    item.classList.remove("selected");
  });
  // Select clicked number box
  event.target.classList.toggle("selected");
  // Get the selected number
  selectedNumber = event.target.innerText;
}

// Sumbit review
function submitRating() {
  // If a number is selected
  if (document.querySelector(".selected")) {
    // Change display state
    ratingState.style.display = "none";
    thanksState.style.display = "flex";
    // Add rating number to thanks display
    thanksNumber.innerText = selectedNumber;
  } else {
    // If no number is selected display error
    ratingError.style.display = "block";
  }
}
