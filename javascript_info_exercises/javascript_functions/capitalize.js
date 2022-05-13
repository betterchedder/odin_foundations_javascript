let capitalizedToOutput = document.querySelector('#capitzalizeOutput');
const capitalizeButton = document.querySelector('.capitalizeBoxButton');

function capitalize() {
    let inputToCapitalize = document.querySelector('.capitalizeBox').value;
    capitalizedToOutput.textContent = inputToCapitalize.charAt(0).toUpperCase() + inputToCapitalize.slice(1)
    return capitalizedToOutput
}

capitalizeButton.addEventListener('click', capitalize)