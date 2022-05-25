
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
const carro = 'Porsche';

// Por convenção, é possível declarar CONSTANTES e possuem
// escopo global em maísculo, somente nesses casos
const NUMERO = 2;

console.log(carro)