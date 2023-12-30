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

// Get the open-rules-btn element
const openRulesBtn = document.querySelector('.open-rules-btn');

// Add an event listener for window resize
window.addEventListener('resize', function() {
  // Check the window width
  if (window.innerWidth < 768) {
    // If window width is less than 768px, add the "phone" class
    openRulesBtn.classList.add('phone');
  } else {
    // If window width is 768px or more, remove the "phone" class
    openRulesBtn.classList.remove('phone');
  }
});

// Optionally, you can also check the initial window width on page load
if (window.innerWidth < 768) {
  openRulesBtn.classList.add('phone');
}
