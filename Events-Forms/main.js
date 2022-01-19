function showTime() { 
    var demo = document.getElementById("demo");
    demo.style.color = "silver";
    demo.innerHTML = new Date(); 
}

function obtenerId() {
    //obtiene el id de cada section
}

function mostrarSection(id) {
    var section = document.getElementById(id); 
    section.obtenerId
}

function ressalta(theEvent) { //captutra el evento, compatible en todos los navegadores
    var events = theEvent || window.event; 
    switch(events.type) {
        case 'mouseover':
            this.style.borderColor = 'black';
            break;
        case 'mouseout':
            this.style.borderColor = 'silver'; 
            break;
    }
}

function mostrarInfo(theEvent) {
    var events = theEvent || window.event; 
    var corX = events.clientX; 
    var corY = events.clientY; 
    alert("X: " + corX + " Y: " + corY); 
}

window.onclick = mostrarInfo(); 

window.onload = function () { //al cargar la ventana
    var section = document.getElementById("section");
    section.onmouseover = ressalta; 
    section.onmouseout = ressalta; 
}

window.onkeydown = mostrarTecla; //evento de la ventana
window.onkeypress = mostrarTecla; 
window.onkeyup = mostrarTecla; 

function hideContent() {
    var section = document.getElementById("section");
    section.style.display = "none"; 
}

function showContent() {
    var section = document.getElementById("section");
    section.style.display = "block"; 
}

function mostrarTecla(tecla) {
    var e = tecla || window.event; 
    mostrar(e.charCode); 
}

function mostrar (charCode) {
    let cadena = "Charcode: " + String.fromCharCode(charCode); 
    let tecla = document.getElementById("tecla");
    tecla.innerHTML = cadena; 
}

//hasta que no se cargue el documento HTML... 
//document.addEventListener("DOMContentLoaded", load, false);

window.addEventListener("load", function() {

    let button = document.getElementById("button"); 
    let text = document.getElementById("text");

    button.addEventListener("click", function() {
        text.innerHTML = "clicked!"; 
    }); 
    
    text.addEventListener("mouseover", function() {
        text.style.color="red"; 
        text.innerHTML = "text mouse";  
    });
    
    text.addEventListener("mouseout", function() {
        text.style.color="black"; 
        text.innerHTML = "text"; 
    });  
});