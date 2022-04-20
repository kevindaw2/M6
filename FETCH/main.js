/*Weather API*/
const APIKEY = "35b273bcb1337c4063edb350b1bfb2e6"; 
const APIURL = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=' + APIKEY; 

function getLatLon() {
    fetch(APIURL)
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => console.log(json))    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
}