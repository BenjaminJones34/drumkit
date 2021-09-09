let boom = document.querySelector("#boomSound");
let clap = document.querySelector("#clapSound");
let hihat = document.querySelector("#hihatSound");
let kick = document.querySelector("#kickSound");
let openhat = document.querySelector("#openhatSound");
let ride = document.querySelector("#rideSound");
let snare = document.querySelector("#snareSound");
let tink = document.querySelector("#tinkSound");
let tom = document.querySelector("#tomSound");

const boomButton = document.querySelector("#boom");
const clapButton = document.querySelector("#clap");
const hihatButton = document.querySelector("#hihat");
const kickButton = document.querySelector("#kick");
const openhatButton = document.querySelector("#openhat");
const rideButton = document.querySelector("#ride");
const snareButton = document.querySelector("#snare");
const tinkButton = document.querySelector("#tink");
const tomButton = document.querySelector("#tom");

let sounds = [[boom, "a"], [clap, "s"], [hihat, "d"], [kick, "f"], [openhat, "g"], [ride, "h"], [snare, "j"], [tink, "k"], [tom, "l"]];
let buttons = [boomButton, clapButton, hihatButton, kickButton, openhatButton, rideButton, snareButton, tinkButton, tomButton];

function playSound(index) {
    sounds[index][0].currentTime = 0;
    sounds[index][0].play();
    buttons[index].style.marginTop = "5%";
    buttons[index].style.marginLeft = "5%";
    buttons[index].style.backgroundColor = "rgba(50, 180, 50, 0.55)";
    buttons[index].style.color = "rgba(245, 245, 245, 0.85)";
    buttons[index].style.boxShadow = "8.5px 16px 3.5px rgb(tttt50, 50, 50, 0.7)";
    window.setTimeout( ()=> {
        buttons[index].style.marginTop = "0%";
        buttons[index].style.marginLeft = "0%";
        buttons[index].style.backgroundColor = "rgba(64, 218, 64, 0.623)";
        buttons[index].style.color = "rgba(245, 245, 245, 1)";
        buttons[index].style.boxShadow = "10px 20px 5px rgb(50, 50, 50, 0.5)";
    
    }, 70);
    
};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", ()=> {
        playSound(i);
    });
};

window.addEventListener("keydown", (event)=> {
    switch (event.key.toLowerCase()) {
        case "a":
            playSound(0);
            break;
        case "s":
            playSound(1);
            break;
        case "d":
            playSound(2);
            break;
        case "f":
            playSound(3);
            break;
        case "g":
            playSound(4);
            break;
        case "h":
            playSound(5);
            break;
        case "j":
            playSound(6);
            break;
        case "k":
            playSound(7);
            break;
        case "l":
            playSound(8);
            break;
    };
});