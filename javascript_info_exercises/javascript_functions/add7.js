let numberAfterAddition = document.querySelector('#addBoxOutput');
const addBoxButton = document.querySelector('.addBoxButton'); 

function add7 () {
    let numberToAddTo = document.querySelector('.addBox').value;
    console.log(numberToAddTo);
    numberAfterAddition.textContent = parseInt(numberToAddTo) + 7;
    console.log(numberAfterAddition);
    return numberAfterAddition;
}

addBoxButton.addEventListener('click', add7);