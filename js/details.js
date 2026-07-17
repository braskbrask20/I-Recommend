document.addEventListener("DOMContentLoaded", () => {


const params = new URLSearchParams(window.location.search);

const id = params.get("id");


fetch("data/recommendations.json")


.then(response => response.json())


.then(data => {


const recommendation = data.find(item => item.id == id);



if(!recommendation){

console.log("Recommendation not found");

return;

}



document.querySelector(".category-tag").textContent = recommendation.category;


document.querySelector(".details-content h1").textContent = recommendation.name;


document.querySelector(".details-rating span:first-child").textContent =
`⭐ ${recommendation.rating}`;


document.querySelector(".details-rating span:last-child").textContent =
`AI Score: ${recommendation.aiScore}%`;


document.querySelector(".details-content p").textContent =
recommendation.fullDescription;

const image = document.getElementById("recommendationImage");

image.src = recommendation.image;

image.alt = recommendation.name;

console.log(recommendation.image);



});


});