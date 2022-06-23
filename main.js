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
  $block.style.width = `${w}px`;
  $block.style.height = h + 'px';
  $block.style.left = x + 'px';
  $block.style.top = y + 'px';
  $block.style.background = '#0d0c0c';
  document.querySelector('.color').append($block);
  blocks.push({ x, y, w, h });
}

addBlock(220, 0, 39, 134);
addBlock(520, 0, 39, 350);
addBlock(0, 250, 364, 49);
addBlock(307, 413, 188, 174);
addBlock(0, 711, 188, 89);
addBlock(459, 711, 188, 89);
addBlock(600, 501, 230, 49);
addBlock(812, 270, 188, 81);

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

  var carRight = x + xSpeed + 100;
  var carLeft = x + xSpeed;
  var carTop = y + ySpeed;
  var carBottom = y + ySpeed + 100;
  for (let i = 0; i < blocks.length; i++) {
    var blockRight = blocks[i].x + blocks[i].w;
    var blockLeft = blocks[i].x;
    var blockTop = blocks[i].y;
    var blockBottom = blocks[i].y + blocks[i].h;

    var carRightInsideBlock = carRight > blockLeft && carRight < blockRight;
    var carLeftInsideBlock = carLeft > blockLeft && carLeft < blockRight;
    var blockInsideCarHorizontal = carLeft < blockLeft && carRight > blockRight;
    var carTopInsideBlock = carTop < blockBottom && carTop > blockTop;
    var carBottomInsideBlock = carBottom > blockTop && carBottom < blockBottom;
    var blockInsideCarVertical = carTop < blockTop && carBottom > blockBottom;

    var overlapsHorizontal = carRightInsideBlock || carLeftInsideBlock || blockInsideCarHorizontal;
    var overlapsVertical = carTopInsideBlock || carBottomInsideBlock || blockInsideCarVertical;

    if (overlapsHorizontal && overlapsVertical) {
      return;
    }
  }

  if (carLeft < 0) return;
  if (carRight > 1000) return;
  if (carTop < 0) return;
  if (carBottom > 799) return;

  x = x + xSpeed;
  y = y + ySpeed;
  $car.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(' + angle + 'deg)';
}
