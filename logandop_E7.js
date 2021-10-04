//if the op is truthy,
//AND returns the second op:
console.log(1&&0);  //0
console.log(1&&5);  //5

//if the op is falsy,
//AND returns it. the second op is ignored
console.log(null && 5);  //null
console.log(0 && "no matter what");  //0

console.log(1 && 2 && 3);  //3, the returns the value




// !(NOT)
console.log( !true);  //false
console.log( !0 );  //true



//double NOT!!
console.log( !!"non-empty string" );    //true
console.log( !!null);   //false


//The precidence NOT
var n1 = !true;  // it returns false
var n2 = !false;  // it returns true
var n3 = !'Cat';  // it returns false

console.log(n1,n2,n3);
