programa
{
	
	funcao inicio(){
		//Executando a 1° função  	
		escreva(soma(10,5))	

		//Executando a 2° função
		cadeia tipo, item1, item2, item3

		escreva("\nFará uma receita do quê? ")
		leia(tipo)

		escreva("Liste os três ingredientes: ")
		leia(item1, item2, item3)

		escreva(listaReceita(item1,item2,item3,tipo))

		// Executando a 3° função
		txt("Odeio cringes")

		// Executando a 4°função
		escreva("\n",media(10.0,6.0,9.0,7.0))
		}


	// Essa função recebe dois parâmetros que são números inteiros, e retorna a soma do valor 1 com o valor 2
	funcao inteiro soma(inteiro x,inteiro y) {
		retorne x + y
	}

	// Essa função recebe 4 parâmetros que são do tipo cadeia, sendo três itens de uma receita 
	// e a última sendo o que é a receita, ele imprime o que é e em seguida os três itens
	funcao cadeia listaReceita(cadeia item, cadeia item2, cadeia item3, cadeia tipo) {
		retorne "\nPara receita de " + tipo + "\nPrecisamos de \n" + item + " \n" + item2 + "\n" + item3
	}

	// Essa função recebe um parâmetro do tipo cadeia, ele entra num "escreva", servirá para encurtar o escreva
	// e para ter quebra de linha automática
	funcao txt(cadeia t) {
		escreva("\n" + t)
	}

	// Esse função recebe 4 parâmetros que são números reais, ele realiza a soma dos quatro números
	// e os divide por quatro 
	funcao real media(real n1,real n2, real n3, real n4) {
		retorne (n1+n2+n3+n4)/4
		}


}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 444; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */