
var min = true
var i = 0;
var itens = document.querySelectorAll("#historia article")
var article_hist =  document.getElementById("historia")
let escondido = true
const articles = document.querySelectorAll('#historia article')
articles.forEach((element, index)=>{
   if(index!=0){
      element.style.visibility = 'hidden'
   }
})



document.getElementById("btn-mais").addEventListener('click',()=>{
   if(escondido){
      articles.forEach((element, index)=>{
            if(index!=0){
                  document.getElementById('btn-mais-text').innerHTML = '^'
                  article_hist.style.height="2800px"
                  element.style.visibility = 'visible'    
            }
      })
      escondido = false 
   }else{
      articles.forEach((element, index)=>{
         if(index!=0){
               document.getElementById('btn-mais-text').innerHTML = 'V'
               article_hist.style.height="800px"
               element.style.visibility = 'hidden'    
         }
   })
   escondido = true
   }
})

