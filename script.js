var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

randomImage = "dice" + randomNumber1 + ".png";
randomImgSrc = "images/" + randomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSrc);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

randomImage2 = "dice" + randomNumber2 + ".png";
randomImagesrc = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImagesrc);

// if (randomNumber1 > randomNumber2) {
//     alert("user 1 won :)");
// }
// else if (randomNumber1 === randomNumber2) {
//     alert("Draw");
// }
// else {
//     alert("user 2 won :(")
// }

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").style.fontSize = "5rem";
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").style.fontSize = "5rem";
    document.querySelector("h1").innerHTML = "🚩Draw🚩";
}
else {
    document.querySelector("h1").style.fontSize = "5rem";
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}