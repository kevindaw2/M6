class Rellotge {

  times = new Array();
  functions = new Array();
  funcionsExecutadas = new Array();

  constructor(time, isStarted) {
    this.time = time;
    this.isStarted = isStarted;
  }

  whatTimeIs() {
    return this.time;
  }

  getTimer() {
    //cada segundo se incrementa en 1
    if (this.isStarted) {
      this.time += 1;
    }
    return this.time;
  }

  stopTimer() {
    return (this.isStarted = false);
  }

  restartTimer() {
    return (this.isStarted = true);
  }

  initTimer() {
    this.time = 0;
    this.stopTimer();
  }

  execute() {

    /*
    cuando se ejecute la function se inicializa como true, 
    una vez ejectuada pasa a false
    */

    seconds = this.getTimer(); //segons actuals

    for (i in this.times) {
        if(this.times[i] <= segons && !this.funcionsExecutadas[i]) {
            this.functions[i](); //executa la funcio dintre del array
            this.funcionsExecutadas[i] = true;
        }
    }

  }

  setFunctionOnTime(_time, _function) {
    
    /*
    Emmagatzema una funció per a executar-la com a molt d'hora 
    en el numero de segons que indiqui time. 
    */

    this.times.push(_time);
    this.functions.push(_function);
  }
  
}

class Yahoo {

  constructor(numero){
    this.numero = numero; 
  }

  seguent (numero) {

    switch(numero){

      case "desconegut":
        alert(numero);
        break;
      case "cero":
        alert("un");
        break;
      default:
        alert("molts");
        break;
    }
  }

  suma () {

    switch (arguments.length) {
      case numero:
        break; 
    }
  }

}