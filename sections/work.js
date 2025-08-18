export const work = `
<div style="flex: 1;">
    <h1>
        What I've built
    </h1>
    <p>
        Projects that I have built in my spare time outside of work, 
        including a full-stack website, sports mobile app and a markdown note-taking desktop app.
    </p>

    <div style="margin-top: 20px">

        <div style="margin-bottom: 20px">  
            <div style="display: flex; flex-direction: row; align-items: center; border-bottom: 1px dashed black; width: 100%">
                <p style="margin: 0; font-size: 0.80rem; width: 5%; text-align: center;">1</p>
                <h2 style="margin: 0; width: 65%; text-align: left; padding: 5px">Drum Rhythm Web Game</h3>
                <p style="margin: 0; font-size: 0.80rem; width: 30%; text-align: center;";">Started: Aug 15, 2025</p>
            </div>

            <div style="width: fit-content; position: relative; margin: 10px;">
                <img src="./images/drum_game_cover.png" alt="Portfolio Screenshot"
                    style="display: block; max-width: 100%; max-height: 180px; object-fit: cover; border-radius: 3px; box-shadow: 0 2px 10px rgba(0,0,0,0.3);" />

                <img src="./images/sela-tape.png"
                    alt="Overlay"
                    style="position: absolute; top: -20px; right: -30px; width: 80px; height: 60px; pointer-events: none;">

                <img src="./images/sela-tape.png"
                    alt="Overlay"
                    style="position: absolute; top: -20px; left: -30px; width: 80px; height: 60px; pointer-events: none; transform: rotate(90deg);">
            </div>

            <p style="font-size: 1rem; margin-bottom: 10px;">
            A web game built using Javascript, HTML and CSS where you have to hit the drums at right time to survive. See how high of a score you can get.
            <br/>
            <br/>
            Features clean UI with custom made pixel art made using Aesprite. Also includes background music, sound effects and animations.
            </p>

            <p style="margin-bottom: 10px; font-size: 0.80rem; background-color: #c6f5f5; border-radius: 5px; padding: 8px; font-family: JetBrains-Mono, Arial, monospace;">
               Javascript, HTML, CSS, Aesprite
            </p>

            <a href="https://github.com/markom9822/rhythm-web-game" target="_blank" style="display: flex; align-items: center;">
                <svg stroke="blue" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round"
                stroke-linejoin="round" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                    </path>
                    <path d="M9 18c-4.51 2-5-2-7-2">
                    </path>
                </svg>
                <p style="margin: 0; margin-left: 2px; font-size: 1rem; text-align: center; color: blue; font-family: JetBrains-Mono, Arial, monospace">Github Link</p>
            </a>

        </div>

        <div style="margin-bottom: 20px">  
            <div style="display: flex; flex-direction: row; align-items: center; border-bottom: 1px dashed black; width: 100%">
                <p style="margin: 0; font-size: 0.80rem; width: 5%; text-align: center;">1</p>
                <h2 style="margin: 0; width: 65%; text-align: left; padding: 5px">Full-stack portfolio website</h3>
                <p style="margin: 0; font-size: 0.80rem; width: 30%; text-align: center;";">Started: Jul 28, 2025</p>
            </div>

            <div style="width: fit-content; position: relative; margin: 10px;">
                <img src="./images/portfolio_website_cover.png" alt="Portfolio Screenshot"
                    style="display: block; max-width: 100%; max-height: 180px; object-fit: cover; border-radius: 3px; box-shadow: 0 2px 10px rgba(0,0,0,0.3);" />

                <img src="./images/sela-tape.png"
                    alt="Overlay"
                    style="position: absolute; top: -20px; right: -30px; width: 80px; height: 60px; pointer-events: none;">

                <img src="./images/sela-tape.png"
                    alt="Overlay"
                    style="position: absolute; top: -20px; left: -30px; width: 80px; height: 60px; pointer-events: none; transform: rotate(90deg);">
            </div>

            <p style="font-size: 1rem; margin-bottom: 10px;">
            A full-stack portfolio website built from scratch using React, Vite, Motion and Tailwind CSS for the frontend and Firebase for the backend storage and authentication.
            <br/>
            <br/>
            Features custom admin dashboard and CRUD system for managing all of the information displayed on the website.
            <br/>
            <br/>
            Project is unit tested with tests automatically ran when making pull requests using GitHub actions.
            </p>

            <p style="margin-bottom: 10px; font-size: 0.80rem; background-color: #c6f5f5; border-radius: 5px; padding: 8px; font-family: JetBrains-Mono, Arial, monospace;">
               React, Vite, Typescript, Tailwind CSS, Firebase, Motion, Figma
            </p>

            <a href="https://github.com/markom9822/portfolio-website-vercel" target="_blank" style="display: flex; align-items: center;">
                <svg stroke="blue" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round"
                stroke-linejoin="round" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                    </path>
                    <path d="M9 18c-4.51 2-5-2-7-2">
                    </path>
                </svg>
                <p style="margin: 0; margin-left: 2px; font-size: 1rem; text-align: center; color: blue; font-family: JetBrains-Mono, Arial, monospace">Github Link</p>
            </a>

        </div>

        <div style="margin-bottom: 20px">
            <div style="display: flex; flex-direction: row; align-items: center; border-bottom: 1px dashed black; width: 100%">
                <p style="margin: 0; font-size: 0.80rem; width: 5%; text-align: center;">2</p>
                <h2 style="margin: 0; width: 65%; text-align: left; padding: 5px">Rugby Radar app</h3>
                <p style="margin: 0; font-size: 0.80rem; width: 30%; text-align: center;";">Started: Jul 12, 2024</p>
            </div>

            <div style="width: fit-content; position: relative; margin: 10px;">
                <img src="./images/Rugby_Radar_Poster.jpg" alt="Portfolio Screenshot"
                    style="display: block; max-width: 100%; max-height: 180px; object-fit: cover; border-radius: 3px; box-shadow: 0 2px 10px rgba(0,0,0,0.3);" />

                <img src="./images/sela-tape.png"
                    alt="Overlay"
                    style="position: absolute; top: -20px; right: -30px; width: 80px; height: 60px; pointer-events: none;">

                <img src="./images/sela-tape.png"
                    alt="Overlay"
                    style="position: absolute; top: -20px; left: -30px; width: 80px; height: 60px; pointer-events: none; transform: rotate(90deg);">
            </div>

            <p style="font-size: 1rem;">
            A sports mobile application built and designed from scratch using React Native, Expo and Figma integrating multiple public APIs providing real-time data.
            <br/>
            <br/>
            Supplies information on fixtures, stats, player info, standings and more from 10+ rugby leagues around the world.
            </p>

            <p style="margin-bottom: 10px; font-size: 0.80rem; background-color: #c6f5f5; border-radius: 5px; padding: 5px; font-family: JetBrains-Mono, Arial, monospace">
               React Native, Typescript, Expo, Figma
            </p>

            <a href="https://github.com/markom9822/rugbyRadar_app" target="_blank" style="display: flex; align-items: center;">
                <svg stroke="blue" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round"
                stroke-linejoin="round" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                    </path>
                    <path d="M9 18c-4.51 2-5-2-7-2">
                    </path>
                </svg>
                <p style="margin: 0; margin-left: 2px; font-size: 1rem; text-align: center; color: blue; font-family: JetBrains-Mono, Arial, monospace">Github Link</p>
            </a>

        </div>

        <div style="margin-bottom: 20px">
            <div style="display: flex; flex-direction: row; align-items: center; border-bottom: 1px dashed black; width: 100%">
                <p style="margin: 0; font-size: 0.80rem; width: 5%; text-align: center;">3</p>
                <h2 style="margin: 0; width: 65%; text-align: left; padding: 5px">MarkNote app</h3>
                <p style="margin: 0; font-size: 0.80rem; width: 30%; text-align: center;";">Started: Mar 29, 2024</p>
            </div>

            <div style="width: fit-content; position: relative; margin: 10px;">
                <img src="./images/MarkNote_app_cover.png" alt="Portfolio Screenshot"
                    style="display: block; max-width: 100%; max-height: 180px; object-fit: cover; border-radius: 3px; box-shadow: 0 2px 10px rgba(0,0,0,0.3);" />

                <img src="./images/sela-tape.png"
                    alt="Overlay"
                    style="position: absolute; top: -20px; right: -30px; width: 80px; height: 60px; pointer-events: none;">

                <img src="./images/sela-tape.png"
                    alt="Overlay"
                    style="position: absolute; top: -20px; left: -30px; width: 80px; height: 60px; pointer-events: none; transform: rotate(90deg);">
            </div>

            <p style="font-size: 1rem;">
            A personal desktop Markdown note taking application built using React, Electron and Tailwind CSS for the frontend and Jotai for managing note storage.
            <br/>
            <br/>
            Features a code editor style text editor with a note preview which updates in real-time. Also includes an in depth array of settings allowing the user to customise themes, the editor and the markdown preview.
            </p>

            <p style="margin-bottom: 10px; font-size: 0.80rem; background-color: #c6f5f5; border-radius: 5px; padding: 5px; font-family: JetBrains-Mono, Arial, monospace">
               React, Electron, Typescript, Tailwind CSS, Markdown, Jotai, Codemirror
            </p>

            <a href="https://github.com/markom9822/MarkNote-App" target="_blank" style="display: flex; align-items: center;">
                <svg stroke="blue" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round"
                stroke-linejoin="round" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                    </path>
                    <path d="M9 18c-4.51 2-5-2-7-2">
                    </path>
                </svg>
                <p style="margin: 0; margin-left: 2px; font-size: 1rem; text-align: center; color: blue; font-family: JetBrains-Mono, Arial, monospace">Github Link</p>
            </a>

        </div>

    </div>

</div>
`;