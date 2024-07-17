// ---------------------------------------- menu

//lista de las opciones de menú
let menuList = ["home", "about", "contact", "projects", "gallery"];

//lista de los títulos de los header
let titleList = ["home", "", "", "my projects", "my collections"];

let headerTitle = document.querySelector('.header-title h1');
const menuSelect = document.querySelectorAll(".menu-select");
const dropdowSelect = document.querySelectorAll('.dropdown-menu a');



menuList.forEach((menuList, index) => {
    
    if(header.classList.contains(menuList)){

        //cambiar el estilo del menú al entrar en la página correspondiente
        menuSelect[index].classList.add("select");

        //cambiar el título de los headers dependiendo de la página en la que esté
        headerTitle.innerText = titleList[index];          
    }


    // botones para cambiar el estilo del menú navegando por home

    menuSelect[1].addEventListener("click", () => {
        menuSelect[index].classList.remove("select");
        menuSelect[1].classList.add("select");
    });
    menuSelect[2].addEventListener("click", () => {
        menuSelect[index].classList.remove("select");
        menuSelect[2].classList.add("select");    
    });

    menuSelect[0].addEventListener("click", () => {
        menuSelect[1].classList.remove("select");
        menuSelect[2].classList.remove("select");
        menuSelect[0].classList.add("select");
    });

});






/*


// --------------------------------------- menu scroll

// const home = document.querySelector("#home");
const about = document.querySelector("#about");
// const contact = document.querySelector("#contact");
const options = { threshold: 0.25 };

const callback = (entry) => {
    if(entry.isIntersecting){
        console.log("elemento visible");
    }
}

const observer = new IntersectionObserver(callback, options);

observer.observe(about);


console.log(about);




*/








// ----------------------------------------- icon size
// los iconos, al ser de font-awesome, no pueden ser editados manualmente en el css, si no que los tamaños los determinan clases dadas por font-awesome

const buttonToStart = document.querySelector('.i-button.to-start');
const buttonDarkMode = document.querySelector('.i-button.dm-button');
const buttonArrowRight = document.querySelectorAll("fa-arrow-right");
const viewport = window.innerWidth;


// 1580 | arrow up fa-xl | dark mode fa-lg

// console.log(viewport);

if(viewport > 1580){
    buttonToStart.classList.add("fa-xl");
    buttonDarkMode.classList.add("fa-lg");
    buttonArrowRight.classList.add("fa-xl");
}

if(1241 < viewport < 1580){
    buttonToStart.classList.add("fa-lg");
    buttonDarkMode.classList.add("fa-ml");
    buttonArrowRight.classList.add("fa-xl");
}
if(721 < viewport < 1241){
    buttonToStart.classList.add("fa-ml");
    buttonDarkMode.classList.add("fa-sm");
    buttonArrowRight.classList.add("fa-lg");
}



// ------------------------------- dark mode

let bodyHTML = document.querySelector("body");

let dark = false;

buttonDarkMode.addEventListener("click", (event) => {
    event.preventDefault();
    bodyHTML.classList.add(`${dark ? "" : "dark-mode"}`);
    // bodyHTML.style.backgroundColor = dark ? "white" : "#3D3D3D";
    dark = !dark;
});





