const MEAL_API = 'https://www.themealdb.com/api/json/v1/1';
const INVOLVEMENT_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
export const APP_ID = 'EotQWBCIBSjk0iF4aIlc';

export const fetchMeals = async () => {
  const url = `${MEAL_API}/filter.php?c=Seafood`;
  const response = await fetch(url);
  return response.json();
};

export const addComment = async (data) => {
  const url = `${INVOLVEMENT_API_URL}${APP_ID}/comments`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: data.item_id,
      username: data.username,
      comment: data.comment,
    }),
    headers: { 'Content-type': 'application/json' },
  });

  return response;
};

export const fetchComments = async (itemId) => {
  const url = `${INVOLVEMENT_API_URL}${APP_ID}/comments?item_id=${itemId}`;
  const response = await fetch(url);
  return response.json();
};

export const fetchMealById = async (mealId) => {
  const response = await fetch(
    `${MEAL_API}/lookup.php?i=${mealId}`,
  );
  return response.json();
};
