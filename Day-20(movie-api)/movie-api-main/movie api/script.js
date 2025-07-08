let movieName = document.getElementById("search")
let select = document.getElementById("select")

let display = "";
if(movieName.value == ""){
    display = "money"; 
} else {
    display = movieName.value;
}
// Immediately Invoked Function Expression (IIFE)
(function() {
    fetchData(display);
})();

movieName.addEventListener("input",()=>{
    if(movieName.value){
        fetchData(movieName.value)
    }
    
})

    select.addEventListener("change",()=>{
        if(select.value){
            fetchData(movieName.value,select.value)
         }
     })


    function fetchData(movie,option="movie"){
        
    fetch (`https://www.omdbapi.com/?i=tt3896198&apikey=11905291&s=${movie}&type=${option}`)
    .then((r)=>{
        return r.json()
    })
    .then((res)=>{
        console.log(res)
        document.getElementById("box").innerHTML=view(res.Search)
    })
    .catch((err)=>{
        console.log(err)
    })
}



function view(arr){
    return arr.map((ele)=>{
        return `<div id="main">
        <img src="${ele.Poster}" height="320px">
         <h4 style="margin-top: 7px;">${ele.Title}</h4>
        </div>`
    }).join("")
}