

const Slides = document.querySelectorAll('.photo-grid-item');
const total = Slides.length;

let SlidePos = 0;



document.
querySelector('.caro_actions_prev')
.addEventListener("click", function() {
toPrevSlide();
});

document.
querySelector('.caro_actions_next')
.addEventListener("click", function() {
toNextSlide();
});

function toNextSlide() {
if (SlidePos === total - 1) {
SlidePos = 0;
} else {
SlidePos++;
}
updateSlidePos();
}

function toPrevSlide() {
if (SlidePos === 0) {
SlidePos = total - 1;
} else {
SlidePos--;
}
updateSlidePos();
}

function updateSlidePos() {
    for (let Slide of Slides) {
    Slide.classList.remove('caro_item-visible');
    Slide.classList.add('caro_item-hidden')
    }
    
    Slides[SlidePos].classList.add('caro_item-visible');
    }
    
