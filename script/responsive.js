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
   let a_link = document.createElement('a')
   a_link.text = "Assistir Aula"
   a_link.href = "#"
   let source = video.innerHTML
   artigo_video_1.remove()
   artigo_video.style.width = "100%"
   artigo_video.style.backgroundImage = 'linear-gradient(to right, darkred 50%, darkblue 50%)'
   artigo_video.appendChild(a_link)   
   video.remove()

   
}