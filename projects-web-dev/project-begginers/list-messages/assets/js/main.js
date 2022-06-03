const buttonAddMessage = document.getElementById('add-button');

let countRow = 0;

let editId = '';
let editCheck = false;

const onClickEdit = (lineEditing) => {
  // forEach é o método que PERCORRE todos os elementos de um array
  // lineEditing.childNodes.forEach((valor, index) => {
  //   console.log(valor);
  //   console.log(index);
  // });

  // const fromValue = lineEditing.childNodes[0].innerHTML;
  // const toValue = lineEditing.childNodes[1].innerHTML;
  // const messageValue = lineEditing.childNodes[2].innerHTML;

  // Desestruturação de arrays
  const [from, to, message] = lineEditing.childNodes;

  console.log(from.innerHTML);
  console.log(to.innerHTML);
  console.log(message.innerHTML);

  document.getElementById('from').value = from.innerHTML;
  document.getElementById('to').value = to.innerHTML;
  document.getElementById('message').innerHTML = message.innerHTML;

  const tbody = document.getElementById('table-body');

  editId = lineEditing.id;
  editCheck = true;
}

const onClickRemove = (lineEditing) => {
  lineEditing.remove();
}

function onClickMoveDown(row) {
  const nodes = document.getElementById('table-body').childNodes;

  nodes.forEach((rowItem, index) => {
    if (rowItem?.id === row.id) {
      indexRow = index - 1;
    }
  });
        
  moveLine('down');
}

function onClickMoveUp(row) {
  const nodes = document.getElementById('table-body').childNodes;

  nodes.forEach((rowItem, index) => {
    if (rowItem?.id === row.id) {
      indexRow = index - 1;
    }
  });
        
  moveLine('up');
}

function moveLine(direction) {
  const rows = document.getElementById('table-body').rows;
  const parent = rows[indexRow].parentNode;

  if (direction === 'up') {
    if (indexRow >= 1) {
      parent.insertBefore(rows[indexRow],rows[indexRow - 1]);

      indexRow--;
    }
  }

  if (direction === 'down'){
    if(indexRow < rows.length -1){
      parent.insertBefore(rows[indexRow + 1],rows[indexRow]);
      indexRow++;
    }
  }
}

function addMsg(event) {
  event.preventDefault();
  const inputFrom = document.getElementById('from');
  const inputTo = document.getElementById('to');

  const textArea = document.getElementById('message');

  if (!inputFrom.value.length) {
    alert('O remetente deve ser informado');
    return
  }

  if (!inputTo.value.length) {
    alert('O destinatário deve ser informado');
    return
  }

  if (!textArea.value.length) {
    alert('Insira uma mensagem');
    return
  }
  
  const message = {
    from: inputFrom.value,
    to: inputTo.value,
    message: textArea.value
  }

  console.log('->',message);

  const sectionMessages = document.getElementById('section-messages');

  // Buscamos uma lista não ordenada dentro da seção, para validar
  // se existe ou não, se não existir, criamos ela
  let ul = sectionMessages.querySelector('ul');

  if (!ul) {
    // Criamos uma lista não ordernada
    ul = document.createElement('ul');

    // Adiciona dentro da seção
    sectionMessages.appendChild(ul);   
  }

  const li = document.createElement('li');

  // Coloca um conteúdo dento da "li", as crazes são usadas por conta das variáveis 
  // que importamos do JS    || - Variável sendo importada no HTML
  //                         V
  li.innerHTML = `De: ${message.from}Para: ${message.to}Mensagem: ${message.message}`
  // Coloca um "li" dentro da "ul"
  ul.appendChild(li);

  const tdFrom = document.createElement('td');
  const tdTo = document.createElement('td');
  const tdMessage = document.createElement('td')

  const tr = document.createElement('tr');
  const tbody = document.querySelector('tbody');

  const tdButtons = document.createElement('td');

  const iconEdit = document.createElement('i');
  iconEdit.setAttribute('title', 'Editar');
  iconEdit.setAttribute('class', 'fa-solid fa-pencil');
  iconEdit.setAttribute('style', 'cursor: pointer; margin-inline: 0.5rem');
  tdButtons.appendChild(iconEdit);
  
  const iconRemove = document.createElement('i');
  iconRemove.setAttribute('title', 'Remover');
  iconRemove.setAttribute('class', 'fa-solid fa-trash');
  iconRemove.setAttribute('style', 'cursor: pointer; margin-inline: 0.5rem');
  tdButtons.appendChild(iconRemove);

  const iconArrowDown = document.createElement('i');
  iconArrowDown.setAttribute('title', 'Descer posição');
  iconArrowDown.setAttribute('class', 'fa-solid fa-arrow-down');
  iconArrowDown.setAttribute('style', 'cursor: pointer; margin-inline: 0.5rem');
  tdButtons.appendChild(iconArrowDown);

  const iconArrowUp = document.createElement('i');
  iconArrowUp.setAttribute('title', 'Subir posição');
  iconArrowUp.setAttribute('class', 'fa-solid fa-arrow-up');
  iconArrowUp.setAttribute('style', 'cursor: pointer; margin-inline: 0.5rem');
  tdButtons.appendChild(iconArrowUp);
  if (editCheck) {
    const trEdit = document.getElementById(editId);

    trEdit.children[0].innerHTML = message.from;
    trEdit.children[1].innerHTML = message.to;
    trEdit.children[2].innerHTML = message.message
  }else{
    tdFrom.innerHTML = `${message.from}`;
    tdTo.innerHTML = `${message.to}`;
    tdMessage.innerHTML = `${message.message}`;
    
    tr.appendChild(tdFrom);
    tr.appendChild(tdTo);
    tr.appendChild(tdMessage);

    tr.appendChild(tdButtons);
    tr.setAttribute('id', `line${countRow}`);
    countRow += 1;
    tbody.appendChild(tr);

    iconEdit.setAttribute('onclick', `onClickEdit(${tdButtons.parentNode.id});`);
    iconRemove.setAttribute('onclick', `onClickRemove(${tdButtons.parentNode.id});`);
    iconArrowDown.setAttribute('onclick', `onClickMoveDown(${tdButtons.parentNode.id});`);
    iconArrowUp.setAttribute('onclick', `onClickMoveUp(${tdButtons.parentNode.id});`);
  }
  
  document.getElementById('form-message').reset();
}

buttonAddMessage.addEventListener('click', addMsg);