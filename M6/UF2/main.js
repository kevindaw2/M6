window.addEventListener(
  "load",
  function () {
    class Vehiculo {
      constructor(matricula, dias_alquiler, ocupantes) {
        this.matricula = matricula;
        this.dias_alquiler = dias_alquiler;
        this.ocupantes = ocupantes;
      }

      mostrarDatos() {
        return (
          "Vehiculo con matricula: " +
          this.matricula +
          " con capacidad para " +
          this.ocupantes
        );
      }
    }

    class Coche extends Vehiculo {
      constructor(matricula, dias_alquiler, ocupantes, precio = 50) {
        super(matricula, dias_alquiler, ocupantes);
        this.precio = precio * dias_alquiler;
      }

      datos() {
        return (
          super.mostrarDatos() + " por un precio por dia de " + this.precio
        );
      }
    }

    class Furgoneta extends Vehiculo {
      constructor(matricula, dias_alquiler, ocupantes = 10, precio = 50) {
        super(matricula, dias_alquiler, ocupantes);
        this.precio = precio * dias_alquiler;
      }

      datos() {
        return (
          super.mostrarDatos() + " por un precio por dia de " + this.precio
        );
      }
    }

    class Text {
      constructor(text = "Hola") {
        this.text = text;
      }

      afegir(text) {
        return this.text + text;
      }

      contarVocals() {
        var regex = "[aeiou]";
        var count = 0;

        for (var i = 0; i < this.text.length; i++) {
          var c = this.text.charAt(i);

          if (c.match(regex)) {
            count++;
          }
        }
        return "Número total de vocals: " + count;
      }

      mostrarText() {
        return this.text;
      }
    }

    //FIGURAS

    class Figura {
      constructor(color) {
        this.color = color;
      }

      info() {
        return this.color;
      }
    }

    class Cuadrado extends Figura {
      constructor(color, lado) {
        super(color);
        this.lado = lado;
      }

      calcularArea() {
        this.lado * this.lado;
      }

      info() {
        return super.info();
      }
    }

    class Rectangulo extends Figura {
      constructor(color, base, altura) {
        super(color);
        this.base = base;
        this.altura = altura;
      }

      calcularArea() {
        this.base * this.altura;
      }

      info() {
        return super.info();
      }
    }

    class Triangulo extends Figura {
      constructor(color, base, altura) {
        super(color);
        this.base = base;
        this.altura = altura;
      }

      todaInfo() {
        return (
          super.info() +
          "color: " +
          this.color +
          " base: " +
          this.base +
          " altura: " +
          this.altura +
          "area del padre: "
        );
      }
    }

    //PROFESORES

    class Persona {
      constructor(nom, cognoms, edad) {
        this.nom = nom;
        this.cognoms = cognoms;
        this.edad = edad;
      }

      dades() {
        return this.nom + this.cognoms + this.edad;
      }
    }

    class Profesor extends Persona {
      constructor(nom, cognoms, edad) {
        super(nom, cognoms, edad);
      }
    }

    class ProfesorFixe extends Persona {
      constructor(nom, cognoms, edad, id) {
        super(nom, cognoms, edad);
        this.id = id;
      }

      dades() {
        return super.dades() + this.id;
      }
    }

    class ProfesorInteri extends Persona {
      constructor(nom, cognoms, edad, data) {
        super(nom, cognoms, edad);
        this.data = data;
      }

      dades() {
        return super.dades + this.data;
      }
    }

    class ListaProfe {
      //contiene un array donde se almacenan todos los profes
      constructor(profe) {
        this.profe = profe;
      }

      cantidadProfes() {
        return "cantidad total de profesores: " + this.profe.length;
      }
      insertarProfe() {} //push en el array de profes
      obtenerProfe() {} //a partir de val obetener profe
      mostrarProfe() { //recorrer el array para mostrar todos los profes.
        return typeof(this.profe); 
      }
    }

    const profesor1 = new Profesor("Aurelio", "Geroge", "41");
    const profesor2 = new Profesor("Aureli", "Whashintong", "40");
    const profesor3 = new Profesor("Aure", "Bach", "43");

    const profesorIteri_1 = new ProfesorInteri(
      "Aurel",
      "Jeff",
      "40",
      "2021-10-08"
    );
    const profesorIteri_2 = new ProfesorInteri(
      "Lol",
      "Bezzos",
      "39",
      "2021-11-08"
    );
    const profesorIteri_3 = new ProfesorInteri(
      "Laurel",
      "Malin",
      "38",
      "2021-12-08"
    );

    const profeserFixe_1 = new ProfesorFixe("Bob", "Marley", "30", "1");
    const profeserFixe_2 = new ProfesorFixe("Bobby", "Barely", "31", "2");
    const profeserFixe_3 = new ProfesorFixe("Boba", "Moba", "33", "3");

    const listaprofes = new ListaProfe(
      new Array(
        profesor1,
        profesor2,
        profesor3,
        profesorIteri_1,
        profesorIteri_2,
        profesorIteri_3,
        profeserFixe_1,
        profeserFixe_2,
        profeserFixe_3
      )
    );

    console.log(listaprofes);
    profes.innerHTML = listaprofes.mostrarProfe(); 
    qprofes.innerHTML = listaprofes.cantidadProfes();

    //TEXT
    const txt = new Text();
    txt.contarVocals();
    text.innerHTML = txt.mostrarText();
    chars.innerHTML = txt.contarVocals();
    //chars.innerHTML = txt.afegir(':)');

    //VEHICULOS
    const coche = new Coche("1234LVP", 1, 5);
    const coche2 = new Coche("1245", 1, 5);
    const furgoneta = new Furgoneta("6289GCW", 1);

    const vehiculos = [coche, coche2, furgoneta]; //array de objetos

    coches.innerHTML = coche.datos();
    furgonetas.innerHTML = furgoneta.datos();

    //iterar con un bucle el array de objetos y mostrarlos en la busqueda

    const form = document.getElementById("form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = document.getElementById("input");
      var val = input.value; //coches camiones furgonetas

      info.innerHTML = val;

      if (val.includes("coches")) {
        //guardar los coches en una lista e iterar para mostrar en el innerHTML
        info.innerHTML = coche.datos();
      } else {
        info.innerHTML = "No se han encontrado resultados";
      }

      input.value = ""; //reset val to empty
    });
  },
  true
);
