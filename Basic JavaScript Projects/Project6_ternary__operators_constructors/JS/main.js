function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;} //Nested Function
        Plus_one();
        return Starting_point;
    }
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML = //new and this constructor keywords
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + "manufactured in " + Erik.Vehicle_Year;
}

document.write(Bigger = (5>1) ? "Left number is bigger":"Right number is bigger"); //Ternary operation

