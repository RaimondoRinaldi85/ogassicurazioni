const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');
const navLinks = ul.querySelectorAll('a');

burger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent this click from bubbling to the document
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
// Close menu when clicking a menu link
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
