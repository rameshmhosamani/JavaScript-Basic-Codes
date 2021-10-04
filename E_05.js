//check if a number is palindrome or not. (eg: 121 is palindrome number)

let num =121;
let originalNum = num;
let reverse = 0;
for (let i = 0; i < num; i++){
while(num != 0)
{
    reverse = (reverse * 10) + (num % 10);
    num = parseInt(num / 10);
}
if(originalNum == reverse)
    console.log(reverse+" is a Palindrome number");
else 
    console.log(reverse+" Not a Palindrome number");
}