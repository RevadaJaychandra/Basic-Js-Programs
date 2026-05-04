//Function Expression - Count vowels in a string

const vow=function(str){
    count=0
    const v='aeiouAEIOU';
    for(let i=0;i<(str.length);i++){
        if (v.includes(str[i])){
            count+=1
        }
    }
    console.log(count);
}
vow("javascript");
