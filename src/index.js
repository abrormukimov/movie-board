import './style.css';
import fetchMeals from './myapi.js';
//  import icon from './icon.png';
//  import logoImage from './logo.png';
// eslint-disable-next-line import/no-unresolved
//  import Like from './Like.png';
import elementGenerator from './generate.js';
import { postLikes, getLikes } from './likes.js';

const header = elementGenerator('header');
const logo = document.getElementById('#my-logo');
logo.src = logoImage;
logo.alt = 'restaurant-logo';
const navigation = elementGenerator('nav');
const uList = elementGenerator('ul');
const listOne = elementGenerator('li', 'meals');
const linkOne = elementGenerator('a');
linkOne.href = '#';

function mealCounter() {
  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken')
    .then((response) => response.json())
    .then((data) => {
      linkOne.textContent = `Meals (${data.meals.length})`;
    });
}
mealCounter();

const listTwo = elementGenerator('li');
const linkTwo = elementGenerator('a');
linkTwo.href = '#';
linkTwo.textContent = 'non-Vegetarian';

const listThree = elementGenerator('li');
const linkThree = elementGenerator('a');
linkThree.href = '#';
linkThree.textContent = 'fried';

const footer = elementGenerator('footer');
footer.textContent = 'Created By Tufoin & Abror under CC licence';

const allmain = document.getElementById('#allmain');

const main = elementGenerator('main');

const createPopup = (meal) => {
  const popupSection = elementGenerator('section', 'popup-window invisible');
  const popupMarkup = ` 
    <small class='close-menu'>X</small>   
    <div class='blur-background'> 

    <div class="popup-img-div"><img class="meal-popup-img" src="${meal.image}" alt="meal" /></div>
    <div class="popup-details-div">
    <h1> ${meal.title} </h1>
    <div class="details-list">
        <ul>
        <li>Category: Rice</li>
        <li>Category: Rice</li>
        </ul>
        <ul>
        <li>Category: Rice</li>
        <li>Category: Rice</li>
        </ul>
    </div>
  </div>
  <div class="comments-container">
<div class="comments-div">
  <h3>Comments (3)</h3>
</div>
<h3>Add a comment</h3>
<form>
  <div class="input-group">
    <input type="text" class="nameInput" placeholder="Your name" />
  </div>
  <div class="input-group">
    <textarea
      name=""
      id="commentInput"
      cols="30"
      rows="10"
      placeholder="Your insights"
    ></textarea>
  </div>
  <div class=''button-div>
  <button type='submit' class='submit-comment-btn'> Comment </button>
  </div>
</form>
</div>
`;
  popupSection.innerHTML = popupMarkup;
  popupSection.style.display = 'block';
  main.style.display = 'none';
  document.body.appendChild(popupSection);
  const closePopup = document.querySelector('.close-menu');
  closePopup.addEventListener('click', () => {
    popupSection.remove();
    main.style.display = 'grid';
  });
};

const displayPopup = (mainTag) => {
  const divs = mainTag.children;
  const mealDetails = {
    title: '',
    category: '',
    price: '',
    image: '',
  };

  for (let i = 0; i < divs.length; i += 1) {
    const btn = divs[i].children[2];
    btn.addEventListener('click', (e) => {
      const mealTitle = e.target.parentElement.children[1].children[0].textContent;
      const imageSrc = e.target.parentElement.children[0].src;
      mealDetails.title = mealTitle;
      mealDetails.image = imageSrc;
      createPopup(mealDetails);
    });
  }
};

const getMeals = async () => {
  const data = await fetchMeals();
  data.meals.forEach((meal, index) => {
    meal = elementGenerator('section');
    const picture = elementGenerator('img', 'image');
    picture.src = data.meals[index].strMealThumb;
    picture.alt = 'space-image';

    meal.id = data.meals[index].idMeal;

    const likes = elementGenerator('div', 'likes');
    const paragraph = elementGenerator('p');
    paragraph.textContent = data.meals[index].strMeal;

    const likeCounter = elementGenerator('div', 'like-counter');
    const heart = elementGenerator('img', 'heart');
    heart.src = Like;
    heart.alt = 'heart-image';
    const like = elementGenerator('p');
    like.textContent = '0 likes';

    heart.addEventListener('click', async (e) => {
      e.preventDefault();
      postLikes(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6UlXEVzMxLrY3bfiZ0o/likes/',
        {
          item_id: meal.id,
        },
      );

      const prevLikes = like.textContent.split(' ')[0];
      like.innerHTML = `${parseInt(prevLikes, 10) + 1} likes`;
    });

    const likes1 = getLikes(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Q6UlXEVzMxLrY3bfiZ0o/likes/',
    );

    likes1.then((data) => {
      like.textContent = `${data[index].likes} likes`;
    });

    likeCounter.appendChild(heart);
    likeCounter.appendChild(like);

    likes.appendChild(paragraph);
    likes.appendChild(likeCounter);

    const comments = elementGenerator('button');
    comments.textContent = 'Comments';

    meal.appendChild(picture);
    meal.appendChild(likes);
    meal.appendChild(comments);

    main.appendChild(meal);
  });
  displayPopup(main);
};
getMeals();

listOne.appendChild(linkOne);
listTwo.appendChild(linkTwo);
listThree.appendChild(linkThree);

uList.append(listOne, listTwo, listThree);

navigation.appendChild(uList);

header.append(logo, navigation);

allmain.append(header, main, footer);
