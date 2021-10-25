
const menuToggle = document.getElementById("menu-toggle");
const html = document.querySelector("html");
menuToggle.addEventListener("click", function () {
	html.classList.toggle("js-noScroll");    
});