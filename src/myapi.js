export const fetchMeals = async () => {
  const url = `${process.env.MEAL_API}/filter.php?c=Seafood`;
  const response = await fetch(url);
  return response.json();
};

export const addComment = async (data) => {
  const url = `${process.env.INVOLVEMENT_API}/${process.env.APP_ID}/comments`;
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
  const url = `${process.env.INVOLVEMENT_API}/${process.env.APP_ID}/comments?item_id=${itemId}`;
  const response = await fetch(url);
  return response.json();
};

export const fetchMealById = async (mealId) => {
  const response = await fetch(
    `${process.env.MEAL_API}/lookup.php?i=${mealId}`,
  );
  return response.json();
};
