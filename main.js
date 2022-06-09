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

}
