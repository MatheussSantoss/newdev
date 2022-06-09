const frutas = [
  {nome: 'goiaba',quantidade: 2},
  {nome: 'banana',quantidade: 3}
];

const segundoArrayDeFrutas = frutas.map(fruta =>{
  if (fruta.quantidade !== 2) {
    fruta.quantidade = 2;
  };
  return fruta;
});

console.log('segundo array de frutas', segundoArrayDeFrutas);

// Deleta o array inteiro
frutas.splice(0);

// Deleta um item específico
// 1° parâmetro: a partir de qual índice começar
// 2° parâmetro: quantos itens ele írá remover
frutas.splice(1,1)