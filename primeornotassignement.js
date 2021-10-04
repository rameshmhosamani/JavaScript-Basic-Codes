let n = parseInt(prompt("Enter a number:"))
let p = 2
if (n == 2) 
{
  console.log("Number is not prime:" + n);
} else
 {
  for (i = 2; i < n; i++)
   {
    if (parseInt(n % i) == 0) 
    {
      p = 0
      break
    }
  }
  if (p == 2) 
  {
    console.log("Number is prime:" + n);
  } else 
  {
    console.log("Number is not prime:" + n);
  }
}