function Ride_Function() {
    var Height, Can_ride;
    Height=document.getElementById("Height").nodeValue;
    Can_ride=(Height<52)?"You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML= Can_ride +" to ride.";
}
function vote_Function() {
    var Age, Can_vote;
    Age=document.getElementById("Age").nodeValue;
    Can_vote= (Age<18)? "You are not old enough ":"You are old enough";
    document.getElementById("vote").innerHTML=Can_vote + " to vote.";
}
class Customer
{
    string FullName;
    Boolean Active;
} 
Customer(string name) {
    Fullname=name;
    Active=true;
}
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack= new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily= new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik= new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myfunction() {
    document.getElementById("Keywords_and_Constructors").innerhtml=
    "Erik drives a " + Erik.Vehicle_Color + "-colored" +Erik.Vehicle_Model +
    " manufactured in" + Erik.Vehicle_Year;
}

function Student(Grade, Age, Gender) {
   this.Student_Grade=Grade;
   this.Student_Age=Age;
   this.Student_Gender=Gender;
}
var Sally= new Student("85", "12", "female");
var John= new Student("75","12", "Male");
var Heather= new Student("95", "12", "female");
function myfunction() {
    document.getElementById("New_and_This").innerhtml=
    "Sally new grade is " + Sally.Student_Grade + "-grade" +Sally.Student_Age +
     + Sally.Student_Gender;
}
function count_Function () {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point=9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}