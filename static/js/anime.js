// $(function(){
    
// });

console.log("Vanila JS!!!");
let letter = "WEB DESIGNER + FRONT-END DEVELOPER.";

let typer = document.getElementById("typer");

let counter = 0;
let timer = (letter.length+1)*2;


// 100*x=timer      =10*1=                       =1

setInterval(function(){
    timer--;
    if(counter >= letter.length){
        if (timer == 0) {
            counter=0;
            typer.innerHTML="";
            timer = (letter.length+1)*2;
        }
    }
    else{
        if(timer > letter.length){
            typing(letter[counter]);
            counter++;
        }
    }
    
},100);




// typing("nadi skisifa");






function typing(text){
    let new_el = document.createElement("span");
    new_el.setAttribute("class","holder");
    new_el.innerText = text;
    typer.appendChild(new_el);
}