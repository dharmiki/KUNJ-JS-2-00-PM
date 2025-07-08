



function fun(){


fetch("https://dog.ceo/api/breeds/image/random").then((r)=>{

    return r.json()
})
.then((res)=>{
    console.log(res)
    document.getElementById("minu").innerHTML=`<img src="${res.message}"height="200px">`
})
.catch((err)=>{
    console.log(err)
})
};
fun()

