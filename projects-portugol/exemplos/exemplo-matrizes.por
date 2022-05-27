programa{
	
	funcao inicio(){
		//  Para declarar uma Matriz, colocaremos no 1° colchete a quantidade de linhas(horizontal)
		// E no 2°, o número de colunas(vertical) 

		inteiro matriz[2][2]

		matriz[0][1] = 10
		matriz[1][1] = 5
		matriz[0][0] = 1
		matriz[1][0] = 2

		//Para percorrer todo a Matriz, devemos fazer um "para" para as linhas e outro para as colunas 
		// (É obrigatório ser nessa ordem)
						   //Alterasaporra
						   	   //|
						   	   //V
		para(inteiro linha=0; linha < 2; linha++){
			para(inteiro coluna=0; coluna < 2; coluna++){
				escreva("\n ,",matriz[linha][coluna])
			}
		}

		cadeia alunos[] = {"Jorge",
		"Eliane",
		"Victor"
		}
		
		//Cada colchete recebe o valor da coluna(vertical)
		real notas[3][3] = {
			{1.0,3.0,4.0},
			{2.0,4.0,5.0},
			{4.0,3.0,5.0}}

		real media[3]

		para(inteiro linha=0; linha < 3; linha++){	// Faz o loop com a linha
			real soma = 0.0					// A váriavel armazena a soma
			para(inteiro coluna=0; coluna < 3; coluna++){
				soma += notas[linha][coluna] 		// A soma recebe os três valores somados em apenas uma posição
			}
			media[linha] = soma/3				// Pega a média dividindo a posição da soma por 3
		}

		inteiro numeros[2][2]

		para(inteiro l=0; l < 2; l++){
			para(inteiro c=0; c < 2; c++){
				escreva("\nDigite um número: ")
				leia(numeros[l][c])
			}
		}

		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1306; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {numeros, 46, 10, 7};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */