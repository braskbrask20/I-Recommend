document.addEventListener("DOMContentLoaded", () => {

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const stars = document.querySelectorAll("#ratingStars span");
const message = document.getElementById("ratingMessage");

if (!stars.length || !message) return;

const ratings =
JSON.parse(localStorage.getItem("userRatings")) || {};

function updateStars(rating) {

stars.forEach(star => {

if (Number(star.dataset.rating) <= rating) {
star.classList.add("active");
} else {
star.classList.remove("active");
}

});

}

if (ratings[id]) {

updateStars(Number(ratings[id]));

message.textContent = `Your rating: ${ratings[id]} ⭐`;

}

stars.forEach(star => {

star.addEventListener("click", () => {

const rating = Number(star.dataset.rating);

ratings[id] = rating;

localStorage.setItem(
"userRatings",
JSON.stringify(ratings)
);

updateStars(rating);

message.textContent = `Your rating: ${rating} ⭐`;

});

});

});