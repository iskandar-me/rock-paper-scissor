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
  const choiceButtons = document.querySelectorAll(".choice-btn");
  const gameDiv = document.querySelector(".game");
  const resultsDiv = document.querySelector(".results");
  const resultDivs = document.querySelectorAll(".results__result");
  const resultWinner = document.querySelector('.results__winner');
  const resultText = document.querySelector('.results__text');

  const playAgainBtn = document.querySelector('.play-again');
  const scoreNumber = document.querySelector('.score__number')
  let score = 0
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
  resultsDiv.classList.remove('hidden')
  resultsDiv.classList.toggle('grid')
}

function displayWinner(results){
  setTimeout(()=>{
    const userWins= isWinner(results)
    const aiWins= isWinner(results.reverse());

    if(userWins){
      resultText.innerText='YOU WIN';
      resultDivs[0].classList.toggle('winner');
      keepScore(1);
    }else if (aiWins){
      resultText.innerText='YOU LOOSE';
      resultDivs[1].classList.toggle('winner');
      keepScore(-1);
    }else{
      resultText.innerText='DRAW';
    }

  resultWinner.classList.remove('hidden');
  resultsDiv.classList.toggle('show-winner');
  console.log(resultText.innerText);
  },1000)

}

function isWinner(results){
  return results[0].beats===results[1].name;
}

function keepScore(point){
  score+=point
  scoreNumber.innerText=score
}
playAgainBtn.addEventListener('click',()=>{
    gameDiv.classList.toggle('hidden')
    resultsDiv.classList.toggle('hidden')

    resultDivs.forEach(resultDiv=>{
      resultDiv.innerHTML='';
      resultDiv.classList.remove('winner');
    })

    resultText.innerText=''
    resultWinner.classList.toggle('hidden')
    resultsDiv.classList.toggle('show-winner')
})
})//
