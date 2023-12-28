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
  // const choiceButtons=document.querySelectorAll('.choice-btn');
  const gameDiv=document.querySelector('.game');
  const resultsDiv=document.querySelector('.results');
  const resultDivs=document.querySelectorAll('.results__result');
  const resultWinner = document.querySelector('.results__winner');
  const resultText = document.querySelector('.results__text');
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
    displayWinner([choice, aiChoice]);
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

  gameDiv.classList.toggle("hidden");
  resultsDiv.classList.toggle('hidden')
  resultsDiv.classList.toggle('grid')
}

function displayWinner(results){
  setTimeout(()=>{
    const userWins= isWinner(results)
    const aiWins= isWinner(results);

    if(userWins){
      resultText.innerText='YOU WIN'
    }else if (aiWins){
      resultText.innerText='YOU LOOSE'
    }else{
      resultText.innerText='DRAW'
    }
  },1000)

  resultWinner.classList.toggle('hidden')
  resultsDiv.classList.toggle('show-winner')
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