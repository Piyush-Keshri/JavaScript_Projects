'use strict';

//DOM :- Document Object Model is the Structured representation of HTML Documents.
//       It allows javaScript to access HTML elements and styles to manipulate them.

//DOM is not a part of javaScript.They come web APIs.

let secret_number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  }
  else if (guess === secret_number) {
    document.querySelector('.message').textContent = '🍾Correct Number';
    document.querySelector('.number').textContent = secret_number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    
    if(score > highScore)
    {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

  }
  else if (guess > secret_number) {

    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      document.querySelector('.message').textContent = '💥Game Over💥';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }

  }
  else if (guess < secret_number) {

    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      document.querySelector('.message').textContent = '💥Game Over💥';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click',function()
{
    score = 20;
    secret_number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing ...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value =''; 

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'; 
});
          