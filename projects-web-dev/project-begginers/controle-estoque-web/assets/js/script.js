let carRegistered = [];

document.getElementById('btnSubmitCar').addEventListener('click', (event) => {
  event.preventDefault();

  let carKey = localStorage.getItem('carInfo');
  carRegistered = carKey ? JSON.parse(carKey) : [];

  carRegistered.push({
    model: document.getElementById('carModel').value,
    brand: document.getElementById('carBrand').value,
    year: document.getElementById('carYear').value
  })

  localStorage.setItem('carInfo', JSON.stringify(carRegistered));

  document.querySelector('form').reset()
});

