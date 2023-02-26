const trafficLight = document.querySelector(".trafficLight");

// light bulb elements
const redLight = document.getElementById("redLight");
const yellowLight = document.getElementById("yellowLight");
const greenLight = document.getElementById("greenLight");

let currentColor = "red";

trafficLight.addEventListener('click', () => {
    if(currentColor === "red"){
        redLight.style.backgroundColor = "black"
        yellowLight.style.backgroundColor = "yellow"
        currentColor = "yellow"
    }
    else if(currentColor === "yellow"){
        yellowLight.style.backgroundColor = "black"
        greenLight.style.backgroundColor = "green"
        currentColor = "green"
    }
    else{
        greenLight.style.backgroundColor = "black"
        redLight.style.backgroundColor = "red"
        currentColor = "red"
    }
})