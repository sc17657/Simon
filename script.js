
const Yellow = document.querySelector('.buttonYellow');
const Blue = document.querySelector('.buttonBlue');
const Green = document.querySelector('.buttonGreen');
const Red = document.querySelector('.buttonRed');
const Start = document.querySelector('.button2')
let computerChoices = [Yellow, Blue, Green, Red];



function computer() {
    Yellow.style.backgroundColor = "white"
        setTimeout(turnWhite, 500)
     Green.style.backgroundColor = "white"
        setTimeout(clickGreen, 600)
     Red.style.backgroundColor = "white"
        setTimeout(clickRed, 700)
     Blue.style.backgroundColor = "white"
        setTimeout(clickBlue, 800)

      

}

function computerTurn() {
    pcMove()
    setTimeout(pcMove1, 2000)
    
    checkWin()
    
    // clickGreen()
    // clickRed()


}
Start.addEventListener("click", computer);
// computerTurn()

function pcMove() {
 Yellow.style.backgroundColor = "white";
 console.log(Yellow.style.backgroundColor)
 setTimeout(pcWhite, 2000);
 console.log(Yellow.style.backgroundColor)
}
function pcWhite() {
    Yellow.style.backgroundColor = "yellow";
}


function pcMove1() {
    Green.style.backgroundColor = "white";
    setTimeout(pcGreen, 1000);
   }
   function pcGreen() {
        Green.style.backgroundColor = "green";
        
   }



function playerMove() {
 Yellow.style.backgroundColor = "white";
 console.log(Yellow.style.backgroundColor)
 setTimeout(turnWhite, 2000);
 console.log(Yellow.style.backgroundColor)
}
function turnWhite() {
    Yellow.style.backgroundColor = "yellow";
    clickYellow = true
    checkWin()
}
Yellow.addEventListener("click", playerMove);




function playerMove1() {
    Green.style.backgroundColor = "white";
    setTimeout(clickGreen, 2000);
   }
   function clickGreen() {
        Green.style.backgroundColor = "green";
        clickedGreen = true;
        checkWin()
   }
   Green.addEventListener("click", playerMove1);

   function playerMove2() {
    Red.style.backgroundColor = "white";
    setTimeout(clickRed, 500);
   }
   function clickRed() {
        Red.style.backgroundColor = "red";
   }
   Red.addEventListener("click", playerMove2);

   function playerMove3() {
    Blue.style.backgroundColor = "white";
    setTimeout(clickBlue, 500);
   }
   function clickBlue() {
        Blue.style.backgroundColor = "blue";
   }
   Blue.addEventListener("click", playerMove3);

let clickYellow = false
let clickedGreen = false

function checkWin() { 
    if (clickYellow === true && clickedGreen === true) {
        alert ("You win");
            }
    
    // if (clickYellow |= true || (clickedGreen |= true)) {
        // alert ("You loose");

}
        
