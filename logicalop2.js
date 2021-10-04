var o1 = true  || true;          //t || t returns true
var o2 = false || true;          //f || t returns true
var o3 = true  || false;         //t || f returns true
var o4 = false || (3 == 4);      //f || t returns false
var o5 = 'cat' || 'Dog';         //t || f returns cat
var o6 = false || 'Cat';         //f || t returns cat
var o7 = 'cat' || false;         //t || f returns cat

    console.log(o1,o2,o3,o4,o5,o6,o7);