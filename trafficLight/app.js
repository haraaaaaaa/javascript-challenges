const trafficLight = document.getElementsByClassName("trafficLight");

// light bulb elements
const redLight = document.getElementById("redLight");
const yellowLight = document.getElementById("yellowLight");
const greenLight = document.getElementById("greenLight");

// resets the lights 
function clearLights(){
    redLight.style.backgroundColor = "black";
    yellowLight.style.backgroundColor = "black";
    greenLight.style.backgroundColor = "black";
}

function glowRed(){
    clearLights();
    redLight.style.backgroundColor = "red";
}

function glowYellow(){
    clearLights();
    yellowLight.style.backgroundColor = "yellow";
}

function glowGreen(){
    clearLights();
    greenLight.style.backgroundColor = "green";
}

function changeColors(){
    glowRed();
    glowYellow();
    glowGreen();
}
