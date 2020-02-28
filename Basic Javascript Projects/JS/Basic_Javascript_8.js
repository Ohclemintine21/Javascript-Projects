function random_Verbs() {
    var part_1=" Running";
    var part_2=" Jumping";
    var part_3=" Skipping";
    var part_4=" Swimming";
    var all_verbs=part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML=all_verbs;
}
function slice_Method() {
    var Sentence= "We are the music makers and we are the dreamers of dreams!";
    var Section=Sentence.slice(2,34);
    document.getElementById("Slice").innerHTML=Section;
}
function toUpperCase_Method(){
    var str="hi there!";
    var res=str.toUpperCase();
    document.getElementById("Uppercase").innerHTML=res;
}

function Search_Method() {
    var str="Visit YouTube!";
    var n=str.search("YouTube");
    document.getElementById("Search").innerHTML=n;
}
function string_Method() {
    var x=182;
    document.getElementById("Numbers_to_string").innerHTML=x.toString();
}
function precision_Method() {
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML=x.toPrecision(10);
}
function toFixed_Method() {
    var num= 5.567890
    var n=num.toFixed(2);
    document.getElementById("Fixed").innerHTML=n;
}
