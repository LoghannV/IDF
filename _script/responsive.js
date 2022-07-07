var linhas = document.getElementById("linhas");
var icon = document.getElementById("icone_linhas");
var recolhe = false;
linhas.addEventListener("click",()=>{
    if(!recolhe){
        icon.style.left = 150+"px";
        document.getElementById("menu").style.left = 0+"px";
        recolhe = true;
    }else{
        icon.style.left = 510+"px";
        document.getElementById("menu").style.left = -500+"px";
        recolhe = false;
    }
   
});