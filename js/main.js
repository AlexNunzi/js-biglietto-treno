alert("Hai richiesto di calcolare il costo del biglietto per il tragitto che vuoi percorrere, ti verrà richiesta la lunghezza del tragitto e l'età dell'intestatario del biglietto");
const userTravel = parseInt(prompt("Quanti Km è lungo il tragitto?"));
const userAge = parseInt(prompt("Qunti anni ha l'intestatario del biglietto?"));
const distancePrice = 0.21;
var userTravelBasePrice = userTravel * distancePrice;
var userTravelPrice;
var userDiscount;

if(userAge < 18){
    userDiscount = ((userTravelBasePrice * 20) / 100);
    userTravelPrice = (userTravelBasePrice - userDiscount);
    console.log("minore di 18");
    console.log(userTravelPrice);
} else if(userAge >= 65){
    userDiscount = ((userTravelBasePrice * 40) / 100);
    userTravelPrice = (userTravelBasePrice - userDiscount);
    console.log("maggiore di 65");
    console.log(userTravelPrice);
} else{
    userTravelPrice = userTravelBasePrice;
    console.log("da 18 a 64 anni");
    console.log(userTravelPrice);
}

document.getElementById("distance").innerHTML = userTravel;
document.getElementById("age").innerHTML = userAge;
document.getElementById("price").innerHTML = userTravelPrice;