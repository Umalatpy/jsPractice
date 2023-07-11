
        let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        };

        function displayResult () {
            document.querySelector('.js-result')
            .innerHTML = `${result}`
        };

        function displayMove () {
            document.querySelector('.js-move')
            .innerHTML = `You
        <img class="move-icon" src="images/${myMove}-emoji.png">
        <img class="move-icon" src="images/${pcMove}-emoji.png">
        Computer`;
        };

        // displayResult ();

        function updateScoreElement () {
            document.querySelector('.js-score')
            .innerHTML = `Wins: ${score.wins}. Losses: 
            ${score.losses}. Ties: ${score.ties}`;
        };

        updateScoreElement ();

        /*
        if (!score) {
            score = {
                wins: 0,
                losses: 0,
                ties: 0
            };
        }
        */

        

        function pickPCmove () {
            randomNumber = Math.random();
            if (randomNumber<=1/3) {
                pcMove = `rock`;
            } else if (randomNumber<=2/3 && randomNumber>1/3) {
                pcMove = `paper`;
            } else {
                pcMove = `scissors`;
            }
            // return 'rock';
        };

        function giveResult () {
            if (pcMove === myMove) {
                result = 'It`s Tie.';
            } else if (pcMove === 'rock' && myMove === 'paper') {
                result = 'You win.';
            } else if (pcMove === 'rock' && myMove === 'scissors') {
                result = 'You lose.';
            } else if (pcMove === 'paper' && myMove === 'rock') {
                result = 'You lose.';
            } else if (pcMove === 'paper' && myMove === 'scissors') {
                result = 'You win.';
            } else if (pcMove === 'scissors' && myMove === 'rock') {
                result = 'You win.';
            }  else if (pcMove === 'scissors' && myMove === 'paper') {
                result = 'You lose.';
            }
            if (result === 'You win.') {
                score.wins += 1;
            } else if (result === 'You lose.') {
                score.losses += 1;
            }else if (result === 'It`s Tie.') {
                score.ties += 1;
            }


            localStorage.setItem('score', JSON.stringify(score));

            updateScoreElement ();

            displayResult ();
            displayMove ();

        };
        let randomNumber = Math.random();
        let pcMove = '';
        let myMove = '';
        let result = '';
