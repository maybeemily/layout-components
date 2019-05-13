import styles from './index.css';

const dogsArray = ['spot', 'rover', 'bingo', 'joe'];

const root = document.getElementById('root');
const ul = document.createElement('ul');
ul.className = styles.dogs;
root.appendChild(ul);

dogsArray.forEach(dog => {
  const liDog = document.createElement('li');
  liDog.textContent = dog;
  ul.appendChild(liDog);
});
