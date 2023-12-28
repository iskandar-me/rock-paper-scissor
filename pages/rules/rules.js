"use strict";
const closeIcons = document.querySelectorAll('.icon-close');
const blocker= document.querySelector('.blocker');
const RulesModal = document.getElementById('RulesModal')
const OpenRules = document.getElementById('OpenRules')

OpenRules.addEventListener('click',()=>{
  RulesModal.classList.remove('hidden')
  blocker.classList.remove('hidden')
  blocker.classList.toggle('opacity-80')
})

closeIcons.forEach((closeIcon)=>{
closeIcon.addEventListener('click',()=>{
  RulesModal.classList.toggle('hidden')
  blocker.classList.toggle('hidden');
  blocker.classList.remove('opacity-80')

  })
})

blocker.addEventListener('click',()=>{
  blocker.classList.toggle('hidden')
  blocker.classList.remove('opacity-80')
  RulesModal.classList.toggle('hidden')
})
