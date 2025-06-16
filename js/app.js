const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');
const navLinks = ul.querySelectorAll('a');

burger.addEventListener('click', (e) => {
    e.stopPropagation();
    burger.classList.toggle('show-x');
    ul.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    const isClickInsideMenu = ul.contains(e.target);
    const isClickOnBurger = burger.contains(e.target);

    if (!isClickInsideMenu && !isClickOnBurger) {
        burger.classList.remove('show-x');
        ul.classList.remove('show');
    }
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('show-x');
        ul.classList.remove('show');
    });
});




const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {



        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});

const slides = document.getElementById('slides');
const indicators = document.getElementById('indicators');
const totalSlides = slides.children.length;
let currentIndex = 0;

for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
    });
    indicators.appendChild(dot);
}

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Auto slide
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}, 7000);
