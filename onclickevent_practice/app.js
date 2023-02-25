// Text elements
const crveniPassport = document.querySelector(".crveniPassport");
const kriminal = document.querySelector(".kriminal");
const cener = document.querySelector(".cener");

// Video elements
const crveniPassportVideo = document.querySelector(".crveniPassportVideo");
const kriminalVideo = document.querySelector(".kriminalVideo");
const cenerVideo = document.querySelector(".cenerVideo");

function clearScreen(){
    crveniPassportVideo.style.visibility = "hidden";
    cenerVideo.style.visibility = "hidden";
    kriminalVideo.style.visibility = "hidden";
}

function showCrveniPassport(){
    clearScreen();
    crveniPassportVideo.style.visibility = "visible";
}

function showCener(){
    clearScreen();
    cenerVideo.style.visibility = "visible";
}

function showKriminal(){
    clearScreen();
    kriminalVideo.style.visibility = "visible";
}

crveniPassport.addEventListener('click', showCrveniPassport)
kriminal.addEventListener('click', showKriminal)
cener.addEventListener('click', showCener)
