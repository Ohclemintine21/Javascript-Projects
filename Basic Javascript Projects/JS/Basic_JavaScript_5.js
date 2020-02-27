document.write(typeof 5);

function my_Function() {
    document.getElementById("Test").innerHTML=0/0;
}
function my_Function() {
    document.getElementById("Test").innerHTML=isNaN('This is a test');
}
function my_Function() {
    document.getElementById("Test").innerHTML=isNaN('007');
}
document.write(2E310 + " ");

document.write(-3E310 + " ");

document.write(10>5 + " ");

document.write(10<5 + " ");

console.log(3+5 + " ");

document.write("20"+5 + " ");

console.log(Boolean(null));

document.write(20==20 + " ");

document.write(10==5 + " ");

X=50;
Y=50;
document.write(X===Y + " ");

X=10;
Y=20
document.write(X===Y + " ");

X=40;
A=40;
document.write(X===Y);

X=40;
Y="40";
document.write(X===Y);

document.write(6>5 && 9>8);

document.write(5>6 && 9>8);

document.write(5>6 || 9>8);

document.write(5>6|| 9>25);

function not_Function() {
    document.getElementById("Not").innerHTML=!(3>11);
}
function not_Function() {
    document.getElementById("Not").innerHTML=!(25>10);
}
