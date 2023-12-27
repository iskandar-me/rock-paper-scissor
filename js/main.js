document.addEventListener('DOMContentLoaded',()=>{
const shapes=document.querySelectorAll('.shape')
shapes.forEach((shape)=>{
  shape.addEventListener('click',()=>{
    const InitialContent = document.getElementById('InitialContent')
    InitialContent.classList.toggle('disabled')
  })
})
})