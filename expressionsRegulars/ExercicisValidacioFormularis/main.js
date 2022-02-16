
//REGEX_EXPRESSIONS-----------------------------
const regexExp_nom = /[A-Za-z]/; 
const regexExp_cognom = /[A-za]/;
const regexExp_telef = /[0-9]/;
const regexExp_email = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/;  
//----------------------------------------------

const form = document.getElementById('form');
const errorMessage = document.getElementById('error');  
const errorBox = document.createElement('div');
const nom = document.getElementById('nom'); 

errorBox.className = "warning";
var errorTimeout;  

function logSubmit(event) {
    var nom = event.charCode; 
    if(regexExp_nom.test(nom) == false ) {
        displayError("Nom no valid " + charCode);
        event.preventDefault(); 
        return false;  
    } else {
        return true; 
    }
}

function checkInput(event) {
    var nom = event.charCode; 
    if(regexExp_cognom.test(nom) == false) {
        displayError("Congom no valid" + charCode); 
        event.preventDefault();
        return false; 
    } else {
        return true; 
    }
}

function displayError(msg) {
    errorBox.innerHTML = msg; 
    if(document.body.contains(errorBox)) {
        window.clearTimeout(errorTimeout); 
    } else {
        error.parentNode.insertBefore(errorBox, errorMessage.nextSibling); 
    }
    errorTimeout = window.setTimeout(function() {
        errorBox.parentNode.removeChild(errorBox); 
        errorTimeout = -1; 
    }, 2000);
}

form.addEventListener('submit', logSubmit);
errorBox.addEventListener('keypress', checkInput, false)


/**TODO**
 * Object Date to validate input type date
 */