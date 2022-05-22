//Detecting button or keyboard press

document.querySelectorAll("button.drum").forEach(button => {
    button.addEventListener("click",function(){handleClick(this.innerHTML)});    
});

document.addEventListener("keydown",function(e){handleClick(e.key)});

//create sounds

// var tom1 = new Audio("sounds/tom-1.mp3");
// var tom2 = new Audio("sounds/tom-2.mp3");
// var tom3 = new Audio("sounds/tom-3.mp3");
// var tom4 = new Audio("sounds/tom-4.mp3");
// var crash = new Audio("sounds/crash.mp3");
// var kick = new Audio("sounds/kick-bass.mp3");
// var snare = new Audio("sounds/snare.mp3");

var instruments = [
    {name: "tom1", key: "w", sound: new Audio("sounds/tom-1.mp3")},
    {name: "tom2", key: "a", sound: new Audio("sounds/tom-2.mp3")},
    {name: "tom3", key: "s", sound: new Audio("sounds/tom-3.mp3")},
    {name: "tom4", key: "d", sound: new Audio("sounds/tom-4.mp3")},
    {name: "crash", key: "j", sound: new Audio("sounds/crash.mp3")},
    {name: "kick", key: "k", sound: new Audio("sounds/kick-bass.mp3")},
    {name: "snare", key: "l", sound: new Audio("sounds/snare.mp3")}
];

//Play the right sound

function handleClick(kWord) {
    
    var soundToPlay = instruments.find((item) => {return item.key === kWord}).sound;
    
    soundToPlay.load();
    soundToPlay.play();
    buttonAnimation(kWord);
    
    // switch (kWord) {
    //     case "w":
    //         tom1.play();
    //         break;
    //     case "a":
    //         tom2.play();
    //         break;
    //     case "s":
    //         tom3.play();
    //         break;
    //     case "d":
    //         tom4.play();
    //         break;
    //     case "j":
    //         crash.play();
    //         break;
    //     case "k":
    //         kick.play();
    //         break;
    //     case "l":
    //         snare.play();
    //         break;
    // }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}