function addition_Function() { //Addition function
    var addition = 2+3; //Assigning a variable 
    document.getElementById("Math").innerHTML = "2+3=" + addition; //Putting the value of the variable into the HTML elementFromPoint
}

function subtraction_Function() { //Subtraction function
    var Subtraction = 5-3; //Assigning a variable 
    document.getElementById("Math").innerHTML = "5-3=" + Subtraction; //Putting the value of the variable into the HTML elementFromPoint
}

function multiplication() { //Multiplication function
    var simple_Math = 6*7; //Assigning a variable 
    document.getElementById("Math").innerHTML = "6x7=" + simple_Math; //Putting the value of the variable into the HTML elementFromPoint
}

function division() { //Division function
    var simple_Math = 48/6; //Assigning a variable 
    document.getElementById("Math").innerHTML = "48/6=" + simple_Math; //Putting the value of the variable into the HTML elementFromPoint
}

function more_Math() { //Multiple operations
    var simple_Math = (1 + 2) * 10 / 2 - 5; //Assigning a variable 
    document.getElementById("Math").innerHTML = "1 + 2, * 10, /2, -5= " + simple_Math;//Putting the value of the variable into the HTML elementFromPoint
}

function modulus_Operator() { //Has a remainder
    var simple_Math = 25%6; //Assigning a variable 
    document.getElementById("Math").innerHTML = "When you divide 25/6 you have a remainder of: " + simple_Math; //Putting the value of the variable into the HTML elementFromPoint
}

function negation_Operator() {
    var x=10; //Assigning a variable 
    document.getElementById("Math").innerHTML = -x; //Putting the value of the variable into the HTML elementFromPoint
}

var X = 5; //adds one to a variable
X++;
document.write(X);

var Y = 6; //subtracts one from a variable
Y--;
document.write(Y);

window.alert(Math.random() * 100);

document.write(Math.sin(90 * Math.PI/180));