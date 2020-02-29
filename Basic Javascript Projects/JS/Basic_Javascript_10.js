function Call_Loop() {
    var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    var text = "";
    var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("Loop").innerHTML = text;
} 

function my_Function() {
    var str= "Hi Everyone!";
    var n= str.length;
    document.getElementById("Test").innerHTML= n;
}
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y=0; Y <Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
} 
function cat_pics() {
    var Cat_Picture=[];
    Cat_Picture[0]= "sleeping";
    Cat_Picture[1]= "playing";
    Cat_Picture[2]= "eating";
    Cat_Picture[3]= "purring";
    document.getElementById("Cat").innerHTML="In this picture, the cat is " +
        Cat_Picture[2] + ".";
}