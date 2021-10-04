// A function that counts the number of digits in an integer (ip : 145, op: 3) as there are 3 digits

function digitCount ( num )
{
     return Math.floor( num.toString()).length;
}

digitCount(145) ;
 const digitCount2 = num => String( Math.floor( Math.abs(num) ) ).length;

 console.log(digitCount2(145))
 