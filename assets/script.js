const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let currentIndex = 0;

const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");

function updateCarousel() {
	const slide = slides[currentIndex];

	bannerImg.src = `./assets/images/slideshow/${slide.image}`;
	bannerText.innerHTML = slide.tagLine;

	dots.forEach((dot, index) => {
		dot.classList.toggle("dot_selected", index === currentIndex);
	});
}

rightArrow.addEventListener("click", () => {
	currentIndex++;
	if (currentIndex >= slides.length) currentIndex = 0;
	updateCarousel();
});

leftArrow.addEventListener("click", () => {
	currentIndex--;
	if (currentIndex < 0) currentIndex = slides.length - 1;
	updateCarousel();
});

dots.forEach((dot, index) => {
	dot.addEventListener("click", () => {
		currentIndex = index;
		updateCarousel();
	});
});

updateCarousel();