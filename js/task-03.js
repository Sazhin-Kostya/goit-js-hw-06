const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallary = document.querySelector('.gallery');

const imgGallery = images.map(image => {
  const liEl = document.createElement('li');
  liEl.classList.add('.list');

  const emageEl = document.createElement('img');
  emageEl.src = image.url;
  emageEl.alt = image.alt;
  emageEl.width = 480;

  liEl.append(emageEl);
  console.log(liEl);
  gallary.append(liEl);
})

//
//const ingredients = [
 // 'Potatoes',
 // 'Mushrooms',
 // 'Garlic',
 // 'Tomatos',
 // 'Herbs',
 // 'Condiments',
//];

//const ingredientList = ingredients.map(ingredient => {
 // const listEl = document.createElement('li');
 // listEl.classList.add('.item');
 // listEl.textContent = ingredient;
 

 // return listEl;
//});
//console.log(ingredientList);

//const ingredientAppList = document.querySelector('#ingredients');
//ingredientAppList.append(...ingredientList);
