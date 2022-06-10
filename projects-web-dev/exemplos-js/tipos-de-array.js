const frutas = [
  {nome: 'goiaba',quantidade: 2},
  {nome: 'banana',quantidade: 3}
];

// const segundoArrayDeFrutas = frutas.map(fruta =>{
//   if (fruta.quantidade !== 2) {
//     fruta.quantidade = 2;
//   };
//   return fruta;
// });

console.log('segundo array de frutas', segundoArrayDeFrutas);

// Deleta o array inteiro
// frutas.splice(0);

// Deleta um item específico
// 1° parâmetro: a partir de qual índice começar
// 2° parâmetro: quantos itens ele írá remover
// frutas.splice(1,1)

const numeros = [2,10,20,15,80];

// Faz o filtro do array, recebe o "item", que é referente a cada valor contido
// Após a arrow function ele fará uma condição, e apenas apresentará os valores que se encaixarem
// Nesse exemplo ele apresenta apenas os valores que forem inferiores a 10 
numeros.filter(item => item > 10);
// output: 2;

const teste = 'bpefsieugfsef';

// Retorna o índice da posição da string na variável
// Se houver dois ou mais caracteres 
teste.indexOf('e');

const vinteNumeros = [51,5,48,684,68,47,631,79,12,965,64,351,516,21,65,84,1485,15,2];

console.log(vinteNumeros.filter(item => (item%2) == 0))