document.write(typeof "Word"); //Type of 

document.write(typeof 3); //Type of 

document.write("10" + 5); //Coercion

document.write(2E310); //Inifinity

document.write(-3E310); //-Negative Infinity

document.write(10>2); //True boolean statement

document.write(10<2); //False boolean statement

console.log(2+2);

console.log(10<2); //False boolean statement

document.write(10 == 10); //True comparison statement

document.write(3 == 11); //False comparison statement

X = 10;
Y = 10;
document.write(X === Y); //True data comparison

A = 82;
B = "82";
document.write(A === B); //False data comparison

C = 7,14,1998;
D = 07/14/1998;
document.write(C === D);

E = 10;
F = 11;
document.write(E === F);

document.write(5>2 && 10>4);

document.write(5>10 && 10>4);

document.write(5>10 || 10>4);

document.write(5>10 || 10>20);

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

document.write(Bigger = (5>1)? "Left number is bigger":"Right number is bigger"); //Ternary operator