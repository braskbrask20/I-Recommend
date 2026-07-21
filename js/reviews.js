document.addEventListener("DOMContentLoaded", () => {

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const reviewInput = document.getElementById("reviewInput");
const submitButton = document.getElementById("submitReviewBtn");
const reviewsContainer = document.getElementById("reviewsContainer");

if (!reviewInput || !submitButton || !reviewsContainer) return;

const reviews =
JSON.parse(localStorage.getItem("userReviews")) || {};

if (!reviews[id]) {
reviews[id] = [];
}

function displayReviews() {

reviewsContainer.innerHTML = "";

if (reviews[id].length === 0) {

reviewsContainer.innerHTML =
"<p>No reviews yet. Be the first to leave one!</p>";

return;
}

reviews[id].forEach(review => {

reviewsContainer.innerHTML += `
<div class="review-card">
<p>${review}</p>
</div>
`;

});

}

displayReviews();

submitButton.addEventListener("click", () => {

const review = reviewInput.value.trim();

if (review === "") {
alert("Please write a review before submitting.");
return;
}

reviews[id].push(review);

localStorage.setItem(
"userReviews",
JSON.stringify(reviews)
);

reviewInput.value = "";

displayReviews();

});

});
