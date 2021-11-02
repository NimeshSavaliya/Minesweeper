const width = 10;
const bombCount = 20;
const squares = [];
let gameover = false;

const grid = document.querySelector('.grid');

const bombsArray = Array(bombCount).fill('bomb');
const emptyArray = Array(width * width - bombCount).fill('valid');
const gameArray = emptyArray.concat(bombsArray);

const shuffledArray = gameArray.sort(() => Math.random() - 0.5);

for (let i = 0; i < width * width; i++) {
  const square = document.createElement('div');

  square.setAttribute('id', i);
  square.classList.add(shuffledArray[i]);

  grid.appendChild(square);
  squares.push(square);

  square.addEventListener('click', () => clicked(square));
}

for (let i = 0; i < squares.length; i++) {
  total = 0;
  const isLeftEdge = i % width === 0;
  const isRightEdge = i % width === width - 1;

  if (squares[i].classList.contains('valid')) {
    if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains('bomb'))
      total++;
    if (
      i > 9 &&
      !isRightEdge &&
      squares[i + 1 - width].classList.contains('bomb')
    )
      total++;
    if (i > 10 && squares[i - width].classList.contains('bomb')) total++;
    if (
      i > 11 &&
      !isLeftEdge &&
      squares[i - 1 - width].classList.contains('bomb')
    )
      total++;
    if (i < 98 && !isRightEdge && squares[i + 1].classList.contains('bomb'))
      total++;
    if (
      i < 90 &&
      !isLeftEdge &&
      squares[i - 1 + width].classList.contains('bomb')
    )
      total++;
    if (
      i < 88 &&
      !isRightEdge &&
      squares[i + 1 + width].classList.contains('bomb')
    )
      total++;
    if (i < 89 && squares[i + width].classList.contains('bomb')) total++;
    squares[i].setAttribute('data', total);
  }
}

const clicked = (square) => {
  //   let id = square.id;
  if (gameover) {
    return;
  }
  if (
    square.classList.contains('selected') ||
    square.classList.contains('flag')
  ) {
    return;
  }
  if (square.classList.contains('bomb')) {
    console.log('Game Over');
  } else {
    let total = square.getAttribute('data');
    if (total != 0) {
      square.classList.add('selected');
      square.innerHTML = total;
      return;
    }
    checksquare(square);
  }
  square.classList.add('selected');
};

const checksquare = (square) => {
  const id = square.id;
  const leftEdge = id % width === 0;
  const rightEdge = id % width === width - 1;

  setTimeout(() => {
    //upper left
    if (id > 11 && !leftEdge) {
      const newId = squares[parseInt(id) - 1 - width].id;
      const newSquare = document.getElementById(newId);
      clicked(newSquare);
      console.log(newId);
    }
    // up
    if (id > 9) {
      const newId = squares[parseInt(id) - width].id;
      const newSquare = document.getElementById(newId);
      clicked(newSquare);
      console.log('U');
    }
    // upper right
    if (id > 10 && !rightEdge) {
      const newId = squares[parseInt(id) + 1 - width].id;
      const newSquare = document.getElementById(newId);
      clicked(newSquare);
      console.log('UR');
    }
    //right
    if (id < 98 && !rightEdge) {
      const newId = squares[parseInt(id) + 1].id;
      const newSquare = document.getElementById(newId);
      clicked(newSquare);
      console.log('R');
    }
    // left
    if (id > 0 && !leftEdge) {
      const newId = squares[parseInt(id) - 1].id;
      const newSquare = document.getElementById(newId);
      clicked(newSquare);
      console.log('L');
    }
    // lower left
    if (id < 90 && !leftEdge) {
      const newId = squares[parseInt(id) - 1 + width].id;
      const newSquare = document.getElementById(newId);
      clicked(newSquare);
      console.log('LL');
    }
    // down
    if (id < 89) {
      const newId = squares[parseInt(id) + width].id;
      const newSquare = document.getElementById(newId);
      clicked(newSquare);
      console.log('D');
    }
    // lower right
    if (id < 88 && !rightEdge) {
      const newId = squares[parseInt(id) + 1 + width].id;
      const newSquare = document.getElementById(newId);
      clicked(newSquare);
      console.log('LR');
    }
  }, 10);
};
