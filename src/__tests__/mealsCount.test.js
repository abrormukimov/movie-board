import mealsMock from '../__mocks__/mealsCount';

test('Should count the total number of meals', async () => {
  const meals = await mealsMock();
  const count = meals.length;
  expect(count).toBe(27);
});
