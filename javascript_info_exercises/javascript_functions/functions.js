const textBox = document.querySelector("#textBox")
const output = document.querySelector("#output")

function textBoxEvent () {
    output.textContent = `You pressed "${event.key}".`
    let eventToReturn = output.textContent
    return output.textContent 
}

//Below is same as textBox.addEventListener('keydown', event => output.textContent = `You pressed "${event.key}".`);
textBox.addEventListener('keydown', textBoxEvent);