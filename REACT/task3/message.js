
function double(n){
    return n*10;
}
module.exports=double;

function add(value){

    let even=value.filter((val)=>val%2==0);
    let squaer=even.map(num=>Math.pow(num,2));
    let sum=squaer.reduce((accumulator,currentValue)=>(accumulator+currentValue));
    return sum;
}

module.exports=add;
