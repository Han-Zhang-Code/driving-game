var x = 0;
// var y = 0;
var carStarted = false;
var $car = document.querySelector('img');
var intervalID = null;
document.addEventListener('keydown', turnCar);
function turnCar(event) {
  if (event.key === 'ArrowUp') {
    $car.className = 'turn-up';
  } else if (event.key === 'ArrowDown') {
    $car.className = 'turn-down';
  } else if (event.key === 'ArrowRight') {
    $car.className = 'turn-right';
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'turn-left';
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
  $car.style.transform = 'translate(' + x + 'px)';
}
