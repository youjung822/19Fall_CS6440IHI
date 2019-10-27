const API_KEY = '46bb16cfd8c54a4bad84ab9b7f7ac473';

const rootUrl = 'https://api.spoonacular.com/recipes/complexSearch';

function generateUrl(query, cuisine, intoleranceList, ingredients) {
  let baseQuery = `${rootUrl}?query=${query}&cuisine=${cuisine}&number=5&apiKey=${API_KEY}&addRecipeInformation=true`;

  if (intoleranceList) {
    baseQuery = `${baseQuery}&intolerances=${intoleranceList.join(',')}`;
  }

  if (ingredients) {
    baseQuery = `${baseQuery}&includeIngredients=${ingredients.join(',')}`;
  }

  return baseQuery;
}

export async function lookupRecipes(
  query,
  cuisine,
  intoleranceList,
  ingredients
) {
  const response = await fetch(
    generateUrl(query, cuisine, intoleranceList, ingredients),
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  const myJson = await response.json();

  return myJson && myJson.results ? myJson.results : [];
}
