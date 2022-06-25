
var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var angle = 0;
var count = 0;
var start = Date.now();
var $car = document.querySelector('img');
var $selectPopUp = document.querySelector('.popup');
document.querySelector('#close').addEventListener('click', function () {
  $selectPopUp.className = 'popup row hidden';
});
var $selectText = document.querySelector('#text');
var $selectTime = document.querySelector('#time');
var $selectTryAgain = document.querySelector('.try-again');
$selectTryAgain.addEventListener('click', function () {
  $selectPopUp.className = 'popup row hidden';
  start = Date.now();
});
var blocks = [];
function addBlock(x, y, w, h) {
  var $block = document.createElement('div');
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
addBlock(610, 501, 230, 49);
addBlock(812, 270, 188, 81);

var coins = [];
function addCoins(x, y) {
  var $coin = document.createElement('img');
  $coin.setAttribute('src', 'images/coin.png');
  $coin.setAttribute('class', 'coins');
  $coin.setAttribute('id', 'coins');
  $coin.style.width = '50px';
  $coin.style.left = x + 'px';
  $coin.style.top = y + 'px';
  document.querySelector('.color').append($coin);
  coins.push({ x, y });
}

addCoins(600, 20);
addCoins(20, 110);
addCoins(800, 150);
addCoins(110, 190);
addCoins(330, 100);
addCoins(100, 330);
addCoins(450, 200);
addCoins(600, 300);
addCoins(900, 500);
addCoins(300, 730);
addCoins(800, 730);
addCoins(700, 150);
addCoins(450, 16);
addCoins(530, 466);

addCoins(630, 400);
addCoins(630, 600);
addCoins(400, 630);
addCoins(500, 630);
addCoins(700, 60);
addCoins(100, 430);
addCoins(200, 430);
addCoins(100, 530);

var rockets = [];
function addRocket(x, y) {
  var $rocket = document.createElement('img');
  $rocket.setAttribute('src', 'images/rocket2.png');
  $rocket.setAttribute('class', 'rockets');
  $rocket.setAttribute('id', 'rockets');
  $rocket.style.width = '50px';
  $rocket.style.left = x + 'px';
  $rocket.style.top = y + 'px';
  document.querySelector('.color').append($rocket);
  rockets.push({ x, y });
}

addRocket(200, 607);
addRocket(200, 148);
addRocket(700, 273);
addRocket(900, 600);
addRocket(300, 607);
addRocket(20, 430);
addRocket(790, 390);

var snail = [];
function addSnail(x, y) {
  var $snail = document.createElement('img');
  $snail.setAttribute('src', 'images/snail.png');
  $snail.setAttribute('class', 'snail');
  $snail.setAttribute('id', 'snail');
  $snail.style.width = '50px';
  $snail.style.left = x + 'px';
  $snail.style.top = y + 'px';
  document.querySelector('.color').append($snail);
  snail.push({ x, y });
}
addSnail(400, 300);
addSnail(800, 630);
addSnail(600, 150);
addSnail(110, 110);
addSnail(350, 170);
addSnail(700, 630);
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

    var carRightInsideBlock = carRight >= blockLeft && carRight <= blockRight;
    var carLeftInsideBlock = carLeft >= blockLeft && carLeft < blockRight;
    var blockInsideCarHorizontal = carLeft <= blockLeft && carRight >= blockRight;
    var carTopInsideBlock = carTop <= blockBottom && carTop >= blockTop;
    var carBottomInsideBlock = carBottom >= blockTop && carBottom <= blockBottom;
    var blockInsideCarVertical = carTop <= blockTop && carBottom >= blockBottom;

    var overlapsHorizontal = carRightInsideBlock || carLeftInsideBlock || blockInsideCarHorizontal;
    var overlapsVertical = carTopInsideBlock || carBottomInsideBlock || blockInsideCarVertical;

    if (overlapsHorizontal && overlapsVertical) {
      return;
    }
  }
  var $coinsImg = document.querySelectorAll('.coins');
  for (var i = 0; i < coins.length; i++) {

    var coinRight = coins[i].x + 50;
    var coinLeft = coins[i].x;
    var coinTop = coins[i].y;
    var coinBottom = coins[i].y + 50;

    var carRightInsidecoin = carRight >= coinLeft && carRight <= coinRight;
    var carLeftInsidecoin = carLeft >= coinLeft && carLeft < coinRight;
    var coinInsideCarHorizontal = carLeft <= coinLeft && carRight >= coinRight;
    var carTopInsidecoin = carTop <= coinBottom && carTop >= coinTop;
    var carBottomInsidecoin = carBottom >= coinTop && carBottom <= coinBottom;
    var coinInsideCarVertical = carTop <= coinTop && carBottom >= coinBottom;

    var getCoinHorizontal = carRightInsidecoin || carLeftInsidecoin || coinInsideCarHorizontal;
    var getCoinVertical = carTopInsidecoin || carBottomInsidecoin || coinInsideCarVertical;

    if (getCoinHorizontal && getCoinVertical) {
      count++;
      $coinsImg[i].setAttribute('class', 'hidden');

      coins.splice(i, 1);

    }
  }

  var $rocketImg = document.querySelectorAll('.rockets');
  for (var j = 0; j < rockets.length; j++) {

    var rocketRight = rockets[j].x + 50;
    var rocketLeft = rockets[j].x;
    var rocketTop = rockets[j].y;
    var rocketBottom = rockets[j].y + 97.27;

    var carRightInsiderocket = carRight >= rocketLeft && carRight <= rocketRight;
    var carLeftInsiderocket = carLeft >= rocketLeft && carLeft < rocketRight;
    var rocketInsideCarHorizontal = carLeft <= rocketLeft && carRight >= rocketRight;
    var carTopInsiderocket = carTop <= rocketBottom && carTop >= rocketTop;
    var carBottomInsiderocket = carBottom >= rocketTop && carBottom <= rocketBottom;
    var rocketInsideCarVertical = carTop <= rocketTop && carBottom >= rocketBottom;

    var getrocketHorizontal = carRightInsiderocket || carLeftInsiderocket || rocketInsideCarHorizontal;
    var getrocketVertical = carTopInsiderocket || carBottomInsiderocket || rocketInsideCarVertical;

    if (getrocketHorizontal && getrocketVertical) {

      $rocketImg[j].setAttribute('class', 'hidden');
      xSpeed *= 2;
      ySpeed *= 2;
      rockets.splice(j, 1);

    }
  }

  var $snailImg = document.querySelectorAll('.snail');
  for (var k = 0; k < snail.length; k++) {

    var snailRight = snail[k].x + 50;
    var snailLeft = snail[k].x;
    var snailTop = snail[k].y;
    var snailBottom = snail[k].y + 50;

    var carRightInsidesnail = carRight >= snailLeft && carRight <= snailRight;
    var carLeftInsidesnail = carLeft >= snailLeft && carLeft < snailRight;
    var snailInsideCarHorizontal = carLeft <= snailLeft && carRight >= snailRight;
    var carTopInsidesnail = carTop <= snailBottom && carTop >= snailTop;
    var carBottomInsidesnail = carBottom >= snailTop && carBottom <= snailBottom;
    var snailInsideCarVertical = carTop <= snailTop && carBottom >= snailBottom;

    var getsnailHorizontal = carRightInsidesnail || carLeftInsidesnail || snailInsideCarHorizontal;
    var getsnailVertical = carTopInsidesnail || carBottomInsidesnail || snailInsideCarVertical;

    if (getsnailHorizontal && getsnailVertical) {

      $snailImg[k].setAttribute('class', 'hidden');
      xSpeed /= 2;
      ySpeed /= 2;
      snail.splice(k, 1);

    }
  }

  var $coinsHiddenImg = document.querySelectorAll('#coins');
  var $rocketsHiddenImg = document.querySelectorAll('#rockets');
  var $snailHiddenImg = document.querySelectorAll('#snail');
  if (x > 850 && y < 50) {
    x = 0;
    y = 0;
    xSpeed = 0;
    ySpeed = 0;
    var end = Date.now();
    var elapsed = end - start;
    $selectPopUp.className = 'popup row';
    $selectText.textContent = 'Total Coins Collected:  ' + count;
    $selectTime.textContent = 'Total Time Used:  ' + (elapsed / 1000).toFixed(2) + ' seconds';
    for (var a = 0; a < $coinsHiddenImg.length; a++) {
      $coinsHiddenImg[a].setAttribute('class', 'coins');
    }
    for (var b = 0; b < $rocketsHiddenImg.length; b++) {
      $rocketsHiddenImg[b].setAttribute('class', 'rockets');
    }
    for (var c = 0; c < $snailHiddenImg.length; c++) {
      $snailHiddenImg[c].setAttribute('class', 'snail');
    }
    coins = [{ x: 600, y: 20 }, { x: 20, y: 110 }, { x: 800, y: 150 }, { x: 110, y: 190 }, { x: 330, y: 100 },
      { x: 100, y: 330 }, { x: 450, y: 200 }, { x: 600, y: 300 }, { x: 900, y: 500 }, { x: 300, y: 730 },
      { x: 800, y: 730 }, { x: 700, y: 150 }, { x: 450, y: 16 }, { x: 530, y: 466 }, { x: 630, y: 400 },
      { x: 630, y: 600 }, { x: 400, y: 630 }, { x: 500, y: 630 }, { x: 700, y: 60 }, { x: 100, y: 430 },
      { x: 200, y: 430 }, { x: 100, y: 530 }];

    rockets = [{ x: 200, y: 607 }, { x: 200, y: 148 }, { x: 700, y: 273 }, { x: 900, y: 600 }, { x: 300, y: 607 },
      { x: 20, y: 430 }, { x: 790, y: 390 }];
    snail = [{ x: 400, y: 300 }, { x: 800, y: 630 }, { x: 600, y: 150 }, { x: 110, y: 110 }, { x: 350, y: 170 }, { x: 700, y: 630 }];
    count = 0;
  }

  if (carLeft < 0) return;
  if (carRight > 1000) return;
  if (carTop < 0) return;
  if (carBottom > 800) return;

  x = x + xSpeed;
  y = y + ySpeed;
  $car.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(' + angle + 'deg)';
}
