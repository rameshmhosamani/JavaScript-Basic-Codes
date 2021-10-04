// Print first 10 fibonacci series.(0 1 1 2 3 5 8)

var num =10;
var a=0;
var b=1;
var c=0;
console.log("fibbonacci series : "+"<br>");
for (var i = 0; i<num; i++)
{
    console.log(c+",");
    a=b;
    b=c;
    c=a+b;   
}
