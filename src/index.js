import './style.css';
import fetchMeals from './myapi.js';
import icon from './icon.svg';
import logoImage from './logo.svg';
import Like from './Like.svg';
import elementGenerator from './generate.js';
import mealCounter from './generate.js';
import { postLikes, getLikes } from './likeFunctions';

const header = elementGenerator('header');
const logo = elementGenerator('img', 'logo');
logo.src = logoImage;
logo.alt = 'restaurant-logo';
const navigation = elementGenerator('nav');
const uList = elementGenerator('ul');
const listOne = elementGenerator('li', 'meals');
const linkOne = elementGenerator('a');
linkOne.href = '#';

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

const allmain = document.getElementById('allmain');

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



