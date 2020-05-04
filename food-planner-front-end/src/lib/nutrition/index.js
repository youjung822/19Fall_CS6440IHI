const API_KEY = "46bb16cfd8c54a4bad84ab9b7f7ac473";

function generateUrl(id) {
  return `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${API_KEY}`;
}

export async function getNutrition(id) {
  const response = await fetch(generateUrl(id), {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  const myJson = await response.json();

  return myJson;
}
