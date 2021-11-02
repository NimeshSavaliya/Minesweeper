const width = 10;
const squares = [];

const grid = document.querySelector('.grid');

for (let i = 0; i < width * width; i++) {
  const square = document.createElement('div');

  square.setAttribute('id', i);

  grid.append(square);
  squares.push(square);
}
console.log(squares);
