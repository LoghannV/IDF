const elementos = document.querySelectorAll("[data-anima]");
const scale= document.querySelectorAll("[data-scale]")
const animacaoClass = 'animacao';
const ScaleClass = 'volta';
let escreve = 0
const faixa = document.createElement('h4');
const descreve = document.createElement('p')


function animaScroll(){
    const topoPaginaNaJanela = window.pageYOffset +((window.innerHeight)*3)/4;
    elementos.forEach(function(elemento){
        if(topoPaginaNaJanela > elemento.offsetTop){
            elemento.classList.add(animacaoClass);
            scale.forEach((element)=>{
                element.classList.remove(ScaleClass);
            })
        }else{
            elemento.classList.remove(animacaoClass);
            scale.forEach((element)=>{
                
                element.classList.add('volta'); 
            })
        }
    });

}
if(elementos.length){
    window.addEventListener("scroll",function(){
        animaScroll();
    });
}
scale[0].addEventListener("mouseover",()=>{
   console.log(faixa.innerText)
    if(faixa.innerText=='' && faixa.innerText==''){
        faixa.appendChild(document.createTextNode("Faixa Verde"))
        descreve.appendChild(document.createTextNode("Guilherme - XX Anos - breve descrição"))
        console.log("texto escrito")
    }
    scale[0].appendChild(faixa)
    scale[0].appendChild(descreve)
    
   
})
scale[0].addEventListener('mouseleave',()=>{
    try{
        scale[0].removeChild(faixa)
        scale[0].removeChild(descreve)
        console.log("Removeu")
    }catch(e){

    }
    
})