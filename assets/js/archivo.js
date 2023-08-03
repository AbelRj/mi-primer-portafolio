const iconobtnmenu = document.querySelector('.icon-r');
const linea1 = document.getElementById('barra1');
const linea2 = document.getElementById('barra2');
const linea3 = document.getElementById('barra3');
const menu = document.querySelector('.contenedor-menu');
let listElements = document.querySelectorAll('a');

iconobtnmenu.addEventListener("click",function(){
    linea1.classList.toggle('giro1');
    linea2.classList.toggle('desaparece');
    linea3.classList.toggle('giro2');
    menu.classList.toggle('menu-abierto');
    
});
listElements.forEach(function (element) {
  element.addEventListener("click", function () {
    menu.classList.remove('menu-abierto');
    linea1.classList.remove('giro1');
    linea2.classList.remove('desaparece');
    linea3.classList.remove('giro2');
  });
});
const btnCV = document.querySelector('.Banner-contenedor-btn-cv');
btnCV.addEventListener('click', function() {
  window.open('/assets/cv/cv2023.pdf', '_blank');
});

//EFECTO SECCION HABILIDADES
// Detectar el desplazamiento y aplicar la animación de la barra de habilidades
window.addEventListener("scroll", efectoHabilidades);


// Función que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var seccionHabilidades = document.querySelector("#habilidades");
    var distanciaSeccionHabilidades = window.innerHeight - seccionHabilidades.getBoundingClientRect().top;
    
    if (distanciaSeccionHabilidades >= 300) {
      document.getElementById("html-css").classList.add("barra-progreso-html-css");
      document.getElementById("js").classList.add("barra-progreso-js");
      document.getElementById("php").classList.add("barra-progreso-php");
      document.getElementById("react").classList.add("barra-progreso-react");
      document.getElementById("bootstrap").classList.add("barra-progreso-bootstrap");
      document.getElementById("sql").classList.add("barra-progreso-sql");
      document.getElementById("git").classList.add("barra-progreso-git");
    } else {
      document.getElementById("html-css").classList.remove("barra-progreso-html-css");
      document.getElementById("js").classList.remove("barra-progreso-js");
      document.getElementById("php").classList.remove("barra-progreso-php");
      document.getElementById("react").classList.remove("barra-progreso-react");
      document.getElementById("bootstrap").classList.remove("barra-progreso-bootstrap");
      document.getElementById("sql").classList.remove("barra-progreso-sql");
      document.getElementById("git").classList.remove("barra-progreso-git");
    }
  }



  // Scroll up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}


///

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}




