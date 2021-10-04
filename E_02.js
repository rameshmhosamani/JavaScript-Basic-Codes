// Check if a Number is a Prime Number.
var n  = parseInt(" 7 ");
if(n == 1)
    console.log(' is neither prime nor composite number');
else if (n < 1)
    console.log(' is not a prime number');
    for (var i = 2; i < n; i++){
    if(n % i == 0) 
        var n  = ' is Not a Prime number';
    else
        var n = 'is a Prime number';
}   
    console.log(n );