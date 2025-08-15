
// References to buttons and content container
const aboutBtn = document.getElementById("aboutBtn");
const whyBtn = document.getElementById("whyBtn");
const workBtn = document.getElementById("workBtn");
const content = document.getElementById("content");

// Data for each section
const sections = {
    about: `
        <h1>About me</h1>
        <p>I am a Software Engineer from Dublin, Ireland based in London.
        I have 3 years of experience in a med-tech startup building VR simulations for medical professionals. 
        My background is in Biomedical Engineering with a masters from Imperial College London. 
        I have a strong passion for learning new things and building.</p>
    `,
    why: `
        <h1>Why career change?</h1>
        <p>I enjoy solving problems, working with web technologies, and building scalable systems. 
        I want to expand into full-stack development to diversify my career and work on projects 
        that can reach a wider audience.</p>
    `,
    work: `
        <h1>What I've built</h1>
        <p>Projects that I have built in my spare time or in work, 
        including VR training modules, interactive web apps, and mobile prototypes.</p>
    `
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


