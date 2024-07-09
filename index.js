var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6 + 1);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6 + 1);

if(randomNumber1 === 1){
    document.querySelector(".img1").setAttribute("src" , "dice1.png");
}

else if(randomNumber1 === 2){
    document.querySelector(".img1").setAttribute("src" , "dice2.png");
}

else if(randomNumber1 === 3){
    document.querySelector(".img1").setAttribute("src" , "dice3.png");
}

else if(randomNumber1 === 4){
    document.querySelector(".img1").setAttribute("src" , "dice4.png");
}

else if(randomNumber1 === 5){
    document.querySelector(".img1").setAttribute("src" , "dice5.png");
}

else if(randomNumber1 === 6){
    document.querySelector(".img1").setAttribute("src" , "dice6.png");
}


if(randomNumber2 === 1){
    document.querySelector(".img2").setAttribute("src" , "dice1.png");
}

else if(randomNumber2 === 2){
    document.querySelector(".img2").setAttribute("src" , "dice2.png");
}

else if(randomNumber2 === 3){
    document.querySelector(".img2").setAttribute("src" , "dice3.png");
}

else if(randomNumber2 === 4){
    document.querySelector(".img2").setAttribute("src" , "dice4.png");
}

else if(randomNumber2 === 5){
    document.querySelector(".img2").setAttribute("src" , "dice5.png");
}

else if(randomNumber2 === 6){
    document.querySelector(".img2").setAttribute("src" , "dice6.png");
}

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " Player 1 won 🎊";
    var winner = "";
    winner = "P1";
}

if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 won 🎊";
    var winner = "";
    winner = "P2";
}

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw🤦‍♂️";
    var winner = "";
    winner = "!P";
}

const array = {
    winner
}