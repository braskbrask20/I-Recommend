document.addEventListener("DOMContentLoaded", () => {

const favoritesGrid = document.getElementById("favoritesGrid");

const savedRecommendations =
JSON.parse(localStorage.getItem("savedRecommendations")) || [];

fetch("data/recommendations.json")
.then(response => response.json())
.then(data => {

favoritesGrid.innerHTML = "";

const favorites = data.filter(item =>
savedRecommendations.includes(item.id)
);

if (favorites.length === 0) {

favoritesGrid.innerHTML = `
<p>You haven't saved any recommendations yet.</p>
`;

return;
}

favorites.forEach(item => {

favoritesGrid.innerHTML += `
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
console.error("Error loading favorites:", error);
});

});