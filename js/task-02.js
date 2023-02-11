const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = ingredients.map(ingredient => {
  const listEl = document.createElement('li');
  listEl.classList.add('.item');
  listEl.textContent = ingredient;
 

  return listEl;
});
console.log(ingredientList);

const ingredientAppList = document.querySelector('#ingredients');
ingredientAppList.append(...ingredientList);