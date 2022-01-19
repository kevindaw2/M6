
//hasta que no se cargue html no se ejecuta lo siguiente
window.addEventListener("load", function() {
    class Telefono {
        constructor(marca) {
            this.marca = marca; 
        }

        anuncio() {
            return "Telefono de " + this.marca; 
        }
    }

    class Modelo extends Telefono {
        constructor(marca, modelo) {
            super(marca);
            this.precio = 150; 
            this.modelo = modelo;
        }

        anuncioCompleto() {
            return this.anuncio() + ": el modelo " + this.modelo + " precio de " + this.precio; 
        }
    }

    let telefono = new Modelo("Google", "Pixel");
    mensaje.innerHTML = telefono.anuncioCompleto(); 

});