let myConditiion = true;

myConditiion = !myConditiion; //not Operator

myConditiion = true || false; //or Operator

myConditiion = true && true; //and Operator ist nur true wenn beide true sind 

myConditiion = true || !(false || true) || (false && (true || false)); //==> true

myConditiion = 45 == 47; // testet ob exakt gleich / ohne typ
myConditiion = "45" === "45"; //testet ob exakt gleich / mit typ ==> true
myConditiion = "45" === 45; //testet ob exakt gleich / mit typ ==> false
myConditiion = 34 > 123; // größer Abfrage
myConditiion = 45 <= 45; // größergleich Abfrage ==> true
myConditiion = 45 != "45"; // testet ob exakt gleich / ohne typ ==> false
 myConditiion = 45 !== "47"; // testet ob exakt gleich / mit typ ==> true


if(myConditiion){
    console.log("Hello World! if Teil");
 }else if(myConditiion) {
    console.log("Hello World! else if Teil");
} else {
    console.log("Hello World else Teil");
} 



