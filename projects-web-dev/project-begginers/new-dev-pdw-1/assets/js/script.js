const modal = document.getElementById('myModal');
let userInfo = [];

document.getElementById('btn-submit').addEventListener('click',(event) => {
  event.preventDefault();

  let userKey = localStorage.getItem('UserInfo ')
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

  localStorage.setItem('UserInfo ', JSON.stringify(userInfo));

  document.querySelector('form').reset();

  if (localStorage.length != 0)  {
    // Quando o usuário efetuar seu registro, irá aparecer a opção de verificar seu registro
    document.getElementById('anchor-txt').style.display = "flex";
  }
});

  // Exibe um Modal de seu registro
  document.getElementById('anchor-txt').onclick = () => {
    if (localStorage.length != 0)  {
      // Quando o usuário efetuar seu registro, irá aparecer a opção de verificar seu registro
      document.getElementById('anchor-txt').style.display = "flex";
    }
    
    modal.style.display = "block";
    userInfo.forEach(item => {
          
      const tbody = document.querySelector('tbody');
      const tr = document.createElement('tr');
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

      tr.appendChild(tdName);
      tr.appendChild(tdSurname);
      tr.appendChild(tdAddress);
      tr.appendChild(tdAuxAddres);
      tr.appendChild(tdCell);
      tr.appendChild(tdEmail);
      if (userInfo[0] == tr) {
        tbody.appendChild(tr);
      }
    }
  )};

  // Verificação para caso o usuário clique fora da tela, feche o modal 
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Verificação para quando o usuário clicar no icon do "X", feche o modal 
  document.getElementById('iconRemove').onclick = function() {
    modal.style.display = "none";
    for (let i = 0; i < userInfo.length; i++) {
      document.querySelector(tbody).clear();
    }
  };