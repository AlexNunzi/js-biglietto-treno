alert("Hai richiesto di calcolare il costo del biglietto per il tragitto che vuoi percorrere, ti verrà richiesta la lunghezza del tragitto e l'età dell'intestatario del biglietto");
const userTravel = parseInt(prompt("Quanti Km è lungo il tragitto?"));
const userAge = parseInt(prompt("Qunti anni ha l'intestatario del biglietto?"));
const distancePrice = 0.21;
let userTravelBasePrice = userTravel * distancePrice;
let userTravelPrice;
let userDiscount;

if(userAge < 18){
    userDiscount = ((userTravelBasePrice * 20) / 100);
    userTravelPrice = (userTravelBasePrice - userDiscount).toFixed(2);
    document.getElementById("discountReminder").innerHTML = "a cui viene applicato uno sconto del 20% per i minorenni."
    document.getElementById("discount").innerHTML = (userDiscount).toFixed(2);
} else if(userAge > 65){
    userDiscount = ((userTravelBasePrice * 40) / 100);
    userTravelPrice = (userTravelBasePrice - userDiscount).toFixed(2);
    document.getElementById("discountReminder").innerHTML = "a cui viene applicato uno sconto del 40% per i clienti senior."
    document.getElementById("discount").innerHTML = (userDiscount).toFixed(2);
} else{
    userTravelPrice = userTravelBasePrice.toFixed(2);
    userDiscount = 0;
    document.getElementById("discount").innerHTML = (userDiscount).toFixed(2);
}

document.getElementById("distance").innerHTML = userTravel;
document.getElementById("age").innerHTML = userAge;
document.getElementById("basePrice").innerHTML = userTravelBasePrice.toFixed(2);
document.getElementById("price").innerHTML = userTravelPrice;