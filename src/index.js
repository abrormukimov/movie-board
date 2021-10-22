import './style.css';
import Logo from './logo.svg';
import likeImage from './Like.svg';
import {
  fetchMeals, addComment, fetchComments, fetchMealById, APP_ID,
} from './myapi.js';
import { postLikes, getLikes } from './likeFunctions.js';

const elementGenerator = (typeName, className) => {
  const element = document.createElement(typeName);
  if (className) element.className = className;
  return element;
};

const dismisAlert = (alertDiv) => {
  setTimeout(() => {
    alertDiv.classList.remove('success', 'error');
    alertDiv.classList.add('invisible');
  }, 5000);
};

const header = elementGenerator('header');
const logo = elementGenerator('img', 'logo');
logo.src = Logo;
const navigation = elementGenerator('nav');
const uList = elementGenerator('ul');
const listOne = elementGenerator('li', 'meals');
const linkOne = elementGenerator('a');
linkOne.href = '#';

function mealCounter() {
  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((response) => response.json())
    .then((data) => {
      linkOne.textContent = `Meals (${data.meals.length})`;
    });
}
mealCounter();

const listTwo = elementGenerator('li');
const linkTwo = elementGenerator('a');
linkTwo.href = '#';
linkTwo.textContent = 'Vegetarian';

const listThree = elementGenerator('li');
const linkThree = elementGenerator('a');
linkThree.href = '#';
linkThree.textContent = 'Diary';

const footer = elementGenerator('footer');
footer.textContent = 'Created by Tufoin and Abror under CC licence';

const root = document.getElementById('root');

const main = elementGenerator('main');

const getMealComments = async (popupSection, mealId) => {
  // await setMealCommentsInStore(mealId);
  // const commentsLength = await getCommentsLength(mealId);
  // const comments = JSON.parse(localStorage.getItem('comments'));
  const comments = await fetchComments(mealId);
  document.querySelector('.comments-div h3').textContent = `Comments ( ${comments.length || 0} )`;
  if (!comments.error) {
    let commentMarkup = '';
    const commentsTag = popupSection.querySelector('.comments-list');
    for (let i = 0; i < comments.length; i += 1) {
      commentMarkup += `<p> ${comments[i].creation_date} ${comments[i].username} : ${comments[i].comment} </p>`;
    }
    commentsTag.innerHTML = commentMarkup;
  }
};


const createPopup = (meal) => {
  const popupSection = elementGenerator('section', 'popup-window invisible');
  const popupMarkup = ` 
    <small class='close-menu'>&times;</small>   
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
    <div class='alert'></div>
    <h3></h3>
    <div class="comments-list"></div>
  </div>
  <h3>Add a comment</h3>
  <form>
    <div class="input-group">
      <input type="text" id="nameInput" placeholder="Your name" required/>
    </div>
    <div class="input-group">
      <textarea
        name=""
        id="commentInput"
        cols="30"
        rows="10"
        placeholder="Your insights"
      required></textarea>
    </div>
    <div class=''button-div>
    <button type='submit' class='submit-comment-btn'> Comment </button>
    </div>
  </form>
</div>
`;
  popupSection.innerHTML = popupMarkup;
  commentCreator(popupSection, meal.id);
  getMealComments(popupSection, meal.id);
  displayMealDetails(popupSection, meal.id);

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
    id: '',
    title: '',
    image: '',
  };

  for (let i = 0; i < divs.length; i += 1) {
    const btn = divs[i].children[2];
    btn.addEventListener('click', (e) => {
      const mealTitle = e.target.parentElement.children[1].children[0].textContent;
      const imageSrc = e.target.parentElement.children[0].src;
      mealDetails.id = e.target.parentElement.id;
      mealDetails.title = mealTitle;
      mealDetails.image = imageSrc;
      createPopup(mealDetails);
    });
  }
};

const getMeals = async () => {
  const likes1 = getLikes(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes/`,
  );

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
    const heart = elementGenerator('img');
    heart.src = likeImage;
    heart.alt = 'heart-image';
    const like = elementGenerator('p');
    like.textContent = '0 like';

    heart.addEventListener('click', async (e) => {
      e.preventDefault();
      await postLikes(
        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes/`,
        {
          item_id: meal.id,
        },
      );
      const prevLikes = like.textContent.split(' ')[0];
      like.innerHTML = `${parseInt(prevLikes, 10) + 1} likes`;
    });

    likes1.then((data) => {
      const foundItem = data.find((item) => meal.id === item.item_id);
      like.textContent = `${foundItem?.likes || 0} likes`;
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

header.appendChild(logo, navigation);

root.append(header, main, footer);
