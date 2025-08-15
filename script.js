
// References to buttons and content container
const aboutBtn = document.getElementById("aboutBtn");
const whyBtn = document.getElementById("whyBtn");
const workBtn = document.getElementById("workBtn");
const content = document.getElementById("content");

// Data for each section
const sections = {
    about: `
    <div style="flex: 1; display: flex; flex-direction: column; gap: 2rem;">

        <div style="display: flex; flex-direction: row; gap: 2rem; align-items: center;">

            <div style="flex: 2;">
                <h1>About me</h1>
                <p>
                    I am a Software Engineer from Dublin, Ireland based in London.
                    I have 3 years of experience in a med-tech startup building VR simulations for medical professionals.
                    <br><br>
                    My background is in Biomedical Engineering with a masters from Imperial College London.
                    I have a strong passion for learning new things and building.
                </p>
            </div>

            <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
                <img src="./images/profile_photo_small.png"
                    alt="Profile"
                    style="max-width: 100%; height: auto; border-radius: 6px;">
            </div>
        </div>

        <div style="flex: 1;">
            <h1>Skills</h1>

            <div class="skills-grid" style="
            display:grid;
            grid-template-columns: repeat(2,1fr);
            gap:10px;
            justify-content:center;
            width:100%;">

            <div class="skill-card" style="
                padding:0.5rem;
                width:100%;
                box-sizing:border-box;
                display:flex;
                flex-direction:row;
                gap:0.25rem;
                align-items:flex-start;">
                
                <div class="skill-icon" style="width:1.75rem;height:1.75rem;">
                    <a href="https://unity.com/" target="_blank">
                    <img title="Unity" src="https://i.redd.it/tu3gt6ysfxq71.png" alt="Unity Logo"
                        style="object-fit:contain;width:100%;height:100%;display:block;">
                    </a>
                </div>
                <div class="skill-info" style="flex:1;display:flex;flex-direction:column;justify-content:start;">
                    <div class="skill-header" style="
                        display:flex;
                        flex-direction:row;
                        justify-content:space-between;
                        font-size:0.60rem;">
                    <h3 class="skill-name" style="font-weight:600;color:#27272a;margin-bottom:0.5rem;font-family:'Montserrat','Arial',sans-serif;">Unity</h3>
                    <h3 class="skill-years" style="font-weight:600;color:#27272a;margin-bottom:0.5rem;font-family:'Montserrat','Arial',sans-serif;">3 yrs</h3>
                    </div>
                    <div class="skill-bar" style="position:relative;height:0.5rem;width:100%;">
                    <div class="skill-bar-bg" style="background:#18181b;height:100%;border-radius:4px;position:relative;z-index:10;width:100%;"></div>
                    <div class="skill-bar-fg" style="background:#34d399;height:100%;border-radius:4px;position:absolute;bottom:0;left:0;z-index:0;width:100%;"></div>
                    </div>
                </div>
            </div>

             <div>
                Test
            </div>

             <div>
                Test
            </div>

             <div>
                Test
            </div>

             <div>
                Test
            </div>

             <div>
                Test
            </div>

            </div>
        </div>
    </div>
    `,
    why: `

    <div style="flex: 1;">
        <h1>Why career change?</h1>
        <p>
            I enjoy solving problems, working with web technologies, and building scalable systems. 
            I want to expand into full-stack development to diversify my career and work on projects 
            that can reach a wider audience.
        </p>
    </div>
    
    `,
    work: `
    <div style="flex: 1;">
        <h1>
            What I've built
        </h1>
        <p>
            Projects that I have built in my spare time or in work, 
            including VR training modules, interactive web apps, and mobile prototypes.
        </p>
    </div>
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


// Set default to 'About' on page load
content.innerHTML = sections.about;
aboutBtn.classList.add('selected');