/*
DEV WEB 

Front End
HTML, CSS, JavaScript

HTML é a linguagem de marcação
CCS é a linguagem de estilização 
JS é a linguagem de programação

O HTML e o CSS juntos dão a aparência da página 
O JS faz interações com a página, dá vida aos botões, aos inputs,
toda a interação visual que usuário tem com a página

Existem servidores provendo recursos, podendo ser tanto no front-end, 
quanto no back-end: imagens, html, arquivos em geral

A comunicação é feita através do protocolo HTTP (HTTPS)
HTTPS - Possui um nível de segurança que é utilizando certificados SSL
que criptografam as informações durante a transferência de dados

JS 
POO - Programação orientada a objetos
Classes - métodos
Propriedades/Atributos

  Exemplo: 
    Fruta: 
      tamanho
      valor 
      sabor

  Exemplo JS: 
    const fruta1 ={ 
     nome: 'banana',
     tamanho: '5cm'
    }

  Métodos / Funções
  Funções podem receber parâmetros, eles são opcionais 
  Funções podem retornar algum valor, por exemplo: um valor booleano

  function estaMaduro(tempoDeVida){
    if(tempoDeVida >= 2){
      return true;
    } 
    return false;
  }

  estaMaduro();

Objetos - Instâncias de uma classe

function minhaFuncao(){

}

Esta é a famosa arrowFunction
const minhaFuncao = () => {
}

O que é o escopo da função: É de onde a função inicia, até que ela termine

Arrays
  Aprendemos a trabalhar com Arrays, com os seguintes métodos:

  .forEach: Percorre cada elemento do array, disparando uma função, recebe 2 parâmetros, 
  no primeiro parâmetro recebe o elemento que está armazenado,
  na segunda posição o índice onde está armazenado o elemento

  .push: Adiciona um elemento ao final do array

  .indexOf: Procura e retorna um índice dentro do array

  .splice: Remove um item ou mais itens de um array de acordo com os parâmetros passados para a função
  1° parâmetro: posição inicial da qual deseja iniciar a remoção 
  2° parâmetro: quantos itens serão removidos, a partir do parâmetro inicial

  .filter: retorna o elemento que satsfaz a condição que é realizada dentro da função

  .map: retorna um novo array, de acordo com os itens do array que está sendo percorrido

  .includes: retornar true ou false se o parâmetro passado a ele atende a condição

Manipulação de DOM
O que é o DOM? Document Object Model (página)

Adicionar eventos dentro do DOM, através de inputs, botões e elementos HTML em geral

.addEventListener('click', função de callback() {})

Procurar elemento dentro da DOM

.getElementById(): procura elemento pelo ID
.querySelector(): procura o primeiro elemento que estiver no HTML
.querySelectorAll(): procura todos os elementos e retorna uma nodeList

criar elementos HTML de forma dinâmica:
  createElement(): cria um elemento HTML

.appendChild(): cria um elemento filho dentro do elemento pai
(childNode e parentNode)

manipular os elementos HTML, adicionando atributos, alterando atributos
pegar valores dos atributos

Storage: Local Storage

Back End
*/