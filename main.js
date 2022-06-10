var x = 0;
var y = 0;
var carStarted = false;
var $car = document.querySelector('img');
var intervalID = null;
document.addEventListener('keydown', turnCar);
function turnCar(event) {
  if (event.key === 'ArrowUp') {
    $car.className = 'turn-up';
    clearInterval(intervalID);
    intervalID = setInterval(movingUp, 16);
    carStarted = true;
  } else if (event.key === 'ArrowDown') {
    $car.className = 'turn-down';
    clearInterval(intervalID);
    intervalID = setInterval(movingDown, 16);
    carStarted = true;
  } else if (event.key === 'ArrowRight') {
    $car.className = 'turn-right';
    clearInterval(intervalID);
    intervalID = setInterval(movingRight, 16);
    carStarted = true;
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'turn-left';
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
}
function movingLeft() {
  x -= 10;
  $car.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(-180deg)';
}
function movingUp() {
  y -= 10;
  $car.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(-90deg)';
}
function movingDown() {
  y += 10;
  $car.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(90deg)';
}
