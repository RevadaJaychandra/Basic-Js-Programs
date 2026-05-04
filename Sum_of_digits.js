//sum of digits of a number using while loop
let n=338;
let sum=0;
while (n!=0){
    let rem=n%10;
    sum+=rem
    n=parseInt(n/10);
}
console.log(sum);