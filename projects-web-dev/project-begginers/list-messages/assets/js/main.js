const buttonAddMessage = document.getElementById('add-button');

let countRow = 0;

const onClickEdit = (idRecord) => {
  console.log('onClickEdit', idRecord);
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

  tdFrom.innerHTML = `${message.from}`;
  tdTo.innerHTML = `${message.to}`;
  tdMessage.innerHTML = `${message.message}`;
  
  tr.appendChild(tdFrom);
  tr.appendChild(tdTo);
  tr.appendChild(tdMessage);

  const tdButtons = document.createElement('td');

  const iconEdit = document.createElement('i');
  iconEdit.setAttribute('class', 'fa-solid fa-pencil icon-table');
  iconEdit.setAttribute('style', 'cursor: pointer');
  tdButtons.appendChild(iconEdit);
  
  const iconRemove = document.createElement('i');
  iconRemove.setAttribute('class', 'fa-solid fa-trash icon-table');
  iconRemove.setAttribute('style', 'cursor: pointer');
  tdButtons.appendChild(iconRemove);
  
  tr.appendChild(tdButtons);
  
  tr.setAttribute('id', countRow);
  countRow += 1;
  tbody.appendChild(tr);
  
  iconEdit.setAttribute('onclick', `onClickEdit(${tdButtons.parentNode.id});`);
  
  document.getElementById('form-message').reset();
}

buttonAddMessage.addEventListener('click', addMsg);