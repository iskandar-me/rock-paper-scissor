document.addEventListener('DOMContentLoaded',()=>{
  const CHOICES=[
    {
      name:'paper',
      beats:'rock'
    },
    {
      name:'rock',
      beats:'scissors'
    },
    {
      name:'scissors',
      beats:'paper'
    },
  ]
  const choiceButtons=document.querySelectorAll('.choice-btn')
  const gameDiv=document.querySelector('.game')
  const resultsDiv=document.querySelector('.results')
  const resultDivs=document.querySelectorAll('.results__result')

  // Game Logic
  choiceButtons.forEach((button)=>{
    button.addEventListener('click',() => {
      const choiceName = button.dataset.choice;
      const choice=CHOICES.find(choice => choice.name===choiceName);
      choose(choice)
    })
  })
  function choose(choice){
    const aiChoice=aiChoose();
    displayResults([choice, aiChoice]);
  }

  function aiChoose(){
    const rand=Math.floor(Math.random()*CHOICES.length);
    return CHOICES[rand];
  }

function displayResults(results) {
  resultDivs.forEach((resultDiv, indx) => {
    setTimeout(() => {
      resultDiv.innerHTML = `
        <div class="choice ${results[indx].name}">
          <img src="../../assets/img/${results[indx].name}.svg" alt="${results[indx].name}">
        </div>
      `
    }, indx * 1000);
  });



// Game Logic
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const choiceName = button.dataset.choice;
    const choice = CHOICES.find((choice) => choice.name === choiceName);
    choose(choice);
  });
});

function choose(choice) {
  const aichoice = aiChoose();
  displayResults([choice, aichoice]);
  displayWinner([choice, aichoice]);
}

function aiChoose() {
  const rand = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[rand];
}

}
})
// const =document.querySelectorAll('.shape')
// shapes.forEach((shape)=>{
//   shape.addEventListener('click',()=>{
//     const InitialContent = document.getElementById('InitialContent')
//     InitialContent.classList.toggle('disabled')
//   })
// });

// const OpenRules = document.getElementById('OpenRules')
// OpenRules.addEventListener('click',()=>{
//   document.getElementById('RulesModal').classList.remove('hidden')
// })