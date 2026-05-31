//let btn=document.getElementById("btn");
//btn.addEventListener("click",function(){alert ("button was clicked")});

let aboutMe= document.createElement("p");
let heading = document.createElement("h1");
heading.innerText = "About You";
heading.style.textAlign="left";
heading.style.color="Black";

 
aboutMe.innerHTML=" I am Rishabh Srivastav just learning Dom manupulation ";
document.body.appendChild(heading);
document.body.appendChild(aboutMe);
document.body.style.backgroundColor="lightblue";
let mode="dark";

let button=document.getElementById("myButton");

button.addEventListener("click",()=>{
    if(mode=="dark"){
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
    mode="light";
}
else{
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    mode="dark";
}
}
);
