
let calculation = localStorage.getItem('calculationLocal') || '';

    // calculation = Number(calculation);
    displayCalculation ();

    console.log(typeof calculation);

    localStorage.setItem('calculationLocal', calculation);
    
    function updateCalculation (value) {
        calculation += value;
        displayCalculation ()
        console.log(calculation);
    };

    function displayCalculation () {
        document.querySelector('.js-display').innerHTML = calculation;
    }
