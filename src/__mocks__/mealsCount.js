const mealsMock = () => {
  const result = Promise.resolve(
    new Array(27).fill({
      idMeal: '52959',
      strMeal: 'Mock for meal counter',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/',
    }),
  );
  return result;
};

export default mealsMock;
