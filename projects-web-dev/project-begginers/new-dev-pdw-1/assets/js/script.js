const modal = document.getElementById('myModal');
let userInfo = [];

editTrId = null;

window.onload = () => {
  let userKey = localStorage.getItem('UserInfo')
  userInfo = userKey ? JSON.parse(userKey) : [];

  if (localStorage.getItem('UserInfo'))  {
    document.getElementById('anchor-txt').style.display = "flex";
  }
}

const loadUsers = () => {
  const userKey = localStorage.getItem('UserInfo');
  return userKey ? JSON.parse(userKey) : [];
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

  const userItensObj = JSON.parse(localStorage.getItem('UserInfo'));

  if (editTrId || editTrId === 0) {
    saveRegister(userItensObj, userInfo);
    return;
  }else{
    localStorage.setItem('UserInfo', JSON.stringify(userInfo));
  }
  
  document.querySelector('form').reset();

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
  iconRemove.setAttribute('style', 'cursor: pointer; margin-inline: 0.5rem');
  iconRemove.setAttribute('id', `${id}`)
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
  storage.forEach((item, index) => {
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
    addIcon(tdButtons, index);
    
    tr.appendChild(tdName);
    tr.appendChild(tdSurname);
    tr.appendChild(tdAddress);
    tr.appendChild(tdAuxAddres);
    tr.appendChild(tdCell);
    tr.appendChild(tdEmail);
    tr.appendChild(tdButtons);
    tbody.appendChild(tr);
  })
}

const onClickEdit = (element) => {
  const actualId = element.getAttribute('id');
  editTrId = actualId; 

  const users = loadUsers();

  let userToEdit = {
    name: '',
    surname: '',
    address: '',
    auxAddress: '',
    cell: '',
    email: ''
  };

  users.forEach((user,id) => {
    if (id === +editTrId) {
      userToEdit.name = user.name;
      userToEdit.surname = user.surname;
      userToEdit.address = user.address;
      userToEdit.auxAddress = user.auxAddress;
      userToEdit.cell = user.cell;
      userToEdit.email = user.email;
    }
  });

  document.getElementById('name').value = userToEdit.name;
  document.getElementById('surname').value = userToEdit.surname;
  document.getElementById('address').value = userToEdit.address;
  document.getElementById('aux-address').value = userToEdit.auxAddress;
  document.getElementById('cell').value = userToEdit.cell;
  document.getElementById('email').value = userToEdit.email;
  modal.style.display = "none";
};

const saveRegister = (userArray) => {
  const users = loadUsers();

  const userAtt = users.map((user, id) => {
    if (editTrId === id) {
      user.name = userArray.name;
      user.surname = userArray.surname;
      user.address = userArray.address;
      user.auxAddress = userArray.auxAddress;
      user.cell = userArray.cell;
      user.email = userArray.email;
    }
    return user;
  })

  localStorage.setItem('UserInfo', JSON.stringify(userAtt));
  editTrId = null;
  addTable(userArray);
  document.querySelector('form').reset();
};

const onClickRemove = () => {

};

const vinteNumeros = [51,5,48,684,68,47,631,79,12,965,64,351,516,21,65,84,1485,15,2];

console.log(vinteNumeros.filter(item => (item%2) == 0))