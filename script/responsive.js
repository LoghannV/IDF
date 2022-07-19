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
   a_link.href = "#aulas"
   var modal = document.createElement('div')
   let video_salvo = video
   artigo_video_1.remove()
   artigo_video.style.width = "100%"
   artigo_video.style.backgroundImage = 'linear-gradient(to right, darkred 50%, darkblue 50%)'
   artigo_video.appendChild(a_link)   
   video.remove()
   let ativo_modal = false
   a_link.addEventListener("click",()=>{
        if(!ativo_modal){
        modal.classList.add('modal')
        modal.appendChild(video_salvo)
        document.body.appendChild(modal)
        a_link.text ='Fechar Aula'
        ativo_modal = true
        }else{
            modal.remove()
            a_link.text = "Assistir Aula"
            ativo_modal = false
        }
   })

   
}