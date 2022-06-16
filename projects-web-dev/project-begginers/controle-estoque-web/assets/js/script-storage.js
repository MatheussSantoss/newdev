const carItensObj = JSON.parse(localStorage.getItem('carInfo'));
const inputFilter = document.getElementById('inputFilter');
const modal = document.getElementById('myModal');
const modal2 = document.getElementById('myModal2');
const limit = 200;
let storage = 0;

function addIcon(tdButtons, id) {

  const iconRemove = document.createElement('i');
  iconRemove.setAttribute('title', 'Remover');
  iconRemove.setAttribute('class', 'fa-solid fa-trash');
  iconRemove.setAttribute('style', 'cursor: pointer; margin-inline:.3rem');
  iconRemove.setAttribute('id', `${id}`)
  iconRemove.setAttribute('onclick', `onClickRemove(this)`);
  tdButtons.appendChild(iconRemove);
  
  const iconAddStorage = document.createElement('i');
  iconAddStorage.setAttribute('title', 'Adicionar ao estoque');
  iconAddStorage.setAttribute('class', 'fa-solid fa-plus');
  iconAddStorage.setAttribute('style', 'cursor: pointer; margin-inline: .3rem');
  iconAddStorage.setAttribute('id', `${id}`)
  iconAddStorage.setAttribute('onclick', `onClickAddStorage(event, this, ${id})`);
  tdButtons.appendChild(iconAddStorage);

  const iconRemoveStorage = document.createElement('i');
  iconRemoveStorage.setAttribute('title', 'Remover do estoque');
  iconRemoveStorage.setAttribute('class', 'fa-solid fa-minus');
  iconRemoveStorage.setAttribute('style', 'cursor: pointer; margin-inline: .3rem');
  iconRemoveStorage.setAttribute('id', `${id}`)
  iconRemoveStorage.setAttribute('onclick', `onClickRemoveStorage(event, this, ${id})`);
  tdButtons.appendChild(iconRemoveStorage);
}

function addTable(){  
  const table = document.querySelector('table');
  let tbody = document.querySelector('tbody');
  if (tbody) {
  tbody.remove(); 
  };
  tbody = document.createElement('tbody');
  table.appendChild(tbody);
  carItensObj.forEach((car, index) => {
    const tr = document.createElement('tr');
    const tdButtons = document.createElement('td');
    const tdModel = document.createElement('td');
    const tdBrand = document.createElement('td');
    const tdYear = document.createElement('td');
    const tdStorage = document.createElement('td');

    tdModel.innerHTML = `${car.model}`;
    tdBrand.innerHTML = `${car.brand}`;
    tdYear.innerHTML = `${car.year}`;
    tdStorage.innerHTML = car.amount;
    addIcon(tdButtons, index);
    
    tr.appendChild(tdModel);
    tr.appendChild(tdBrand);
    tr.appendChild(tdYear);
    tr.appendChild(tdStorage);
    tr.appendChild(tdButtons);
    tr.setAttribute('id', car.identifier);
    tbody.appendChild(tr);
  })
}

function onClickRemove(element) {
  console.log(element.id);
  carItensObj.splice(element.id, 1);
  localStorage.setItem('carInfo', JSON.stringify(carItensObj));
  addTable();
  location.reload();
}

function onClickAddStorage(event, element, identifier){
  modal.style.display = "block";
  let trClicked = (event.target.parentNode).parentNode; 
  console.log(trClicked);

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  
  // Verificação para quando o usuário clicar no icon do "X", feche o modal 
  document.getElementById('iconRemove').onclick = function() {
    modal.style.display = "none";
  };

  document.getElementById('addMoveBtn').addEventListener('click', (event) => {
    event.preventDefault();

    carItensObj.forEach((car,index) => {
      if (car.identifier == trClicked.id) {
        if (document.getElementById('addInput').value <= limit) {
          if (Number(document.getElementById('addInput').value) + storage <= 200) {
            car.amount += Number(document.getElementById('addInput').value);
          }else{
            alert('Limite do depósito atingido! O limite é ' + limit);
          }
        }else{
          alert('Limite do depósito atingido! O limite é ' + limit);
        }
      }
    });
    localStorage.setItem('carInfo', JSON.stringify(carItensObj));
    

    document.querySelector('form').reset();
    modal.style.display = "none";
    location.reload();
  })
}

function onClickRemoveStorage(event, element, identifier) {
  modal2.style.display = "block";
  let trClicked = (event.target.parentNode).parentNode; 
  console.log(trClicked);

  window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  };
  
  document.getElementById('iconRemove').onclick = function() {
    modal2.style.display = "none";
  };

  document.getElementById('removeStorageBtn').addEventListener('click', (event) => {
    event.preventDefault();

    carItensObj.forEach((car,index) => {
      if (car.identifier == trClicked.id) {
        if (car.amount > 0) {
          if (car.amount - Number(document.getElementById('removeInput').value) >= 0) {
            car.amount -= Number(document.getElementById('removeInput').value);
          }else{
            alert('Valor inválido!');
          }
        }else{
          alert('Insira um veículo no estoque para poder removê-lo');
        }
      }
    });
    localStorage.setItem('carInfo', JSON.stringify(carItensObj)); 

    document.querySelector('form').reset();
    modal2.style.display = "none";
    location.reload();
  })
}

carItensObj.forEach(car => {
  storage += car.amount;
});

inputFilter.addEventListener('keyup', () => {

  console.log(carItensObj.filter(car => car.model.includes(inputFilter.value)));
})

document.getElementById('storageSpan').innerHTML = storage;
addTable();

// 'paralelepipedo'.includes('txt');
// Ele retornará se o que está dentro do parâmetro existe ou não na string