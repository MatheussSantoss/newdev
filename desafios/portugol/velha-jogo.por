programa{
	
	inclua biblioteca Util
	
	funcao inicio(){
		inteiro x = 0, y = 0, numAle = sorteia(0,2)

		logico win = falso
		
		cadeia sinal, bot, velha[3][3]

		escreva("Selecione seu caractere: X ou O?\n")
		leia(sinal)
		se(sinal == "X" ou sinal == "x"){
			bot = "O"
		}

		para(inteiro l=0; l < 3; l++){
			para(inteiro c=0; c < 3; c++){
				velha[l][c] = " "
			}
		}

		enquanto(win == falso){
			limpa()
			escreva("  ",velha[0][0]," |  ",velha[0][1],"  |  ",velha[0][2],"\n----|-----|-----\n  ",velha[1][0]," |  ",velha[1][1],"  |  ",velha[1][2],"\n----|-----|-----\n  ",velha[2][0]," |  ",velha[2][1],"  |  ",velha[2][2],"\n\n")
			escreva("Insira a coordenada da jogada: ")
			leia(x,y)
			velha[x][y] = sinal

			para(inteiro i=0; i < 3; i++){
				se(velha[i][0] != " " e velha[i][1] != " " e velha[i][2] != " "){
					win = verdadeiro
					limpa()
					escreva("VOCÊ GANHOU!!\n")
					pare
				}
			}

			para(inteiro i=0; i < 3; i++){
				se(velha[0][i] != " " e velha[1][i] != " " e velha[2][i] != " "){
					win = verdadeiro
					limpa()
					escreva("VOCÊ GANHOU!!\n")
					pare
				}
			}

			se(velha[0][0] != " " e velha[1][1] != " " e velha[2][2] != " "){
				win = verdadeiro
				limpa()
				escreva("VOCÊ GANHOU!!\n")
				pare
			}		
		}
		escreva("  ",velha[0][0]," |  ",velha[0][1],"  |  ",velha[0][2],"\n----|-----|-----\n  ",velha[1][0]," |  ",velha[1][1],"  |  ",velha[1][2],"\n----|-----|-----\n  ",velha[2][0]," |  ",velha[2][1],"  |  ",velha[2][2],"\n\n")
		
	}
}




/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 275; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {win, 8, 9, 3};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */