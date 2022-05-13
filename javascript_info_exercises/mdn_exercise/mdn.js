const button = document.querySelector('button');

function greet () {
    const name = prompt('What is your name?');
    alert(`Hello ${name}, nice to see you`);
};

//When button is clicked, call greet function
button.addEventListener('click', greet);