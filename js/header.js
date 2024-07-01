let header = document.querySelector(".header");

let headerStructure = `
    <ul class="menu">
        <li><a href="index.html" class="">home</a></li>
        <li><a href="projects.html" class="">projects</a></li>
        <li><a href="" class="">gallery</a></li>
        <li><a href="" class="">about</a></li>
        <li><a href="" class="">contact</a></li>
    </ul>
`
let nav = document.createElement("nav");

nav.innerHTML = headerStructure;

header.appendChild(nav);