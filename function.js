console.log("loaded");


//Variables for dice
var d20 = Math.floor((Math.random() * 20) + 1)
var d10 = Math.floor((Math.random() * 10) + 1);
var d4 = Math.floor((Math.random() * 4) + 1);
var d10 = Math.floor((Math.random() * 10) + 1);
var d12 = Math.floor((Math.random() * 12) + 1);
var d6 = Math.floor((Math.random() * 6) + 1);
var d8 = Math.floor((Math.random() * 8) + 1);


//reset game
function reset() {
     var d20 = Math.floor((Math.random() * 20) + 1)
     var d10 = Math.floor((Math.random() * 10) + 1);
     var d4 = Math.floor((Math.random() * 4) + 1);
     var d10 = Math.floor((Math.random() * 10) + 1);
     var d12 = Math.floor((Math.random() * 12) + 1);
     var d6 = Math.floor((Math.random() * 6) + 1);
     var d8 = Math.floor((Math.random() * 8) + 1);
     var d100 = Math.floor((Math.random() * 100) + 1);


     //send text to div
     $("#d4").text(d4);
     $("#d6").text(d6);
     $("#d8").text(d8);
     $("#d10").text(d10);
     $("#d12").text(d12);
     $("#d20").text(d20);
     $("#d100").text(d100);
}


//On the button click, select random number and display
$('#rollButton').on('click', function () {
     $("#d4").text(d4);
     $("#d6").text(d6);
     $("#d8").text(d8);
     $("#d10").text(d10);
     $("#d12").text(d12);
     $("#d20").text(d20);
     $("#d100").text(d100);

     reset()

})