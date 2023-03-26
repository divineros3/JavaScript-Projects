//while loop
function count_To_Ten() { 
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

//String length
const str = 'Life, the universe and everything. Answer:';
console.log(`${str} ${str.length}`); // Expected output: "Life, the universe and everything. Answer: 42"

//For loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Array
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

//constant function
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "pink";
    Musical_Instrument.price = "$1,100";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//Let function
var X = 73;
document.write(X);
{
    let X = 37;
    document.write("<br>" + X);
}
document.write("<br>" + X);

//return statement
function getRectArea(width, height) {
    if (width > 0 && height > 0) {
      return width * height;
    }
    return 0;
  }
  console.log(getRectArea(3, 4)); // Expected output: 12
  console.log(getRectArea(-3, 4)); // Expected output: 0
  
  //objects
  let car = {
    make: "Mazda ",
    model: "6 ",
    year: "2009 ",
    color: "blue ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
  };
  document.getElementById("Car_Object").innerHTML = car.description();

  //break statement
  let i = 0;
while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}
console.log(i); // Expected output: 3

//continue statement
let text = '';
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}
console.log(text); // Expected output: "012456789"
