var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

//Set default
setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//Random
random.addEventListener("click", function() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	console.log(color1.value);
	console.log(color2.value);

	setGradient();
});

function getRandomColor() {
	return '#' + ("000000" + Math.random().toString(16).slice(2, 8)).slice(-6);
}
