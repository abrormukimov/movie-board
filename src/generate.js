const elementGenerator = (typeName, className) => {
  const element = document.createElement(typeName);
  if (className) element.className = className;
  return element;
};

function mealCounter() {
  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken'))
    .then((response) => response.json())
    .then((data) => {
      linkOne.textContent = `Meals (${data.meals.length})`;
    });
}
mealCounter();

export default elementGenerator; 
export default mealCounter;

