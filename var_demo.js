console.log(myVar); //output undefined//
var myVar = 10;
console.log(myVar);//output 10//

//var redeclaration ex//
var myVar = 20;
console.log(myVar); //output 20//

//function scope ex//
function demoFunction(){
    var funcVar = 30;
    console.log(funcVar);//output 30//
}
demoFunction();
//console.log(funcVar)