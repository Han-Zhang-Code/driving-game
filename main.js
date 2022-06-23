var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var angle = 0;
var $car = document.querySelector('img');

var blocks = [];
function addBlock(x, y, w, h) {
  const $block = document.createElement('div');
  $block.style.position = 'absolute';
  // template string
  $block.style.width = `${w}px`;
  $block.style.height = h + 'px';
  $block.style.left = x + 'px';
  $block.style.top = y + 'px';
  $block.style.background = '#0d0c0c';
  document.querySelector('.color').append($block);
  blocks.push({ x, y, w, h });
}

addBlock(220, 0, 39, 134);

document.addEventListener('keydown', turnCar);
function turnCar(event) {
  if (event.key === 'ArrowUp') {
    xSpeed = 0;
    ySpeed = -10;
    angle = -90;
  } else if (event.key === 'ArrowDown') {
    xSpeed = 0;
    ySpeed = 10;
    angle = 90;
  } else if (event.key === 'ArrowRight') {
    xSpeed = 10;
    ySpeed = 0;
    angle = 0;
  } else if (event.key === 'ArrowLeft') {
    xSpeed = -10;
    ySpeed = 0;
    angle = -180;
  }
  if (event.key === ' ') {
    xSpeed = 0;
    ySpeed = 0;
  }
}

setInterval(updatePosition, 16);

function updatePosition() {

  const carRight = x + xSpeed + 100;
  const carLeft = x + xSpeed;
  // const carTop = y + ySpeed;
  // const carBottom = y + ySpeed + 100;
  for (let i = 0; i < blocks.length; i++) {
    const blockRight = blocks[i].x + blocks[i].w;
    const blockLeft = blocks[i].x;
    // const blockTop = blocks[i].y;
    //  const blockBottom = blocks[i].y + blocks[i].h;

    const carRightInsideBlock = carRight > blockLeft && carRight < blockRight;
    const carLeftInsideBlock = carLeft > blockLeft && carLeft < blockRight;
    const blockInsideCarHorizontal = carLeft < blockLeft && carRight > blockRight;

    const overlapsHorizontal = carRightInsideBlock || carLeftInsideBlock || blockInsideCarHorizontal;

    if (overlapsHorizontal) {
      return;
    }
  }

  // Check if car goes outside of walls
  if (carLeft < 0) return;
  if (carRight > 1000) return;

  x = x + xSpeed;
  y = y + ySpeed;
  $car.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(' + angle + 'deg)';
}

// function movingRight() {

//   x += 10;
//   $car.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(0deg)';

//   if (x > 910 || y > 700 || x < 0 || y < 0) {
//     clearInterval(intervalID);
//     carStarted = false;
//   }
//   // if (x > 120 && x < 240 && y <= 124) {
//   //   clearInterval(intervalID);
//   //   carStarted = false;
//   // }
//   // if (x >= 420 && x <= 560 && y <= 350) {
//   //   clearInterval(intervalID);
//   //   carStarted = false;
//   // }
// }
// function movingLeft() {

//   x -= 10;
//   $car.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(-180deg)';

//   if (x > 910 || y > 720 || x < 0 || y < 0) {
//     clearInterval(intervalID);
//     carStarted = false;
//   }
//   // if (x > 120 && x < 240 && y <= 124) {
//   //   clearInterval(intervalID);
//   //   carStarted = false;
//   // }
//   // if (x >= 420 && x <= 560 && y <= 350) {
//   //   clearInterval(intervalID);
//   //   carStarted = false;
//   // }
// }
// function movingUp() {

//   y -= 10;
//   $car.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(-90deg)';

//   if (x > 910 || y > 720 || x < -10 || y < -10) {
//     clearInterval(intervalID);
//     carStarted = false;
//   }
//   // if (x > 120 && x < 240 && y <= 134) {
//   //   clearInterval(intervalID);
//   //   carStarted = false;
//   // }
//   // if (x >= 440 && x < 540 && y <= 350) {
//   //   clearInterval(intervalID);
//   //   carStarted = false;
//   // }
// }
// function movingDown() {

//   y += 10;
//   $car.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(90deg)';

//   if (x > 910 || y > 720 || x < -10 || y < -10) {
//     clearInterval(intervalID);
//     carStarted = false;
//   }
//   // if (x > 120 && x < 240 && y <= 134) {
//   //   clearInterval(intervalID);
//   //   carStarted = false;
//   // }
//   // if (x >= 440 && x < 540 && y <= 350) {
//   //   clearInterval(intervalID);
//   //   carStarted = false;
//   // }
// }
