document.addEventListener("DOMContentLoaded", () => {

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("data/recommendations.json")
.then(response => response.json())
.then(data => {

const recommendation = data.find(item => item.id == id);

if (!recommendation) {
console.log("Recommendation not found");
return;
}

// Category
document.querySelector(".category-tag").textContent = recommendation.category;

// Name
document.querySelector(".details-content h1").textContent = recommendation.name;

// Rating
document.querySelector(".details-rating span:first-child").textContent =
`⭐ ${recommendation.rating}`;

// AI Score
document.querySelector(".details-rating span:last-child").textContent =
`AI Score: ${recommendation.aiScore}%`;

// Description
document.querySelector(".details-content p").textContent =
recommendation.fullDescription;

// Image
const image = document.getElementById("recommendationImage");
image.src = recommendation.image;
image.alt = recommendation.name;

// Pros
const prosList = document.querySelector(".pros-list");
prosList.innerHTML = "";

recommendation.pros.forEach(pro => {
const li = document.createElement("li");
li.textContent = "✔ " + pro;
prosList.appendChild(li);
});

// Cons
const consList = document.querySelector(".cons-list");
consList.innerHTML = "";

recommendation.cons.forEach(con => {
const li = document.createElement("li");
li.textContent = "✖ " + con;
consList.appendChild(li);
});

// Save Recommendation
const saveButton = document.getElementById("saveRecommendationBtn");

let savedRecommendations =
JSON.parse(localStorage.getItem("savedRecommendations")) || [];

if (savedRecommendations.includes(recommendation.id)) {
saveButton.textContent = "✅ Saved";
}

saveButton.addEventListener("click", () => {

if (!savedRecommendations.includes(recommendation.id)) {

savedRecommendations.push(recommendation.id);

localStorage.setItem(
"savedRecommendations",
JSON.stringify(savedRecommendations)
);

saveButton.textContent = "✅ Saved";

}

});

// Related Recommendations
const recommendationGrid = document.querySelector(".recommendation-grid");
recommendationGrid.innerHTML = "";

data
.filter(item => item.id != recommendation.id)
.forEach(item => {

recommendationGrid.innerHTML += `
<div class="recommendation-card">

<img src="${item.image}" alt="${item.name}">

<h3>${item.name}</h3>

<p>${item.description}</p>

<a href="recommendation-details.html?id=${item.id}" class="primary-btn">
View Details
</a>

</div>
`;

});

})
.catch(error => {
console.error("Error loading recommendation:", error);
});

});