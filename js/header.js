//crear un header común para todas las páginas con un js
const header = document.querySelector(".header");

const headerStructure = `
    <div class="header-frame-1"></div> 
    <div class="header-img">
        <div class="header-frame-2"></div>
        <h1>home</h1>
    </div>
    <ul class="menu">
        <li class="select-home"><a href="index.html">home</a></li>
        <li><a href="projects.html" class="">projects</a></li>
        <li><a href="" class="">gallery</a></li>
        <li><a href="" class="">about</a></li>
        <li><a href="" class="">contact</a></li>
    </ul>
`

header.innerHTML = headerStructure;


/*IDEA

al selecionar una de las opciones del menu, esa opción queda marcada con un estilo distinto para indicar en qué página se encuentra en el momento

crear una clase "select" en cada opcion del menu al hacer click encima de ella (sin guardarse el cambio al elegir otra distinta)
*/

