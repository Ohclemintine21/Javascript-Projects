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
function array_Function() {
    var fox_Picture=[];
    fox_Picture[0]= "sleeping";
    fox_Picture[1]= "playing";
    fox_Picture[2]= "eating";
    fox_Picture[3]= "purring";
    document.getElementById("Array").innerHTML="In this picture, the fox is " +
        fox_Picture[2] + ".";
}
function constant_function() {
    const Used_Car= {type:"truck", make:"Nissan", model:"Titan"};
    Used_Car.color= "green";
    Used_Car.price= "$2,500";
    document.getElementById("Constant").innerHTML="The cost of the " +
        Used_Car.type + " was " + Used_Car.price;
}

var X = 82; //This is a declaration that assigns X the value 82
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

function truck_Object() {
    let truck = {
    make: "Nissan ",
    model: "Titan ",
    year: "2019 ",
    color: "green ",
    description : function() {
        return "The truck is a " + this.year + this.color + this.model;
    }
};
document.getElementById("truck").innerHTML= truck.description();
}


    var text = "";
    var i;
for (i = 0; i < 10; i++) {
    if (i == 3) { break; }
    text += " The number is " + i + "<br>";
    }
document.getElementById("Test").innerHTML= text;

for (i = 0; i < 10; i ++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("Demo").innerHTML = text; 
