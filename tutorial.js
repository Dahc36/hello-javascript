/*fetch('https://swapi.co/api/people/')
  .then(response => {
    response.json();
  })
  .then(response => {
    let personajes = response.results.map(value => value.name);
    console.log(personajes);
  });
*/
const fetchCharacters = async function () {
  let response = await fetch('https://swapi.co/api/people/');
  let data = await response.json();
  const luke = data.results[0];
  response = await fetch(luke.species);
  data = await response.json();
  return data;
};

fetchCharacters()
  .then(response => {
    console.log(response);
  });