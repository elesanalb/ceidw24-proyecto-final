// ---------------------------- about
// cambiar estructura html para dos tamaños distintos

const sectionAbout = document.querySelector('div.section');

if(viewport > 1241){
    sectionAbout.innerHTML = `
        <div class="portrait"></div>
        <div class="ab-descript">
            <h4>elena sánchez aka <span>lena qiao</span></h4>
            <p>I'm a <span class="highlight">digital and UX/UI designer</span>, finishing my Master's degree on <span class="highlight">Web Design and Development</span>, who's also passionate about illustration. <span class="highlight-2">Perseverant</span> throughout my studies, so that I could downpour what I've learnt at work, and make the most out of the experiences, acquiring and absorbing knowledge as much as I made it was possible.</p>
            <p><span class="highlight">Creativity</span> is where I really shine. I've honed my artistic skills through <span class="highlight-2">self-teaching</span> and expressing myself through drawing. Besides <span class="highlight-2">Spanish</span>, I'm fluent in <span class="highlight-2">English</span> and even studied <span class="highlight-2">Portuguese</span> and <span class="highlight-2">Korean</span> along the way.</p>
            
            <ul class="skill-list">
            </ul>
        </div>
    `    
}


if(viewport < 1241){
   sectionAbout.innerHTML = `
        <div class="ab-descript">
            <h4>elena sánchez aka <span>lena qiao</span></h4>
            <p>
            <img class="portrait" src="img/about-portrait.png">
            I'm a <span class="highlight">digital and UX/UI designer</span>, finishing my Master's degree on <span class="highlight">Web Design and Development</span>, who's also passionate about illustration. <span class="highlight-2">Perseverant</span> throughout my studies, so that I could downpour what I've learnt at work, and make the most out of the experiences, acquiring and absorbing knowledge as much as I made it was possible.</p>
            <p><span class="highlight">Creativity</span> is where I really shine. I've honed my artistic skills through <span class="highlight-2">self-teaching</span> and expressing myself through drawing. Besides <span class="highlight-2">Spanish</span>, I'm fluent in <span class="highlight-2">English</span> and even studied <span class="highlight-2">Portuguese</span> and <span class="highlight-2">Korean</span> along the way.</p>
            
            <ul class="skill-list">
            </ul>
        </div>
   `
}



// Intentando pensar en uso de este porfolio a futuro, quería tener una lista de puntos importantes que un futuro pudiera cambiar, por eso lo hice así.
const ul = document.querySelector(".skill-list");
// console.log(ul);

ul.classList.add("skill-list");

const experienceList = [
    "Degree in Digital & UX/UI Design", 
    "Master's Degree in Web Design & Development", 
    "3D Artist & Designer at Prexez", 
    "Content Creator at World Expo Korea", 
    "Freelance artist"
];


experienceList.forEach((experienceList) => {
    let li = document.createElement("li");
    li.classList.add("skill-element");
    ul.appendChild(li);
    li.innerText = experienceList;
});








// --------------------------- contact

const contactForm = document.querySelector("form");
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const subjectInput = document.querySelectorAll('input[type="radio"]');
const messageInput = document.querySelector("textarea");

const nameRequired = document.querySelector(".name-required");
const emailRequired = document.querySelector(".email-required");
const subjectRequired = document.querySelector(".subject-required");
const wordLimit = document.querySelector(".word-limit");
const chrCount = document.querySelector(".chr-count");


// Esto inicialmente era para validar en el formulario los caracteres no permitidos
/*
let emailAt = "!";
let scString = `1234567890¿?¡!@#$€%^&()[]{}+=*:;"·¬<>_|`;
let specialChrs = scString.split("");
*/


// Quería cambiar el estilo del input name sin cambiar el placeholder. Not(::placeholder) tampoco me funcionó
// Si no hay ningún caracter (mientras el placeholder es visible), no se aplica

nameInput.addEventListener("input", () => {
    nameInput.style.textTransform = nameInput.value == "" ? "" : "capitalize";
});



//validación del formulario

contactForm.addEventListener("submit", (event) => {

    
    
    if(nameInput.value.trim() == ""){
        nameRequired.innerText = "This field is required";
        event.preventDefault();

    }else if(nameInput.value.split(" ").length > 3){
        nameRequired.innerText = "Must not contain more than 3";
        event.preventDefault();

    }
    /*
    else if(nameInput.value.indexOf(specialChrs)){
        nameRequired.innerText = "Must not contain special characters";
        event.preventDefault();

    }
    */
    else{
        nameRequired.innerText = "";
    }
    
    

    if(emailInput.value.trim() == ""){
        emailRequired.innerText = "This field is required";
        event.preventDefault();

    }
    /*
    else if(emailInput.value.indexOf("@") == false ){
        emailRequired.innerText = "Please enter a valid email address";
        event.preventDefault();
        
    }
    */
    else{
        emailRequired.innerText = "";
    }



    if(subjectInput[0].checked == false && subjectInput[1].checked == false){
        subjectRequired.innerText = "Must choose one";
        event.preventDefault();

    }else{
        subjectRequired.innerText = "";
    }



    if(messageInput.value.trim() == ""){
        wordLimit.innerText = "This field is required";
        event.preventDefault();

    }else{
        wordLimit.innerText = "";
    }
});



messageInput.addEventListener("keyup", () => {
    chrCount.innerText = messageInput.value.split("").length;
    chrCount.style.color = "#3D3D3D";

    if(messageInput.value.split("").length == 0){
        chrCount.style.color = "#EF3581";
    }
    if(messageInput.value.split("").length > 399){
        chrCount.style.color = "#EF3581";
    }
});