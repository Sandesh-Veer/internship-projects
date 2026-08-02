gsap.registerPlugin(ScrollTrigger);


const languages = [
    "पवन",
    "પવન",
    "ಪವನ್",
    "பவன்",
    "പവൻ",
    "ਪਵਨ",
    "পবন",
    "风"
];

const language = document.getElementById("language");
const nameElement = document.getElementById("name");

let index = 0;

setInterval(() => {
    language.classList.add("fade");

    setTimeout(() => {
        index = (index + 1) % languages.length;
        language.textContent = languages[index];
        language.classList.remove("fade");
    }, 350);

}, 2000);

// ================= CLOCK =================

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();

    const ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12;
    if (hours === 0) hours = 12;

    document.getElementById("time").textContent =
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

    document.getElementById("ampm").textContent = ampm;

    const months = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    document.getElementById("date").textContent =
        `${months[now.getMonth()]} ${now.getDate()}`;
}

updateClock();
setInterval(updateClock, 1000);


// ================= LETTER EFFECT =================

const letters = document.querySelectorAll(".letter");
const hoverLogo = document.getElementById("hoverLogo");

const colors = [
    "#0a2fffe4",
    "#e3ff59",
    "#06B6D4", // Cyan 
    "#cd45ff",
    "#ff3636f1"
];

letters.forEach((letter, index) => {

    letter.addEventListener("mouseenter", () => {
        letter.style.color = colors[index];
        letter.style.transform = "translateY(-8px) scale(1.08)";

        const prev = letter.previousElementSibling;
        const next = letter.nextElementSibling;

        // if (prev) prev.style.marginRight = "18px";
        // if (next) next.style.marginLeft = "18px";
        const letterRect = letter.getBoundingClientRect();
        const nameRect = nameElement.getBoundingClientRect();

        hoverLogo.style.left =
            (letterRect.left - nameRect.left + letterRect.width / 2) + "px";

        hoverLogo.style.top =
            (letterRect.top - nameRect.top - 12) + "px";

        hoverLogo.style.opacity = "1";

        hoverLogo.style.color = colors[index];
    });

    letter.addEventListener("mouseleave", () => {
        hoverLogo.style.opacity = "0";
        letter.style.color = "#111";
        letter.style.transform = "translateY(0) scale(1)";

        const prev = letter.previousElementSibling;
        const next = letter.nextElementSibling;
    });

});

        //--------SPREAD--------
nameElement.addEventListener("mouseenter", () => {
    nameElement.style.letterSpacing = "-5px";
});

nameElement.addEventListener("mouseleave", () => {
    nameElement.style.letterSpacing = "-11px";
});

// ================= WORD MOVEMENT =================

let mouseX = 0;
let mouseY = 0;

let currentRX = 0;
let currentRY = 0;

let currentMX = 0;
let currentMY = 0;

let targetRX = 0;
let targetRY = 0;

let targetMX = 0;
let targetMY = 0;

let hovering = false;

nameElement.addEventListener("mouseenter", () => {
    hovering = true;
});

nameElement.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});

nameElement.addEventListener("mouseleave", () => {
nameElement.classList.remove("shine");
    hovering = false;

});

function animateHero() {

    const rect = nameElement.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    if (hovering) {

        targetRY = (mouseX - centerX) / 18;
        targetRX = -(mouseY - centerY) / 18;

        targetMX = (mouseX - centerX) / 40;
        targetMY = (mouseY - centerY) / 40;

    } else {

        targetRX = 0;
        targetRY = 0;

        targetMX = 0;
        targetMY = 0;

    }

    // Smooth interpolation
    currentRX += (targetRX - currentRX) * 0.14;
    currentRY += (targetRY - currentRY) * 0.14;

    currentMX += (targetMX - currentMX) * 0.12;
    currentMY += (targetMY - currentMY) * 0.12;

    nameElement.style.transform = `
perspective(1400px)
translate(${currentMX}px,${currentMY}px)
rotateX(${currentRX}deg)
rotateY(${currentRY}deg)
scale(1.015)
`;

    language.style.transform = `
        perspective(1000px)
        translate(${currentMX}px, ${currentMY}px)
        rotateX(${currentRX * 1.2}deg)
        rotateY(${currentRY * 1.2}deg)
    `;

    requestAnimationFrame(animateHero);

}

animateHero();

const musicBtn = document.getElementById("musicBtn");
const musicBox = document.querySelector(".music-box");
const song = document.getElementById("favSong");

musicBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    if(song.paused){

        song.play();
        musicBox.classList.add("playing");

    }else{

        song.pause();
        musicBox.classList.remove("playing");

    }

});

song.addEventListener("ended",()=>{

    musicBox.classList.remove("playing");

});

// ================= RIBBON ANIMATION =================

const waveText = document.getElementById("waveText");

let offset = 0;

function moveRibbon(){

    offset += 0.01;      // Speed (increase for faster)

    if(offset >= 100){
        offset = 0;
    }

    waveText.setAttribute("startOffset", offset + "%");

    requestAnimationFrame(moveRibbon);

}

moveRibbon();

//  ================= CRAFT =================
const craft = {
    name: "Pawan",
    role: "Frontend Developer",
    stack: ["HTML", "CSS", "JavaScript", "React"],
    learning: "GSAP",
    goal: "Build memorable interfaces",
};

// Expose craft object to global scope for non-module usage
window.craft = craft;

const terminal = document.querySelector(".terminal");
const themeBtn = document.getElementById("themeBtn");

let light = false;

themeBtn.addEventListener("click", () => {

    light = !light;

    terminal.classList.toggle("light");

    if(light){

        themeBtn.innerHTML =
        '<i data-lucide="moon-star"></i>';

    }else{

        themeBtn.innerHTML =
        '<i data-lucide="sun-medium"></i>';

    }

    lucide.createIcons();

});

/*================ SKILLS ================*/

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({

    scrollTrigger:{
        trigger:".toolbox",
        start:"top 70%",
        once:true
    }

});

// Box comes in
tl.from(".toolbox-box",{

    y:60,
    opacity:0,
    duration:.8,
    ease:"power3.out"

});

// Tiny shake
tl.to(".toolbox-box",{
y:4,
    x:-3,
    duration:.08,
    repeat:5,
    yoyo:true

})
.to(".toolbox-box",{

    y:0,
    duration:.08

});

// HTML
tl.to(".html",{

    x:70,
    y:-175,

    opacity:1,
    scale:1,

    rotation:15,
ease:"back.out(2)",
    duration:.45

});

// CSS
tl.to(".css",{

    x:-145,
    y:-150,

    opacity:1,
    scale:1,

    rotation:-6,

    duration:.45

},"-=0.32");

// JS
tl.to(".js",{

    x:-115,
    y:-90,

    opacity:1,
    scale:1,

    rotation:-10,

    duration:.45

},"-=0.32");

// React
tl.to(".react",{

    x:140,
    y:-90,

    opacity:1,
    scale:1,

    rotation:12,

    duration:.45

},"-=0.32");

// Git
tl.to(".git",{

    x:133,
    y:-155,

    opacity:1,
    scale:1,

    rotation:-10,

    duration:.45

},"-=0.32");

// VS Code
tl.to(".vscode",{

    x:30,
    y:-110,
ease:"back.out(2)",
    opacity:1,
    scale:1,

    rotation:5,

    duration:.45

},"-=0.32");

// Node
tl.to(".nodejs",{

    x:-40,
    y:-170,

    opacity:1,
    scale:1,

    rotation:7,

    duration:.45

},"-=0.32");

//================= CONTACT ================
gsap.registerPlugin(ScrollTrigger);

gsap.from(".sticky-note",{

    scrollTrigger:{
        trigger:".sticky-note",
        start:"top 80%",
        once:true
    },

    y:-120,

    rotation:-5,

    opacity:0,

    duration:1,

    ease:"bounce.out"

});