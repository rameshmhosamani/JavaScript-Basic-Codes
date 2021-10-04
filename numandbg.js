//without bigint
var a = 2 ** 53;
console.log(a);
var b = a + 2;
console.log(b);


//with bigint
var a = 2n ** 53n;
console.log(a);
var b= a + 2n;
console.log(b);
