let a=[12,5,8,20,3]

console.log("the number greater then 10 is");

var b=a.filter((ele,i)=>{
    if(ele>=10){
        return ele;
    }
//    return ele>=10

})

console.log(b);

