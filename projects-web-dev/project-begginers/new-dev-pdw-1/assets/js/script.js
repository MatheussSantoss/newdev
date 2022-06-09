const modal = document.getElementById('myModal');
let userInfo = [];
let trId = 0;

window.onload = () => {
  let userKey = localStorage.getItem('UserInfo')
  userInfo = userKey ? JSON.parse(userKey) : [];

  if (localStorage.getItem('UserInfo'))  {
    document.getElementById('anchor-txt').style.display = "flex";
  }
}

document.getElementById('btn-submit').addEventListener('click',(event) => {
  event.preventDefault();

  let userKey = localStorage.getItem('UserInfo');
  userInfo = userKey ? JSON.parse(userKey) : [];

  // Objeto que contém as informações do usuário
  userInfo.push({
    name: document.getElementById('name').value,
    surname: document.getElementById('surname').value,
    address: document.getElementById('address').value,
    auxAddress: document.getElementById('aux-address').value,
    cell: document.getElementById('cell').value,
    email: document.getElementById('email').value
  });

  localStorage.setItem('UserInfo', JSON.stringify(userInfo));

  document.querySelector('form').reset();

  const userItensObj = JSON.parse(localStorage.getItem('UserInfo'));

  addTable(userItensObj);
  document.getElementById('anchor-txt').style.display = "flex";
});

  // Exibe um Modal de seu registro
  document.getElementById('anchor-txt').onclick = () => {
    modal.style.display = "block";
    const userItensObj = JSON.parse(localStorage.getItem('UserInfo'));
    addTable(userItensObj);
  };

  // Verificação para caso o usuário clique fora da tela, feche o modal 
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Verificação para quando o usuário clicar no icon do "X", feche o modal 
  document.getElementById('iconRemove').onclick = function() {
    modal.style.display = "none";
  };

  function addIcon(tdButtons) {
    const iconEdit = document.createElement('i');
    iconEdit.setAttribute('title', 'Editar');
    iconEdit.setAttribute('class', 'fa-solid fa-pencil');
    iconEdit.setAttribute('style', 'cursor: pointer; margin-inline: 0.5rem');
    iconEdit.setAttribute('onclick', `onClickEdit(event)`);
    tdButtons.appendChild(iconEdit);
    
    const iconRemove = document.createElement('i');
    iconRemove.setAttribute('title', 'Remover');
    iconRemove.setAttribute('class', 'fa-solid fa-trash');
    iconRemove.setAttribute('style', 'cursor: pointer; margin-inline: 0.5rem');
    iconRemove.setAttribute('onclick', `onClickRemove(event)`);
    tdButtons.appendChild(iconRemove);
  }

  function addTable(storage) {
    const table = document.querySelector('table');
    let tbody = document.querySelector('tbody');
    if (tbody) {
    tbody.remove(); 
    };
    tbody = document.createElement('tbody');
    table.appendChild(tbody);
    storage.forEach(item => {
      const tr = document.createElement('tr');
      const tdButtons = document.createElement('td');
      const tdName = document.createElement('td');
      const tdSurname = document.createElement('td');
      const tdAddress = document.createElement('td');
      const tdAuxAddres = document.createElement('td');
      const tdCell = document.createElement('td');
      const tdEmail = document.createElement('td');

      tdName.innerHTML = `${item.name}`;
      tdSurname.innerHTML = `${item.surname}`;
      tdAddress.innerHTML = `${item.address}`;
      tdAuxAddres.innerHTML = `${item.auxAddress}`;
      tdCell.innerHTML = `${item.cell}`
      tdEmail.innerHTML = `${item.email}`;
      addIcon(tdButtons);
      
      tr.appendChild(tdName);
      tr.appendChild(tdSurname);
      tr.appendChild(tdAddress);
      tr.appendChild(tdAuxAddres);
      tr.appendChild(tdCell);
      tr.appendChild(tdEmail);
      tr.appendChild(tdButtons);
      tr.setAttribute('id', `${trId}`);
      trId++;
      tbody.appendChild(tr);
    })
  }

  function onClickEdit(event){
    
  };

  const onClickRemove = () => {

  };
 