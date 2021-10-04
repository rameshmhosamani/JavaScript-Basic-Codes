// print all prime numbers from 1 to 100.
let n = "100";
for(let i=2; i<=100; i++) {
    let  n=true;
    for(j=2; j<i; j++){
        if(i%j == 0)
        n=false;
    }
    if(n)
        console.log(i+'')
}