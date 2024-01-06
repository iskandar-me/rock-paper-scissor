"use strict";
const closeIcons = document.querySelectorAll(".icon-close");
const background = document.querySelector(".background");
const RulesModal = document.querySelector(".rules");
const openRulesBtn = document.querySelector(".open-rules-btn");

const openModal = () => {
   RulesModal.classList.toggle("active");
   background.classList.toggle("active");
   document.body.style.overflow = "hidden";
};
const closeModal = () => {
   RulesModal.classList.remove("active");
   background.classList.remove("active");
   document.body.style.overflow = "initial";
};
const backgorundBody = () => {
   closeModal();
};
// window.addEventListener('resize', function() {
//   // Check the window width
//   if (window.innerWidth < 768) {
//     // If window width is less than 768px, add the "phone" class
//     openRulesBtn.classList.add('phone');
//   } else {
//     // If window width is 768px or more, remove the "phone" class
//     openRulesBtn.classList.remove('phone');
//   }
// });

// Optionally, you can also check the initial window width on page load
// if (window.innerWidth < 768) {
//   openRulesBtn.classList.add('phone');
// }
