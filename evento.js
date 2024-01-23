// let time = document.querySelector('#fl') 
const todos = [...document.querySelectorAll('.time')]
todos.map((upu, ind)=>{
 upu.addEventListener('click',(evt)=>{
   const des = evt.target
   des.classList.add('destaque')
   console.log(upu. id + 'foi clicado')
   
})   
})
// let msg = () => {
    
//  alert('Flamengo maior Time do Brasilo')
   
// }




