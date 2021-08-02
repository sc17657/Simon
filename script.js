
const Yellow = document.querySelector('.buttonYellow');
const Blue = document.querySelector('.buttonBlue');
const Green = document.querySelector('.buttonGreen');
const Red = document.querySelector('.buttonRed');
const Start = document.querySelector('.button2')
// console.log(Start)


function computer() {
    Yellow.style.backgroundColor = "white"
        setTimeout(turnWhite, 1600)
    Green.style.backgroundColor = "white"
        setTimeout(clickGreen, 1400)
    Red.style.backgroundColor = "white"
        setTimeout(clickRed, 1200)
    Blue.style.backgroundColor = "white"
        setTimeout(clickBlue, 1000)
}
Start.addEventListener("click", computer);



function playerMove() {
 Yellow.style.backgroundColor = "white";
 setTimeout(turnWhite, 1000);
}
function turnWhite() {
    Yellow.style.backgroundColor = "yellow";
}
Yellow.addEventListener("click", playerMove);
// console.log(Yellow)




function playerMove1() {
    Green.style.backgroundColor = "white";
    setTimeout(clickGreen, 1000);
   }
   function clickGreen() {
        Green.style.backgroundColor = "green";
    //    console.log("Now I am red again")
   }
   Green.addEventListener("click", playerMove1);
//    console.log(Green)

   function playerMove2() {
    Red.style.backgroundColor = "white";
    setTimeout(clickRed, 1000);
   }
   function clickRed() {
        Red.style.backgroundColor = "red";
    //    console.log("Now I am red again")
   }
   Red.addEventListener("click", playerMove2);
//    console.log("red")

   function playerMove3() {
    Blue.style.backgroundColor = "white";
    setTimeout(clickBlue, 1000);
   }
   function clickBlue() {
        Blue.style.backgroundColor = "blue";
    //    console.log("Now I am blue again")
   }
   Blue.addEventListener("click", playerMove3);
//    console.log("blue")

        
 