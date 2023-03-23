function full_Sentence() { //concat()
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a ";
    var part_4 = "complete sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { //slice()
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33); //indicate which characters in the string that will display
    document.getElementById("Slice").innerHTML = Section;
}

function func() { //toUpperCase method
    var str = "Sad";
    var string = str.toUpperCase();
    console.log(string);
}
func();

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'; //search() method. Any character that is not a word character or whitespace
const regex = /[^\w\s]/g;
console.log(paragraph.search(regex)); // Expected output: 43
console.log(paragraph[paragraph.search(regex)]); // Expected output: "."

function string_Method() { //toString() method
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //toPrecision() method
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function financial(x) { //toFixed() method
    return Number.parseFloat(x).toFixed(2);
  }
console.log(financial(123.456)); // Expected output: "123.46"
console.log(financial(0.004)); // Expected output: "0.00"
console.log(financial('1.23e+5')); // Expected output: "123000.00"

function MyNumberType(n) { //valueOf() method
    this.number = n;
  }
  MyNumberType.prototype.valueOf = function() {
    return this.number;
  };
  const object1 = new MyNumberType(4);
  console.log(object1 + 3); // Expected output: 7
  