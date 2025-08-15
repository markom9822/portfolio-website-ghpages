export const about =  `
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

            <!-- Unity -->
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
                        <div class="skill-bar-bg" style="background-color: black;height:100%;border-radius:4px;position:relative;z-index:10;width:100%;"></div>
                        <div class="skill-bar-fg" style="background-color: #79c9c9;height:100%;border-radius:4px;position:absolute;bottom:0;left:0;z-index:0;width:100%;"></div>
                    </div>
                </div>
            </div>

            <!-- C# -->
            <div class="skill-card" style="
                padding:0.5rem;
                width:100%;
                background:transparent;
                box-sizing:border-box;
                display:flex;
                flex-direction:row;
                gap:0.25rem;
                align-items:flex-start;">

                <div class="skill-icon" style="width:1.75rem;height:1.75rem;">
                    <a href="https://dotnet.microsoft.com/en-us/languages/csharp" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 288" style="object-fit:contain;width:100%;height:100%;display:block;"><title>C#</title><g><path d="M255.569,84.45..."></path></g></svg>
                    </a>
                </div>
                <div class="skill-info" style="flex:1;display:flex;flex-direction:column;justify-content:start;">

                    <div class="skill-header" style="
                        display:flex;
                        flex-direction:row;
                        justify-content:space-between;
                        font-size:0.60rem;">
                            <h3 class="skill-name" style="font-weight:600;color:#27272a;margin-bottom:0.5rem;font-family:'Montserrat','Arial',sans-serif;">C#</h3>
                            <h3 class="skill-years" style="font-weight:600;color:#27272a;margin-bottom:0.5rem;font-family:'Montserrat','Arial',sans-serif;">3 yrs</h3>
                            </div>
                            <div class="skill-bar" style="position:relative;height:0.5rem;width:100%;">
                            <div class="skill-bar-bg" style="background-color: black;height:100%;border-radius:4px;position:relative;z-index:10;width:100%;"></div>
                            <div class="skill-bar-fg" style="background-color: #79c9c9;height:100%;border-radius:4px;position:absolute;bottom:0;left:0;z-index:0;width:100%;"></div>
                    </div>
                </div>
            </div>

            <!-- Typescript -->
            <div class="skill-card" style="
                padding:0.5rem;
                width:100%;
                background:transparent;
                box-sizing:border-box;
                display:flex;
                flex-direction:row;
                gap:0.25rem;
                align-items:flex-start;">
                <div class="skill-icon" style="width:1.75rem;height:1.75rem;">
                    <a href="https://www.typescriptlang.org/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="object-fit:contain;width:100%;height:100%;display:block;"><title>Typescript</title><rect ...></rect><path ...></path></svg>
                    </a>
                </div>
                <div class="skill-info" style="flex:1;display:flex;flex-direction:column;justify-content:start;">
                    <div class="skill-header" style="
                        display:flex;
                        flex-direction:row;
                        justify-content:space-between;
                        font-size:0.60rem;">
                    <h3 class="skill-name" style="font-weight:600;color:#27272a;margin-bottom:0.5rem;font-family:'Montserrat','Arial',sans-serif;">Typescript</h3>
                    <h3 class="skill-years" style="font-weight:600;color:#27272a;margin-bottom:0.5rem;font-family:'Montserrat','Arial',sans-serif;">2 yrs</h3>
                    </div>
                    <div class="skill-bar" style="position:relative;height:0.5rem;width:100%;">
                    <div class="skill-bar-bg" style="background-color: #79c9c9; height:100%; border-radius:4px;position:relative;z-index:0;width:100%;"></div>
                    <div class="skill-bar-fg" style="background-color: black; height:100%; border-radius:4px;position:absolute;bottom:0;left:0;z-index:10;width:67%;"></div>
                    </div>
                </div>
            </div>

            <!-- React/React Native -->
            <div class="skill-card" style="
                padding:0.5rem;
                width:100%;
                background:transparent;
                box-sizing:border-box;
                display:flex;
                flex-direction:row;
                gap:0.25rem;
                align-items:flex-start;">
                <div class="skill-icon" style="width:1.75rem;height:1.75rem;">
                    <a href="https://react.dev" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348"
                        style="object-fit:contain;width:100%;height:100%;display:block;">
                        <title>React</title>
                        <circle cx="0" cy="0" r="2.05" fill="#3796b0"></circle>
                        <g stroke="#3796b0" stroke-width="1" fill="none">
                        <ellipse rx="11" ry="4.2"></ellipse>
                        <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
                        <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
                        </g>
                    </svg>
                    </a>
                </div>
                <div class="skill-info" style="flex:1;display:flex;flex-direction:column;justify-content:start;">
                    <div class="skill-header" style="
                        display:flex;
                        flex-direction:row;
                        justify-content:space-between;
                        font-size:0.60rem;">
                    <h3 class="skill-name" style="font-weight:600;color:#27272a;margin-bottom:0.5rem;font-family:'Montserrat','Arial',sans-serif;">React/React Native</h3>
                    <h3 class="skill-years" style="font-weight:600;color:#27272a;margin-bottom:0.5rem;font-family:'Montserrat','Arial',sans-serif;">2 yrs</h3>
                    </div>
                    <div class="skill-bar" style="position:relative;height:0.5rem;width:100%;">
                    <div class="skill-bar-bg" style="background-color: #79c9c9; height:100%;border-radius:4px;position:relative;z-index:0;width:100%;"></div>
                    <div class="skill-bar-fg" style="background-color: black; height:100%;border-radius:4px;position:absolute;bottom:0;left:0;z-index:10;width:67%;"></div>
                    </div>
                </div>
            </div>

            <!-- Python -->
            <div class="skill-card" style="
                padding:0.5rem;
                width:100%;
                background:transparent;
                box-sizing:border-box;
                display:flex;
                flex-direction:row;
                gap:0.25rem;
                align-items:flex-start;">

                <div class="skill-icon" style="width:1.75rem;height:1.75rem;">

                </div>
                <div class="skill-info" style="flex:1;display:flex;flex-direction:column;justify-content:start;">
                    <div class="skill-header" style="
                        display:flex;
                        flex-direction:row;
                        justify-content:space-between;
                        font-size:0.60rem;">
                    <h3 class="skill-name" style="font-weight:600;color:#27272a;margin-bottom:0.5rem;font-family:'Montserrat','Arial',sans-serif;">Python</h3>
                    <h3 class="skill-years" style="font-weight:600;color:#27272a;margin-bottom:0.5rem;font-family:'Montserrat','Arial',sans-serif;">1 yr</h3>
                    </div>
                    <div class="skill-bar" style="position:relative;height:0.5rem;width:100%;">
                    <div class="skill-bar-bg" style="background-color: #79c9c9; height:100%;border-radius:4px;position:relative;z-index:0;width:100%;"></div>
                    <div class="skill-bar-fg" style="background-color: black; height:100%;border-radius:4px;position:absolute;bottom:0;left:0;z-index:10;width:33%;"></div>
                    </div>
                </div>
            </div>

            <!-- C++ -->
            <div class="skill-card" style="
                padding:0.5rem;
                width:100%;
                background:transparent;
                box-sizing:border-box;
                display:flex;
                flex-direction:row;
                gap:0.25rem;
                align-items:flex-start;">

                <div class="skill-icon" style="width:1.75rem;height:1.75rem;">
                    <a href="https://cplusplus.com/" target="_blank">
                    <!-- SVG from user content, truncated for brevity -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306 344.35" style="object-fit:contain;width:100%;height:100%;display:block;"><title>C++</title><path ...></path></svg>
                    </a>
                </div>
                <div class="skill-info" style="flex:1;display:flex;flex-direction:column;justify-content:start;">
                    <div class="skill-header" style="
                        display:flex;
                        flex-direction:row;
                        justify-content:space-between;
                        font-size:0.60rem;">
                    <h3 class="skill-name" style="font-weight:600;color:#27272a;margin-bottom:0.5rem;font-family:'Montserrat','Arial',sans-serif;">C++</h3>
                    <h3 class="skill-years" style="font-weight:600;color:#27272a;margin-bottom:0.5rem;font-family:'Montserrat','Arial',sans-serif;">1 yr</h3>
                    </div>
                    <div class="skill-bar" style="position:relative;height:0.5rem;width:100%;">
                    <div class="skill-bar-bg" style="background-color: #79c9c9; height:100%;border-radius:4px;position:relative;z-index:0;width:100%;"></div>
                    <div class="skill-bar-fg" style="background-color: black; height:100%;border-radius:4px;position:absolute;bottom:0;left:0;z-index:10;width:33%;"></div>
                    </div>
            </div>

            </div>
            </div>
        </div>
    </div>
    `;