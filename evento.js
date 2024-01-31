const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const times = [...document.querySelectorAll('.time')]
const botao = document.querySelector('#botao')

times.map((upu,por,arr)=>{
  upu.addEventListener("click",(evt)=>{
   const todaDiv = evt.target
   todaDiv.classList.toggle('selecionado')
  })
})
botao.addEventListener('click',()=>{
  const todosTimes = [...document.querySelectorAll('.selecionado')]
  const todosTimes2 = [...document.querySelectorAll('.time:not(.selecionado)')]
  todosTimes.map((upu,pos)=>{
   caixa2.appendChild(upu)
  })
  todosTimes2.map((upu)=>{
    caixa1.appendChild(upu)
  })

})





