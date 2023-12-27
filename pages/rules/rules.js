"use strict";
const closeRules = document.getElementById('closeModal')

closeRules.addEventListener('click',()=>{
  document.getElementById('RulesModal').classList.toggle('hidden')
})
