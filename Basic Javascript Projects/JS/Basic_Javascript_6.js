 function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML= Can_ride +" to ride.";
}
function vote_Function() {
    var age=document.getElementById("age").value;
    var voteable = (age <  18) ? "You are not old enough ":"You are old enough";
    document.getElementById("vote").innerHTML= voteable + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack= new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily= new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    var element = document.getElementById("Keywords_and_Constructors");
    var str = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
    element.innerHTML = str;
}

function Student(Grade, Age, Gender) {
   this.Student_Grade=Grade;
   this.Student_Age=Age;
   this.Student_Gender=Gender;
}

var John= new Student("75","12", "Male");
var Heather= new Student("95", "12", "female");

function newStudent() {
    this.Sally = new Student("85", "12", "female");

    var element = document.getElementById("New_and_This");
    element.innerHTML = "Sally new grade is " + this.Sally.Student_Grade + " -grade " + this.Sally.Student_Age + " : " + this.Sally.Student_Gender;
}

function Count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 8;
        function Plus_one() { Starting_point += 1 };
        Plus_one();
        return Starting_point;
    }
}
