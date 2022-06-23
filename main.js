var x = 0;
var y = 0;
var carStarted = false;
var $car = document.querySelector('img');
var intervalID = null;
document.addEventListener('keydown', turnCar);
function turnCar(event) {
  if (event.key === 'ArrowUp') {
    clearInterval(intervalID);
    intervalID = setInterval(movingUp, 16);
    carStarted = true;
  } else if (event.key === 'ArrowDown') {
    clearInterval(intervalID);
    intervalID = setInterval(movingDown, 16);
    carStarted = true;
  } else if (event.key === 'ArrowRight') {
    clearInterval(intervalID);
    intervalID = setInterval(movingRight, 16);
    carStarted = true;
  } else if (event.key === 'ArrowLeft') {
    clearInterval(intervalID);
    intervalID = setInterval(movingLeft, 16);
    carStarted = true;
  }
  if (event.key === ' ' && carStarted === false) {
    intervalID = setInterval(movingRight, 16);
    carStarted = true;
  } else if (carStarted === true && event.key === ' ') {
    clearInterval(intervalID);
    carStarted = false;
  }

}
function movingRight() {

  x += 10;
  $car.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(0deg)';

  if (x > 910 || y > 700 || x < 0 || y < 0) {
    clearInterval(intervalID);
    carStarted = false;
  }
  if (x > 120 && x < 240 && y <= 124) {
    clearInterval(intervalID);
    carStarted = false;
  }
  if (x >= 420 && x <= 560 && y <= 350) {
    clearInterval(intervalID);
    carStarted = false;
  }
}
function movingLeft() {

  x -= 10;
  $car.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(-180deg)';

  if (x > 910 || y > 720 || x < 0 || y < 0) {
    clearInterval(intervalID);
    carStarted = false;
  }
  if (x > 120 && x < 240 && y <= 124) {
    clearInterval(intervalID);
    carStarted = false;
  }
  if (x >= 420 && x <= 560 && y <= 350) {
    clearInterval(intervalID);
    carStarted = false;
  }
}
function movingUp() {

  y -= 10;
  $car.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(-90deg)';

  if (x > 910 || y > 720 || x < -10 || y < -10) {
    clearInterval(intervalID);
    carStarted = false;
  }
  if (x > 120 && x < 240 && y <= 134) {
    clearInterval(intervalID);
    carStarted = false;
  }
  if (x >= 440 && x < 540 && y <= 350) {
    clearInterval(intervalID);
    carStarted = false;
  }
}
function movingDown() {

  y += 10;
  $car.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(90deg)';

  if (x > 910 || y > 720 || x < -10 || y < -10) {
    clearInterval(intervalID);
    carStarted = false;
  }
  if (x > 120 && x < 240 && y <= 134) {
    clearInterval(intervalID);
    carStarted = false;
  }
  if (x >= 440 && x < 540 && y <= 350) {
    clearInterval(intervalID);
    carStarted = false;
  }
}
