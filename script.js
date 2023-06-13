// your code here
let urlText = "https://localhost:8080/";
let button = document.getElementById("button");
button.addEventListener("click",perform);

function perform(){
    let name = document.getElementById("name").value;
    let year = document.getElementById("year").value;
    let url =  document.getElementById("url");
    if(name!=""){
        url.innerText=urlText + `?name=${name}` + `&year=${year}`;
    }
    else{
        url.innerText=urlText + `&year=${year}`;
    }
}   
