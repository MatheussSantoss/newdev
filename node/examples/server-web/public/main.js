const exemplo = 'exemplo pog';

//  Função async
const loadData = async () => {
// 1° parâmetro: URL que irá acessar
const response = await fetch('http://localhost:6924');
console.log('resposta do meu servidor forma 1: ', await response.json())
};

loadData();

fetch('http://localhost:6924')
.then((response) => { // Caso a requisição seja sucedida, executará este
  console.log('Funfou', response);
})
.catch((error) => { // Caso a requisição seja mal-sucedida, executará este
  console.log('Isso deu pau ', error);
})
.finally(() => { // Executará este independente de qualquer resultado dos anteriores 
  console.log('Requisição finalizou');
})