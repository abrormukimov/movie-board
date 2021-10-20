const fetchMeals = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken');
  return response.json();
};

export default fetchMeals;

//involvement api = https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6UlXEVzMxLrY3bfiZ0o/likes/