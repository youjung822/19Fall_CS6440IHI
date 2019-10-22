const API_KEY = '46bb16cfd8c54a4bad84ab9b7f7ac473';

function generateUrl(query) {
  return `https://api.spoonacular.com/food/ingredients/autocomplete?query=${query}&number=3&apiKey=${API_KEY}`;
}

export async function lookupIngredients(query) {
  console.log('sending query');
  const response = await fetch(generateUrl(query), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const myJson = await response.json();

  return myJson.map(({ name }) => ({
    value: name,
    label: name
  }));
}
