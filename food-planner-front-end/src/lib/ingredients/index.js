export async function lookupIngredients(query) {
  const response = await fetch(
    'https://apps.hdap.gatech.edu/newfoodplanner2backend/ingredients',
    {
      method: 'GET'
    }
  );
  const myJson = await response.json();

  const unique = [...new Set(myJson)];

  return unique
    .filter(name => name.includes(query))
    .map(name => ({
      value: name,
      label: name
    }));
}
