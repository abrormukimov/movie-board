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
