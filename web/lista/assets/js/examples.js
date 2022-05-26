// POO: Programação Orientada a Objetos
// Atributos e Métodos (funções)

// Exemplos de Atributos: Cor, Altura, Largura...
// Exemplos de Métodos/Funções: Freiar, Acelerar, virarADireita

// A convernção para a declaração de variável deve ser seguida:

// Variável NÃO PODE iniciar com NÚMEROS
// Variável NÃO PODE iniciar com caracteres especiais (*, &, %,...)
// Variável NÃO PODE ter acento
// Variável NÃO PODE iniciar com letra maíscula (Banana <- errado, banana <- certo)
// Variáveis devem possuir um valor semântico (FAZER SENTIDO) 

// Funções devem seguir as mesmas convenções e devem ter valor semântico

// Por convenção, é possível declarar CONSTANTES e possuem
// escopo global em maísculo, somente nesses casos

/*            Exemplos            */

let username = 'Gordola';
let numeroParcelas = 10;

// 1° Forma de criar uma função, atribuí-la à uma variável 
let somaValores = function(){
  console.log(username + ' Somando valores');
}

// Summonando a variável
somaValores();

// 2° Forma de criar uma função, Named Function
function subtraiValores(){
  console.log(username + ' Subtrai');
}

subtraiValores();

// 3° Forma de criar uma função,
const carro = {
  cor: 'vermelho', // Atributo
  andar: function (){ // Método
    console.log('andando')
  }
}

carro.andar();
console.log('---> ', carro);

// 4° Forma de criar uma função, Arrow Function
multiplicaValores = () => {
  console.log('multiplicaValores', multiplicaValores);
}

multiplicaValores();

//_____________________________________________________________________\\

// Buscando elementos dentro da página HTML
// getElementById: Busca o elemento pelo ID
const buttonSendMessage = document.getElementById('buttonSendMessage');
console.log(buttonSendMessage);


// Buscando pela tag
// O querySelectorAll: Retorna um array de elementos que ele encontrar
const inputs = document.querySelectorAll('input');
console.log('input', inputs);
// Pegando um elemento pelo índice do mesmo
console.log('input selector -> ',inputs[2])


// O querySelector: Retorna o primeiro elemento que ele encontrar
const input = document.querySelector('input');
console.log('input', input);


// Buscando pelo ID
const txt = document.querySelectorAll('#texto-gene');
console.log(txt);


// Buscando pela classe
const social = document.querySelector('.social');
console.log('social -> ', social);


const p = document.createElement('p');
p.inputHTML = 'Chuva';
console.log('p -> ', p);

document.getElementById('texto-gene').appendChild(p);
