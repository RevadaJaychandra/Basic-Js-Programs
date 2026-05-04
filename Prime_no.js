//Checking whether a number is prime or not using function declaration

n=67
function Prime(num){
    if(num<=1){
        return false
    }
    if(num==2){
        return true
    }
    else{
        for(let i=2;i*i<=num;i++){
            if(num%i!=0){
                return true
            }
        }
    }
}
if(Prime(n)){
    console.log("prime");
}
else{
    console.log("not prime");
}