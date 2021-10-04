//while(condition){
    //statement
    //Increment/Decrement
//}


let num = parseInt(prompt("Enter a number"));
let rev = 0, r;
rev = 0;
while (n > 0) {
  r = n % 10;
  rev = rev * 10 + r;
  n = parseInt(n / 10)
}

if (num == rev) {
  console.log("Number is palindrome:" + num);
} else {
  console.log("Number is not palindrome:" + num);
}