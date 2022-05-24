//a <p> with red text that says “Hey I’m red!”
//an <h3> with blue text that says “I’m a blue h3!”

const container = document.querySelector('.container');

const containerPContent = document.createElement('p');
containerPContent.classList.add('containerParagraph');
containerPContent.textContent = "Hey I'm red!";

containerPContent.style.color = "red";
container.appendChild(containerPContent);

//
const containerHeadThreeContent = document.createElement('h3');
containerHeadThreeContent.classList.add('containerHeaderThree');
containerHeadThreeContent.textContent = "I'm a blue h3!";

containerHeadThreeContent.style.color = "blue";

container.appendChild(containerHeadThreeContent);

//
//a <div> with a black border and pink background color with the following elements inside of it:
//another <h1> that says “I’m in a div”
//a <p> that says “ME TOO!”
const containerBodyDiv = document.createElement('div');
containerBodyDiv.classList.add('containerBodyDiv');

containerBodyDiv.style.borderColor = 'black';
containerBodyDiv.style.background = 'pink';

bodyDivHeader = document.createElement('h1');
bodyDivHeader.classList.add('bodyDivHeader');

bodyDivHeader.textContent = "I'm in a div";

containerBodyDiv.appendChild(bodyDivHeader)

bodyDivParagraph = document.createElement('h1');
bodyDivHeader.classList.add('bodyDivParagraph');

bodyDivParagraph.textContent = "ME TOO!";

containerBodyDiv.appendChild(bodyDivParagraph)


container.appendChild(containerBodyDiv)