var NAME = [];

const receipt = [];                                                     //receipt 
let sum = 0;

var audio = new Audio("kachinglol.mp3")

function HideShow(x) { //originally, i had planned for it so that when you click, it hides the black transparent background thing. Too lazy to do it so I just settled with receipts. also too lazy to change the function name
NAME.push(x);
console.log(NAME);
audio.play();
}
function ArrayAdd(y) {
    sum = 0;
    receipt.push(y);
    for (let i = 0; i < receipt.length; i++) {
        sum += receipt[i];
        
    }
    console.log(sum);
}
function TEST() {
    alert(NAME.join('') + "\n" + "Total is: $" + sum.toFixed(2));
}

