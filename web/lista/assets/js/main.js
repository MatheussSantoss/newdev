const buttonSendMessage = document.getElementById('buttonSendMessage');

const messages = [];

function addMessage(event){
  event.preventDefault(); // Desabilita o comportamento padrão do elemento
  const inputNameValue = document.getElementById('name').value;
  const inputEmailValue = document.getElementById('email').value;
  const inputMessageValue = document.getElementById('mensagem').value;

  const message = {
    name: inputNameValue,
    email: inputEmailValue,
    message: inputMessageValue
  }

  messages.push(message);
  console.log('Imprimir Array ',message);
  document.getElementById('form-container').reset();
}

buttonSendMessage.addEventListener('click', addMessage)