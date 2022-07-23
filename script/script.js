
const itens = document.querySelectorAll("#historia article")
const article_hist =  document.getElementById("historia")
const articles = document.querySelectorAll('#historia article')
const texto_do_botao = document.getElementById("btn-mais-text")



let revela = false
const click_btn = document.getElementById("btn-mais").addEventListener('click',()=>{
   
   if(!revela){
      articles.forEach((element,index)=>{
         if(index!=0){
            element.classList.add("revela")
            element.style.visibility = 'visible'
         }
      })
      texto_do_botao.innerHTML = "^"
      article_hist.style.height= "2800px"
      revela = true
   }else{
      articles.forEach((element,index)=>{
         if(index!=0){
            element.classList.remove("revela") 
         }
      })
      texto_do_botao.innerHTML = "V"
      article_hist.style.height= "800px"
      revela = false
   }
})

const popup = document.getElementById('popup').addEventListener('click',function(){
  this.remove()
  document.getElementById('pop').remove() 
  document.documentElement.style.setProperty('--visible','visible')
})