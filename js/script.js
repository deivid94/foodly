
const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')



for (let card of cards){
  card.addEventListener("click", function(){
    const img_id = card.getAttribute("id")
    const foodName = card.querySelector("h4").textContent
    const autor = card.querySelector("h5").textContent
    
    
     
    modalOverlay.classList.add('active')  
    
    modalOverlay.querySelector("img").src = `/img/${img_id}.png`
    modalOverlay.querySelector("h4").textContent = foodName
    modalOverlay.querySelector("h5").textContent = autor

    
    
    
    
  
  })
  

}
 document.querySelector('.close-modal').addEventListener("click",function(){
   modalOverlay.classList.remove("active")
 })
 
 




