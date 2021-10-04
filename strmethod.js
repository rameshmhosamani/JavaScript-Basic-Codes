//charAt(x)
var myString = 'i can win';
console.log(myString.charAt(7));
//output: i because index starts from 0

//concat(v1,v2,..)
var message='Namaste '; 
var final=message.concat("friends" , " Welcome to JS.")
console.log(final);

//console.log('Namaste ' 'friends welcome to js');
//fromcharcode(c1,c2,..)
console.log(String.fromCharCode(97,98,99,120,121,122))
//output:abcxyz
console.log(String.fromCharCode(72,69,76,76,79))


//lastIndexOf(substr, [start])
var myString = 'javascript rocks';
console.log(myString.lastIndexOf('r'));
//output:11

