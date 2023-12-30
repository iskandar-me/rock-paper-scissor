"use strict";
const closeIcons = document.querySelectorAll('.icon-close');
const blocker= document.querySelector('.blocker');
const RulesModal = document.querySelector('.rules')
const OpenRules = document.querySelector('.open-rules-btn')

OpenRules.addEventListener('click',()=>{
  RulesModal.classList.toggle('active')
  blocker.classList.toggle('active')
  document.body.style.overflow='hidden'
})

closeIcons.forEach((closeIcon)=>{
closeIcon.addEventListener('click',()=>{
  RulesModal.classList.remove('active')
  blocker.classList.remove('active')
  document.body.style.overflow='scroll'

  })
})

blocker.addEventListener('click',()=>{
  RulesModal.classList.remove('active')
  blocker.classList.remove('active')
  document.body.style.overflow='scroll'

})
