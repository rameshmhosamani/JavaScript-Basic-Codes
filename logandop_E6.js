// logical (&&) and example

var a1 = true && true;  //true
var a2 = true && false;  //false
var a3 = false && true;  //false
var a4 = false && (3==4);  //false
var a5 = 'Cat' && 'Dog';  //Dog
var a6 = false && 'Cat';  //false
var a7 = 'Cat' && false;  //false

    console.log(a1,a2,a3,a4,a5,a6,a7);