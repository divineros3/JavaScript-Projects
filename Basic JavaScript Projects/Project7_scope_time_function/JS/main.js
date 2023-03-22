var X = 10; //global variable
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var Y = 10; //local variable
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4();

function Add_numbers_5() { //function variable with intentional error to dbug with console.log
    var Z = 10;
    console.log(15 + Z);
}
function Add_numbers_6() {
    console.log(Z + 100);
}
Add_numbers_5();
Add_numbers_6();

function get_Date() {
    if (new Date().getHours() <18) { //if statement
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function get_Time() {
    if (new TimeRanges().getTime() <24) {
        document.getElementById("Time").innerHTML = "Hello";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) { //if statement
        Vote = "You are old enough to vote!";
    }
    else { //else statement
        Vote = "You are not old enough to vote.";
    }
    document.getElementById("How_old_are_you?").innerHTML =Vote;
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) { //if statement
        Reply = "It is the morning.";
    }
    else if (Time >= 12 == Time < 18) { //else if statement
        Reply = "It is the afternoon.";
    }
    else { //else statement
        Reply = "It is the evening.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}