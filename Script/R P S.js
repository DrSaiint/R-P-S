

let score = JSON.parse(localStorage.getItem('score')) 
|| { Wins: 0,
  Losses: 0,
  Tie: 0 };
updatescore();

function computerMove () {
  const random = Math.random();
  let computerM = ``;

    if ( random >= 0 && random < 1/3 )
    { computerM = `Rock` }
    else if ( random > 1/3 && random < 2/3 )
    { computerM = `Paper`}
    else if ( random > 2/3 && random < 1 )
    { computerM = `Scissors`}

    return computerM;
 }


 function playGame ( playerMove ) { 

   const computerM = computerMove();
    
    let result = ``;

   if ( playerMove === `Rock`) { 
    
    if ( computerM === `Rock` ) { result = `Is Tie`}
    else if ( computerM === `Paper` ) { result = `You Lose`}
    else if ( computerM === `Scissors` ) { result = `You Win`} 
   
  }

 else if ( playerMove === `paper` ) { 
   
    if ( computerM === `Rock` ) { result = `You Win`}
    else if ( computerM === `Paper`) { result = `Is Tie`}
    else if ( computerM === `Scissors`) { result = `You Lose`}
    
}

else if ( playerMove === `Scissors`) { 
    
    if ( computerM === `Rock`) { result = `You Lose`}
    else if ( computerM === `Paper`) { result = `You Win`}
    else if ( computerM === `Scissors`) { result = `Is Tie`}
   
}

if (result===`You Win`) { score.Wins = score.Wins + 1}
else if (result===`You Lose`) { score.Losses = score.Losses + 1}
else if ( result===`Is Tie`) { score.Tie = score.Tie + 1}

localStorage.setItem(`score`, JSON.stringify(score) );

updatescore();
moves();
results();

console.log ( `You picked ${playerMove}. Computer picked ${computerM}. So ${result}.
Wins: ${score.Wins}.   Losses: ${score.Losses}.  Tie: ${score.Tie}.`)
   /* alert ( `You picked ${playerMove}. Computer picked ${computerM}. So ${result}.`)*/
 
 function moves(){ document.querySelector(`.moves`)
  .innerHTML = ` You <img src="rps photos/${playerMove}.png" class="litle-image">
  <img src="rps photos/${computerM}.png" class="litle-image"> Computer `; }

  //You ${playerMove} - Computer ${computerM}.


function results (){ document.querySelector('.results')
    .innerHTML =  result; }

}

 function updatescore() {document.querySelector(`.scores`)
.innerHTML = ` Wins: ${score.Wins}. Losses: ${score.Losses}. Tie: ${score.Tie}.`;
};
