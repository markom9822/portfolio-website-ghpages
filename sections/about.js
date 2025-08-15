export const about =  `
    <div style="flex: 1; display: flex; flex-direction: column; gap: 1rem;">

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

        <div
        style="
            background-image: url('/images/dash_line.svg');
            background-size: cover;
            width: 100%;
            height: 2px;
        "></div>

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
                    gap:0.35rem;
                    align-items:center;">
                    
                    <div class="skill-icon" style="width:2rem;height:2rem;">
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
                            font-size:0.80rem;">
                        <h3 class="skill-name" style="font-weight:600;color:rgb(54, 54, 54); margin-bottom:0.5rem;">Unity</h3>
                        <h3 class="skill-years" style="font-weight:600;color:rgb(54, 54, 54); margin-bottom:0.5rem;">3 yrs</h3>
                        </div>
                        <div class="skill-bar" style="position:relative;height:0.5rem;width:100%;">
                        <div class="skill-bar-bg" style="background-color: rgb(54, 54, 54);height:100%;border-radius:4px;position:relative;z-index:10;width:100%;"></div>
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
                gap:0.35rem;
                align-items:center;">

                <div class="skill-icon" style="width:2rem;height:2rem;">
                    <a href="https://dotnet.microsoft.com/en-us/languages/csharp" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 288" version="1.1" className="aspect-square" preserveAspectRatio="xMidYMid">
                    <title>C#</title>
                    <g>
                        <path d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 C250.393,68.089376 247.32,65.070376 243.198,62.683376 C209.173,43.064376 175.115,23.505376 141.101,3.86637605 C131.931,-1.42762395 123.04,-1.23462395 113.938,4.13537605 C100.395,12.122376 32.59,50.969376 12.385,62.672376 C4.064,67.489376 0.015,74.861376 0.013,84.443376 C0,123.898376 0.013,163.352376 0,202.808376 C0,207.532376 0.991,211.717376 2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 C254.589,211.707376 255.582,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376" fill="#A179DC" fillRule="nonzero" />
                        <path d="M128.182,143.241376 L2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 L128.182,143.241376" fill="#280068" fillRule="nonzero" />
                        <path d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 L128.182,143.241376 L252.595,215.315376 C254.589,211.707376 255.58,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376" fill="#390091" fillRule="nonzero" />
                        <path d="M201.892326,116.294008 L201.892326,129.767692 L215.36601,129.767692 L215.36601,116.294008 L222.102852,116.294008 L222.102852,129.767692 L235.576537,129.767692 L235.576537,136.504534 L222.102852,136.504534 L222.102852,149.978218 L235.576537,149.978218 L235.576537,156.71506 L222.102852,156.71506 L222.102852,170.188744 L215.36601,170.188744 L215.36601,156.71506 L201.892326,156.71506 L201.892326,170.188744 L195.155484,170.188744 L195.155484,156.71506 L181.6818,156.71506 L181.6818,149.978218 L195.155484,149.978218 L195.155484,136.504534 L181.6818,136.504534 L181.6818,129.767692 L195.155484,129.767692 L195.155484,116.294008 L201.892326,116.294008 Z M215.36601,136.504534 L201.892326,136.504534 L201.892326,149.978218 L215.36601,149.978218 L215.36601,136.504534 Z" fill="#FFFFFF" />
                        <path d="M128.456752,48.625876 C163.600523,48.625876 194.283885,67.7121741 210.718562,96.0819435 L210.558192,95.808876 L169.209615,119.617159 C161.062959,105.823554 146.128136,96.5150717 128.996383,96.3233722 L128.456752,96.3203544 C102.331178,96.3203544 81.1506705,117.499743 81.1506705,143.625316 C81.1506705,152.168931 83.4284453,160.17752 87.3896469,167.094792 C95.543745,181.330045 110.872554,190.931398 128.456752,190.931398 C146.149522,190.931398 161.565636,181.208041 169.67832,166.820563 L169.481192,167.165876 L210.767678,191.083913 C194.51328,219.21347 164.25027,238.240861 129.514977,238.620102 L128.456752,238.625876 C93.2021701,238.625876 62.4315028,219.422052 46.0382398,190.902296 C38.0352471,176.979327 33.4561922,160.837907 33.4561922,143.625316 C33.4561922,91.1592636 75.9884604,48.625876 128.456752,48.625876 Z" fill="#FFFFFF" fillRule="nonzero" />
                    </g>
                    </svg>
                    </a>
                </div>
                <div class="skill-info" style="flex:1;display:flex;flex-direction:column;justify-content:start;">

                    <div class="skill-header" style="
                        display:flex;
                        flex-direction:row;
                        justify-content:space-between;
                        font-size:0.80rem;">
                            <h3 class="skill-name" style="font-weight:600;color:rgb(54, 54, 54); margin-bottom:0.5rem;">C#</h3>
                            <h3 class="skill-years" style="font-weight:600;color:rgb(54, 54, 54); margin-bottom:0.5rem;">3 yrs</h3>
                            </div>
                            <div class="skill-bar" style="position:relative;height:0.5rem;width:100%;">
                            <div class="skill-bar-bg" style="background-color: rgb(54, 54, 54);height:100%;border-radius:4px;position:relative;z-index:10;width:100%;"></div>
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
                gap:0.35rem;
                align-items:center;">
                <div class="skill-icon" style="width:2rem;height:2rem;">
                    <a href="https://www.typescriptlang.org/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" className="aspect-square">
                        <title>Typescript</title>
                        <rect fill="#3178c6" height="512" rx="50" width="512" />
                        <rect fill="#3178c6" height="512" rx="50" width="512" />
                        <path clipRule="evenodd" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#fff" fillRule="evenodd" />
                    </svg>
                    </a>
                </div>
                <div class="skill-info" style="flex:1;display:flex;flex-direction:column;justify-content:start;">
                    <div class="skill-header" style="
                        display:flex;
                        flex-direction:row;
                        justify-content:space-between;
                        font-size:0.8rem;">
                    <h3 class="skill-name" style="font-weight:600;color:rgb(54, 54, 54); margin-bottom:0.5rem;">Typescript</h3>
                    <h3 class="skill-years" style="font-weight:600;color:rgb(54, 54, 54); margin-bottom:0.5rem;">2 yrs</h3>
                    </div>
                    <div class="skill-bar" style="position:relative;height:0.5rem;width:100%;">
                    <div class="skill-bar-bg" style="background-color: #79c9c9; height:100%; border-radius:4px;position:relative;z-index:0;width:100%;"></div>
                    <div class="skill-bar-fg" style="background-color: rgb(54, 54, 54); height:100%; border-radius:4px;position:absolute;bottom:0;left:0;z-index:10;width:67%;"></div>
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
                gap:0.35rem;
                align-items:center;">
                <div class="skill-icon" style="width:2rem;height:2rem;">
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
                        font-size:0.8rem;">
                    <h3 class="skill-name" style="font-weight:600;color:rgb(54, 54, 54); margin-bottom:0.5rem;">React/React Native</h3>
                    <h3 class="skill-years" style="font-weight:600;color:rgb(54, 54, 54); margin-bottom:0.5rem;">2 yrs</h3>
                    </div>
                    <div class="skill-bar" style="position:relative;height:0.5rem;width:100%;">
                    <div class="skill-bar-bg" style="background-color: #79c9c9; height:100%;border-radius:4px;position:relative;z-index:0;width:100%;"></div>
                    <div class="skill-bar-fg" style="background-color: rgb(54, 54, 54); height:100%;border-radius:4px;position:absolute;bottom:0;left:0;z-index:10;width:67%;"></div>
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
                gap:0.35rem;
                align-items:center;">

                <div class="skill-icon" style="width:2rem; height:2rem;">
                    <a href="https://www.python.org/" target="_blank">
                        <svg style="object-fit:contain;width:100%;height:100%;display:block;" version="1.1" x="0px" y="0px" viewBox="0.21 -0.077 110 110" enable-background="new 0.21 -0.077 110 110" xml:space="preserve"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="63.8159" y1="56.6829" x2="118.4934" y2="1.8225" gradientTransform="matrix(1 0 0 -1 -53.2974 66.4321)"> <stop offset="0" style="stop-color:#387EB8"/> <stop offset="1" style="stop-color:#366994"/></linearGradient><path fill="url(#SVGID_1_)" d="M55.023-0.077c-25.971,0-26.25,10.081-26.25,12.156c0,3.148,0,12.594,0,12.594h26.75v3.781 c0,0-27.852,0-37.375,0c-7.949,0-17.938,4.833-17.938,26.25c0,19.673,7.792,27.281,15.656,27.281c2.335,0,9.344,0,9.344,0 s0-9.765,0-13.125c0-5.491,2.721-15.656,15.406-15.656c15.91,0,19.971,0,26.531,0c3.902,0,14.906-1.696,14.906-14.406 c0-13.452,0-17.89,0-24.219C82.054,11.426,81.515-0.077,55.023-0.077z M40.273,8.392c2.662,0,4.813,2.15,4.813,4.813 c0,2.661-2.151,4.813-4.813,4.813s-4.813-2.151-4.813-4.813C35.46,10.542,37.611,8.392,40.273,8.392z"/><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="97.0444" y1="21.6321" x2="155.6665" y2="-34.5308" gradientTransform="matrix(1 0 0 -1 -53.2974 66.4321)"> <stop offset="0" style="stop-color:#FFE052"/> <stop offset="1" style="stop-color:#FFC331"/></linearGradient><path fill="url(#SVGID_2_)" d="M55.397,109.923c25.959,0,26.282-10.271,26.282-12.156c0-3.148,0-12.594,0-12.594H54.897v-3.781 c0,0,28.032,0,37.375,0c8.009,0,17.938-4.954,17.938-26.25c0-23.322-10.538-27.281-15.656-27.281c-2.336,0-9.344,0-9.344,0 s0,10.216,0,13.125c0,5.491-2.631,15.656-15.406,15.656c-15.91,0-19.476,0-26.532,0c-3.892,0-14.906,1.896-14.906,14.406 c0,14.475,0,18.265,0,24.219C28.366,100.497,31.562,109.923,55.397,109.923z M70.148,101.454c-2.662,0-4.813-2.151-4.813-4.813 s2.15-4.813,4.813-4.813c2.661,0,4.813,2.151,4.813,4.813S72.809,101.454,70.148,101.454z"/></svg>
                    </a>

                </div>
                <div class="skill-info" style="flex:1;display:flex;flex-direction:column;justify-content:start;">
                    <div class="skill-header" style="
                        display:flex;
                        flex-direction:row;
                        justify-content:space-between;
                        font-size:0.80rem;">
                    <h3 class="skill-name" style="font-weight:600;color:rgb(54, 54, 54); margin-bottom:0.5rem;">Python</h3>
                    <h3 class="skill-years" style="font-weight:600;color:rgb(54, 54, 54); margin-bottom:0.5rem;">1 yr</h3>
                    </div>
                    <div class="skill-bar" style="position:relative;height:0.5rem;width:100%;">
                    <div class="skill-bar-bg" style="background-color: #79c9c9; height:100%;border-radius:4px;position:relative;z-index:0;width:100%;"></div>
                    <div class="skill-bar-fg" style="background-color: rgb(54, 54, 54); height:100%;border-radius:4px;position:absolute;bottom:0;left:0;z-index:10;width:33%;"></div>
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
                gap:0.35rem;
                align-items:center;">

                <div class="skill-icon" style="width:2rem;height:2rem;">
                    <a href="https://cplusplus.com/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 306 344.35" enable-background="new 0 0 306 344.35" xml:space="preserve">
                        <path fill="#00599C" d="M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175  L302.107,258.262z"/>
                        <path fill="#004482" d="M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263  c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"/>
                        <path fill="#659AD2" d="M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0  L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"/>
                        <g>
                            <path fill="#FFFFFF" d="M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968   l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51   c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"/>
                        </g>
                        <g>
                            <polygon fill="#FFFFFF" points="255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508    221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841  "/>
                        </g>
                        <g>
                            <polygon fill="#FFFFFF" points="297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508    263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841  "/>
                        </g>
                        </svg>
                    </a>
                </div>
                <div class="skill-info" style="flex:1;display:flex;flex-direction:column;justify-content:start;">
                    <div class="skill-header" style="
                        display:flex;
                        flex-direction:row;
                        justify-content:space-between;
                        font-size:0.80rem;">
                    <h3 class="skill-name" style="font-weight:600;color:rgb(54, 54, 54); margin-bottom:0.5rem;">C++</h3>
                    <h3 class="skill-years" style="font-weight:600;color:rgb(54, 54, 54); margin-bottom:0.5rem;">1 yr</h3>
                    </div>
                    <div class="skill-bar" style="position:relative;height:0.5rem;width:100%;">
                    <div class="skill-bar-bg" style="background-color: #79c9c9; height:100%;border-radius:4px;position:relative;z-index:0;width:100%;"></div>
                    <div class="skill-bar-fg" style="background-color: rgb(54, 54, 54); height:100%;border-radius:4px;position:absolute;bottom:0;left:0;z-index:10;width:33%;"></div>
                    </div>
            </div>

            </div>
            </div>
        </div>
    </div>
    `;