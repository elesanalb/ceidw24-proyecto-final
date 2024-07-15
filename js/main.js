// ---------------------------------------- menu
let menuList = ["home", "about", "contact", "projects", "gallery"];
let titleList = ["home", "", "", "my projects", "my collections"];
let headerTitle = document.querySelector('.header-title h1');
const menuSelect = document.querySelectorAll(".menu-select");
const dropdowSelect = document.querySelectorAll('.dropdown-menu a');



menuList.forEach((menuList, index) => {
    if(header.classList.contains(menuList)){
        menuSelect[index].classList.add("select");
        headerTitle.innerText = titleList[index];          
    }


});

/*
let sel = true;
menuSelect[1].addEventListener("click", () => {
    let aboutSelect = `${sel ? "" : "select"}`;
    menuSelect[1].classList.add(aboutSelect);
    sel = !sel;
}); 



const about = document.getElementById("about");
const contact = document.getElementById("contact");
let visibility = null;

const obsProp = { threshold: 0.25 };

const observer = new IntersectionObserver((entry) => {
    visibility = entry.isIntersecting;
}, obsProp);

observer.observe(about);






console.log(menuSelect[1]);

*/



// ------------------------------- dark mode

const buttonDarkMode = document.querySelector('.i-button.dark-mode');
let bodyHTML = document.querySelector("body");

let dark = false;

buttonDarkMode.addEventListener("click", (event) => {
    event.preventDefault();
    bodyHTML.style.backgroundColor = dark ? "white" : "#3D3D3D";
    dark = !dark;
});
