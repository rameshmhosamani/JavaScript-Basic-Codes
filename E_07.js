//print the multiples of the 3 from 300 down to 3.
var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 && x % 300 === 0 || x%3 === 0 )
    {
       sum += x;
    }
}
console.log(sum);