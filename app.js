const width = 10;
const bombCount = 20;
const squares = [];

const grid = document.querySelector('.grid');

const bombsArray = new Array(bombCount).fill('bomb');
const emptyArray = new Array(width * width - bombCount).fill('valid');
const gameArray = emptyArray.concat(bombsArray);

const shuffledArray = gameArray.sort(() => Math.random() - 0.5);

console.log(shuffledArray);

for (let i = 0; i < width * width; i++) {
  const square = document.createElement('div');

  square.setAttribute('id', i);
  square.classList.add(shuffledArray[i]);

  grid.appendChild(square);
  squares.push(square);

  square.addEventListener('click', () => clicked(square));
}

const clicked = (square) => {
  square.classList.add('selected');
  console.log('clicked');
};
