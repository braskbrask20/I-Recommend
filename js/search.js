// I-Recommend Recommendation Display


document.addEventListener("DOMContentLoaded", () => {


const recommendationGrid = document.querySelector(".recommendation-grid");

const searchInput = document.getElementById("searchInput");


let recommendations = [];



fetch("data/recommendations.json")


.then(response => response.json())


.then(data => {


recommendations = data;


displayRecommendations(recommendations);


})


.catch(error => {


console.log("Error loading recommendations:", error);


});







function displayRecommendations(items) {


recommendationGrid.innerHTML = "";



items.forEach(item => {



const card = document.createElement("div");


card.className = "recommendation-card";



card.innerHTML = `


<div class="placeholder-image">

${item.category}

</div>



<h3>

${item.name}

</h3>



<span class="category-tag">

${item.category}

</span>



<p>

${item.description}

</p>



<div class="card-footer">


<span>

⭐ ${item.rating}

</span>


<span>

AI Score: ${item.aiScore}

</span>


</div>



<a href="#" class="primary-btn">

Read More

</a>


`;



recommendationGrid.appendChild(card);



});


}








if(searchInput){



searchInput.addEventListener("input", () => {



const searchText = searchInput.value.toLowerCase();



const filtered = recommendations.filter(item =>



item.name.toLowerCase().includes(searchText) ||


item.category.toLowerCase().includes(searchText)



);



displayRecommendations(filtered);



});


}



});