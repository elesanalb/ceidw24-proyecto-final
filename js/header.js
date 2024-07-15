//crear un header común para todas las páginas con un js
const header = document.querySelector("header");
const menu = document.querySelector(".menu");
const footer = document.querySelector("footer");
let menuSelect = ["home", "projects", "gallery"];
let titleList = ["home", "My projects", "My collections"];
let headerTitle = "";


for(let i = 0; i < menuSelect.length; i++){
    if(header.classList.contains(menuSelect[i])){
        headerTitle = titleList[i];
    }
}

const headerStructure = `
    <div class="frame-1"></div>
    <div class="header-title">
        <div>
            <a href="index.html#"><img class="logo" src="img/logo-bg-white.svg" alt="logo"></a>
            <h2>lena qiao</h2>
        </div>
        <h1>${headerTitle}</h1>
    </div>
`

const menuStructure = `
    <li class="${header.classList.contains("home") ? "select" : ""}"><a href="index.html#">home</a></li>
    <li><a href="index.html#about">about</a></li>
    <li><a href="index.html#contact">contact</a></li>
    <li class="${header.classList.contains("projects") ? "select" : ""} dropdown"><a href="projects.html#">projects</a>
        <div class="dropdown-menu">
            <a href="projects.html#design">design</a>
            <a href="projects.html#web">UX/UI & web</a>
            <a href="projects.html#art">art</a>
            <a href="projects.html#other-projects">other</a>
            
        </div>
    </li>
    <li class="${header.classList.contains("gallery") ? "select" : ""} "><a href="gallery.html#">gallery</a>
    </li>
`

const footerStructure = `
    <div class="footer-menu">
        <div class="sum-menu">
            <div>
                <a href="index.html#"><h4>home</h4></a>
                <a href="index.html#about"><h4>about</h4></a>
                <a href="index.html#contact"><h4>contact</h4></a>
            </div>
            <div>
                <a href="projects.html#"><h4>projects</h4></a>
                <a href="projects.html#design">design</a>
                <a href="projects.html#web">web & UX/UI</a>
                <a href="projects.html#art">art</a>
                <a href="projects.html#other-projects">other</a>
            </div>
            <div>
                <a href="gallery.html#"><h4>gallery</h4></a>
                <a href="gallery.html#">the yellow collection</a>
                <a href="gallery.html#">the flower collection</a>
                <a href="gallery.html#art-section">my art gallery</a>
                <a href="gallery.html#sketch-section">fashion design</a>
                <a href="gallery.html#sketch-section">my sketchbook</a>
            </div>
        </div>

        <div class="social-media">
            <a href="index.html"><img class="logo" src="img/logo-white.svg" alt="logo">
            <h4 class="name">lena qiao</h4>
            <div>
                <a href="https://www.linkedin.com/in/elena-sanchez-alberca/" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-linkedin fa-xl"></i></a>
                <a href="https://www.instagram.com/lenaqiaosana/" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-instagram fa-xl"></i></a>
                <a href="mailto:elesanalb@gmail.com" target="_blank" rel="noreferrer noopener"><i class="fa-solid fa-envelope fa-xl"></i></a>
            </div>
        </div>    
    </div>

    <div class="frame-4"></div>
    <div class="footer-bg"></div>

`

header.innerHTML = headerStructure;
menu.innerHTML = menuStructure;
footer.innerHTML = footerStructure;




const buttonDarkMode = document.querySelector('.i-button.dark-mode');
let bodyHTML = document.querySelector("body");

buttonDarkMode.addEventListener("mouseover", () => {
    bodyHTML.style.backgroundColor = "#3D3D3D";
});
buttonDarkMode.addEventListener("mouseout", () => {
    bodyHTML.style.backgroundColor = "white";
});