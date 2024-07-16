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




// ------------------------------- dark mode

const buttonDarkMode = document.querySelector('.i-button.dm-button');
let bodyHTML = document.querySelector("body");

let dark = false;

buttonDarkMode.addEventListener("click", (event) => {
    event.preventDefault();
    bodyHTML.classList.add(`${dark ? "" : "dark-mode"}`);
    // bodyHTML.style.backgroundColor = dark ? "white" : "#3D3D3D";
    dark = !dark;
});
