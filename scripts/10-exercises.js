//10d
function toggle (element) {
    if (document.querySelector(element).classList.contains('is-toggled')) {
        document.querySelector(element).classList.remove('is-toggled');
    } else {
        document.querySelector(element).classList.add('is-toggled');
    }
}

function toggleOne (selector) {
    const button = document.querySelector(selector);

    if (!button.classList.contains('is-toggled')) {

        // Before turning this button ON, check if there's
        // already a button that's turned ON and turn it OFF.
        turnOffPreviousButton();
    
        button.classList.add('is-toggled');
        } else {
        button.classList.remove('is-toggled');
        }
    
    function turnOffPreviousButton() {
        const previousButton = document.querySelector('.is-toggled');
        if (previousButton) {
        previousButton.classList.remove('is-toggled');
        }
    }
}

//10c
let testButton = document.querySelector('.js-button');

//console.log(testButton.innerHTML);

//testButton.innerHTML = 'changed';

//console.log(testButton);

//console.log(testButton.innerHTML);

//console.log(testButton.classList.contains('js-button'));
