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

  if(messages.length < 3){
    // push = método de um array, adiciona um elemento no final do array
    messages.push(message);
  } else{
    alert('Para de encher o meu sistema seu cringe');
  }

  // Pegamos o formulário e utilizamos um método de form que é o reset
  console.log('Imprimir Array ',message);
  document.getElementById('form-container').reset();
}

buttonSendMessage.addEventListener('click', addMessage)

