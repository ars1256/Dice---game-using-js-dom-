// for first dice
var randomnumber_1 = Math.floor(Math.random() * 6) + 1;
var randomimages_1 = "dice" + randomnumber_1 + ".png";
document.querySelector(".img1").setAttribute("src", "images/" + randomimages_1);

//for second dice
var randomnumber_2 = Math.floor(Math.random() * 6) + 1;
var randomimages_2 = "dice" + randomnumber_2 + ".png";
document.querySelector(".img2").setAttribute("src", "images/" + randomimages_2);

// if player1 wins
if(randomimages_1>randomimages_2){
    document.querySelector("h1").innerHTML="Player 1 Wins 🚩";
}
else if(randomimages_1<randomimages_2){
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw! 🚩";
}