function addition_Function() {
    var addition=3+12;
    document.getElementById("Math").innerHTML="3+12="+addition;
}
function subtraction_Function() {
    var Subtraction = 26-10;
    document.getElementById("Math").innerHTML="26-10="+Subtraction;
}
function multiplication() {
    var simple_Math= 20*10;
    document.getElementById("Math").innerHTML="20 X 10="+simple_Math;
}
function division() {
    var simple_Math=120/20;
    document.getElementById("Math").innerHTML="120/20="+simple_Math;
}
function more_Math() {
    var simple_Math=(3+5)*20/2-2;
    document.getElementById("Math").innerHTML="3 plus 5, multiplied by 20,
    divided in half and then subtracted by 2 equals"+simple_Math;
}
function modulus_Operator() {
    var simple_Math= 75%6;
    document.getElementById("Math").innerHTML="When you divide 75 by 6 you have a remainder of:"+simple_Math;
}
function negation_Operator() {
    var x=6
    document.getElementById("Math").innerHTML=-X;
}

var x=6;
X++;
document.write(x);

var x= 5.75;
X--;
document.write(X);

window.alert(Math.random());
window.alert(Math.random() * 20);

Math.sqrt(64);  //returns 8