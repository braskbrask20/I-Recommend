// I-Recommend Main JavaScript


// Wait until the page loads completely

document.addEventListener("DOMContentLoaded", () => {


console.log("I-Recommend is running successfully");



// Smooth scrolling for internal links

const links = document.querySelectorAll('a[href^="#"]');


links.forEach(link => {


link.addEventListener("click", function(event) {


const target = document.querySelector(this.getAttribute("href"));


if(target){

event.preventDefault();


target.scrollIntoView({

behavior: "smooth"

});

}


});


});



});