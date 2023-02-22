alert("Hai richiesto di calcolare il costo del biglietto per il tragitto che vuoi percorrere, ti verrà richiesta la lunghezza del tragitto e l'età dell'intestatario del biglietto");
const userTravel = parseInt(prompt("Quanti Km è lungo il tragitto?"));
const userAge = parseInt(prompt("Qunti anni ha l'intestatario del biglietto?"));
const distancePrice = 0.21;

document.getElementById("distance").innerHTML = userTravel;
document.getElementById("age").innerHTML = userAge;

var userTravelPrice = userTravel * distancePrice;
console.log(userTravelPrice);