let textInput = '';
const setTextInput = function (event) {
  textInput = event.target.value;
};

const selectCharacter = character => event => {
  let details = document.getElementById('character-details');
  while (details.firstChild) {
    details.removeChild(details.firstChild);
  }
  for (const [key, value] of Object.entries(character)) {
    let characterValue = document.createElement('li');
    characterValue.innerHTML = `${key}: ${value}`;
    details.appendChild(characterValue);
  }
};

const createList = function (list) {
  let listElement = document.getElementById('result-list');
  while (listElement.firstChild) {
    listElement.removeChild(listElement.firstChild);
  }
  for (const value of list) {
    let listItem = document.createElement('li');
    listItem.innerHTML = value.name;
    listItem.addEventListener('click', selectCharacter(value))
    listElement.appendChild(listItem);
  }
};

const geResults = async function (search) {
  const response = await fetch('https://swapi.co/api/people/?search=' + search);
  const data = await response.json();
  return data.results;
};

const search = function (event) {
  console.log('Searching...');
  geResults(textInput).then(results => {
    createList(results);
    console.log('Done searching!');
  });
};

document.getElementById('search-input')
  .addEventListener('input', setTextInput);

document.getElementById('search-button')
  .addEventListener('click', search);