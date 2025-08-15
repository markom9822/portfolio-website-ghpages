import { about } from './sections/about.js';
import { why } from './sections/why.js';
import { work } from './sections/work.js';


// References to buttons and content container
const aboutBtn = document.getElementById("aboutBtn");
const whyBtn = document.getElementById("whyBtn");
const workBtn = document.getElementById("workBtn");
const content = document.getElementById("content");

export const sections = {
    about,
    why,
    work
};

// Listeners for changing the content
aboutBtn.addEventListener("click", () => {
    content.innerHTML = sections.about;
    aboutBtn.classList.add('selected');

    whyBtn.classList.remove('selected');
    workBtn.classList.remove('selected');
})

whyBtn.addEventListener("click", () => {
    content.innerHTML = sections.why;
    whyBtn.classList.add('selected');

    aboutBtn.classList.remove('selected');
    workBtn.classList.remove('selected');
})

workBtn.addEventListener("click", () => {
    content.innerHTML = sections.work;
    workBtn.classList.add('selected');

    aboutBtn.classList.remove('selected');
    whyBtn.classList.remove('selected');
})


// Set default to 'About' on page load
content.innerHTML = sections.about;
aboutBtn.classList.add('selected');