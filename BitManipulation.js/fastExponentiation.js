//calculate exponetiation using bits
let num=10,pow=9;
function exponetiation(num,pow){
    let ans=1;
    while(pow>0){
        if(pow&1 !== 0){
            ans=ans*num;
        }
            num=num*num;
            pow=pow>>1;
    }
    console.log(`result of  ${10} pow ${9}: ${ans}`);
}

exponetiation(num,pow);