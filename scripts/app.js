let boom = new Audio("sounds/boom.wav");
let clap = new Audio("sounds/clap.wav");
let hihat = new Audio("sounds/hihat.wav");
let kick = new Audio("sounds/kick.wav");
let openhat = new Audio("sounds/openhat.wav");
let ride = new Audio("sounds/ride.wav");
let snare = new Audio("sounds/snare.wav");
let tink = new Audio("sounds/tink.wav");
let tom = new Audio("sounds/tom.wav");

const boomButton = document.querySelector("#boom");
const clapButton = document.querySelector("#clap");
const hihatButton = document.querySelector("#hihat");
const kickButton = document.querySelector("#kick");
const openhatButton = document.querySelector("#openhat");
const rideButton = document.querySelector("#ride");
const snareButton = document.querySelector("#snare");
const tinkButton = document.querySelector("#tink");
const tomButton = document.querySelector("#tom");

let sounds = [[boom, "b"], [clap, "c"], [hihat, "h"], [kick, "k"], [openhat, "o"], [ride, "r"], [snare, "s"], [tink, "t"], [tom, "m"]];
let buttons = [boomButton, clapButton, hihatButton, kickButton, openhatButton, rideButton, snareButton, tinkButton, tomButton];

function playSound(index) {
    sounds[index][0].play();
    buttons[index].style.marginTop = "5%";
    buttons[index].style.marginLeft = "5%";
    buttons[index].style.backgroundColor = "rgba(80, 180, 80, 0.7)";
    buttons[index].style.boxShadow = "8.5px 16px 3.5px rgb(50, 50, 50, 0.7)";
    window.setTimeout( ()=> {
        buttons[index].style.marginTop = "0%";
        buttons[index].style.marginLeft = "0%";
        buttons[index].style.backgroundColor = "rgba(101, 211, 101, 0.623)";
        buttons[index].style.boxShadow = "10px 20px 5px rgb(50, 50, 50, 0.5)";
    }, 500);
    
};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", ()=> {
        playSound(i);
    });
};

window.addEventListener("keydown", (event)=> {
    switch (event.key.toLowerCase()) {
        case "b":
            playSound(0);
            break;
        case "c":
            playSound(1);
            break;
        case "h":
            playSound(2);
            break;
        case "k":
            playSound(3);
            break;
        case "o":
            playSound(4);
            break;
        case "r":
            playSound(5);
            break;
        case "s":
            playSound(6);
            break;
        case "t":
            playSound(7);
            break;
        case "m":
            playSound(8);
            break;
    };
});