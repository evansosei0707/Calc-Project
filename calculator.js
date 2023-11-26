let calculation = JSON.parse(localStorage.getItem('savedResult')) || '';

function updateCalculator(value) {
 calculation += value;

 localStorage.setItem('savedResult', JSON.stringify(calculation));

    document.querySelector('.js-calc-total').innerHTML = calculation;


}
