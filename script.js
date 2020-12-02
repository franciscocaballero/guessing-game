'use strict';
// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = 'Correct Number!🎉'
let score = 20;
let highScore = 0;
//Sercrect Number
let secretNumber = Math.trunc(Math.random() * 20 + 1);

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '😡 No Number!!!';
        displayMessage('😡 No Number!!!')

        // When player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number!🎉'
        displayMessage('Correct Number!🎉')

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = score
        }

        //When guess is wrong 
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High' : '📉 Too Low'
            displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '🤯 You lost the Game!'
            displayMessage('🤯 You lost the Game!')
            document.querySelector('.score').textContent = 0;

        }
    }


    // // When guess is too high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too High'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '🤯 You lost the Game!'
    //         document.querySelector('.score').textContent = 0;

    //     }
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too Low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '🤯 You lost the Game!'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
})

const playAgain = document.querySelector('.again');

playAgain.addEventListener('click', function () {
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222'
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = 'Start Guessing...';
    displayMessage('Start Guessing...')
    document.querySelector('.guess').value = ' ';
    document.querySelector('.number').style.width = '15rem';

})