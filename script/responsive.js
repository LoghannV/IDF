var linhas = document.getElementById("linhas");
var icon = document.getElementById("icone_linhas");
var recolhe = false;
var w_wd = window.innerWidth
var h_wd = window.innerHeight
var video = document.getElementById('movie')
var artigo_video = document.getElementById('artigos_video')
var artigo_video_1 = document.getElementById("vi")
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

console.log(w_wd)
if(w_wd >=360 && w_wd <=980){
    console.log("Em construção - Estamos atualizando")
}