const carItensObj = JSON.parse(localStorage.getItem('carInfo'));
const modal = document.getElementById('myModal');

function addIcon(tdButtons, id) {
  const iconEdit = document.createElement('i');
  iconEdit.setAttribute('title', 'Editar');
  iconEdit.setAttribute('class', 'fa-solid fa-pencil');
  iconEdit.setAttribute('style', 'cursor: pointer; margin-inline: 0.5rem');
  iconEdit.setAttribute('id', `${id}`)
  iconEdit.setAttribute('onclick', `onClickEdit(this)`);
  tdButtons.appendChild(iconEdit);

  const iconRemove = document.createElement('i');
  iconRemove.setAttribute('title', 'Remover');
  iconRemove.setAttribute('class', 'fa-solid fa-trash');
  iconRemove.setAttribute('style', 'cursor: pointer; margin-inline: .5rem');
  iconRemove.setAttribute('id', `${id}`)
  iconRemove.setAttribute('onclick', `onClickRemove(this)`);
  tdButtons.appendChild(iconRemove);
  
  const iconAddStorage = document.createElement('i');
  iconAddStorage.setAttribute('title', 'Adicionar ao estoque');
  iconAddStorage.setAttribute('class', 'fa-solid fa-plus');
  iconAddStorage.setAttribute('style', 'cursor: pointer; margin-inline: 0.5rem');
  iconAddStorage.setAttribute('id', `${id}`)
  iconAddStorage.setAttribute('onclick', `onClickAddStorage(this)`);
  tdButtons.appendChild(iconAddStorage);

  const iconRemoveStorage = document.createElement('i');
  iconRemoveStorage.setAttribute('title', 'Remover do estoque');
  iconRemoveStorage.setAttribute('class', 'fa-solid fa-minus');
  iconRemoveStorage.setAttribute('style', 'cursor: pointer; margin-inline: 0.5rem');
  iconRemoveStorage.setAttribute('id', `${id}`)
  iconRemoveStorage.setAttribute('onclick', `onClickRemoveStorage(this)`);
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
  carItensObj.forEach((item, index) => {
    const tr = document.createElement('tr');
    const tdButtons = document.createElement('td');
    const tdModel = document.createElement('td');
    const tdBrand = document.createElement('td');
    const tdYear = document.createElement('td');
    const tdStorage = document.createElement('td');

    tdModel.innerHTML = `${item.model}`;
    tdBrand.innerHTML = `${item.brand}`;
    tdYear.innerHTML = `${item.year}`;
    tdStorage.innerHTML = ''
    addIcon(tdButtons, index);
    
    tr.appendChild(tdModel);
    tr.appendChild(tdBrand);
    tr.appendChild(tdYear);
    tr.appendChild(tdStorage);
    tr.appendChild(tdButtons);
    tbody.appendChild(tr);
  })
}

function onClickRemove(element) {
  console.log(element.id);
  carItensObj.splice(element.id, 1);
  localStorage.setItem('carInfo', JSON.stringify(carItensObj));
  addTable();
}

function onClickAddStorage(element){
  modal.style.display = "block";

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  
  // Verificação para quando o usuário clicar no icon do "X", feche o modal 
  document.getElementById('iconRemove').onclick = function() {
    modal.style.display = "none";
  };
}

addTable();