var x = 0;
// var y = 0;
var $car = document.querySelector('img');
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

  if (event.key === ' ') {
    //   var intervalID = setInterval(movingRight, 16);
    movingRight();
  }

}
function movingRight() {
  x += 10;
  document.getElementById('car').style.transform = 'rotate(0deg) translate(' + x + 'px)';
}
