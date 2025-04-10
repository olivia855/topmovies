const slides = document.querySelector('.slides');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const totalSlides = document.querySelectorAll('.slides div').length;

let currentIndex = 0;
const visibleSlides = 6;
const slideWidth = 192;

rightButton.addEventListener('click', function () {
    if (currentIndex < totalSlides - visibleSlides) {
        currentIndex++;
        slides.style.transform = `translateX(-${currentIndex*slideWidth-30}px)`;
    }
    updateButton()
})

leftButton.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        slides.style.transform = `translateX(-${currentIndex*slideWidth}px)`;
    }
    updateButton();
})

function updateButton() {
    leftButton.style.display = currentIndex > 0 ? "block" : "none";
    rightButton.style.display = currentIndex < totalSlides - visibleSlides ? "block" : "none";
}

updateButton();