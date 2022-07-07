let carRegistered = [];

window.onload = () => {
  let carKey = localStorage.getItem('carInfo')
  carRegistered = carKey ? JSON.parse(carKey) : [];
}

if (document.getElementById('btnSubmitCar')) {
  document.getElementById('btnSubmitCar').addEventListener('click', (event) => {
    if(document.getElementById('carModel').value != '' &
    document.getElementById('carBrand').value != '' &
    document.getElementById('carYear').value != ''){
    event.preventDefault();
  
    let identifier = 0;
      if (carRegistered.length > 0) {
        carRegistered.forEach(car => {
          if (car.identifier == identifier) {
            identifier++;
          }
        })
      }
  
    let carKey = localStorage.getItem('carInfo');
    carRegistered = carKey ? JSON.parse(carKey) : [];
  
    carRegistered.push({
      model: document.getElementById('carModel').value,
      brand: document.getElementById('carBrand').value,
      year: document.getElementById('carYear').value,
      identifier: identifier,
      amount: 0
    })
  
    localStorage.setItem('carInfo', JSON.stringify(carRegistered));
  
    document.querySelector('form').reset();
  }else{
    alert('Insira um cadastro válido!');
  };
  });
};


