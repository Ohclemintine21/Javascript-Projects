/*global variable*/
var X= 20;
function Add_numbers_1() {
    document.write(30+X+"<br>");
}
function Add_numbers_2() {
    document.write(X+25);
}
Add_numbers_1();
Add_numbers_2();

/*local variable*/
function Add_numbers_1() {
    var X= 20;
    document.write(30+X+"<br>");
}
function Add_numbers_2() {
    document.write(X+25);
    }
Add_numbers_1();
Add_numbers_2();

function get_Date() {
    if (new Date().getHours()<17) {
    document.getElementById("Greeting").innerHTML="Hello Beautiful!";
    }
}
function Age_Function() {
    Age= document.getElementById("Age").value;
    if(Age>=18) {
        Vote="You are old enough to vote";
    }
    else {
        Vote= "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML=Vote;
}
function Time_function() {
    var Time= new Date().getHours();
    var Reply;
    if (Time <12==Time>0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12==Time<18) {
        Reply="It's is the afternoon.";
    }
    else {
        Reply= "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}