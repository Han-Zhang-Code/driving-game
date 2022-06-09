var $car = document.querySelector('img');
document.addEventListener('keydown', turnCar);
function turnCar(event) {
  if (event.key === 'ArrowUp') {
    $car.className = 'turn-up';
  }

}
