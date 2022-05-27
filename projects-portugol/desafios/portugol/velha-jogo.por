programa{

	inclua biblioteca Util

	funcao inicio(){
		inteiro x = 0, y = 0, numX, numY, rspt = 1, empate = 0

		logico win = falso

		cadeia sinal, bot = "", velha[3][3]

		faca{ 
			limpa()
			escreva("Selecione seu caractere: X ou O?\n")
			leia(sinal)
			se(sinal == "X" ou sinal == "x"){
				bot = "O"
				pare
			}senao se(sinal == "o" ou sinal == "O"){
				bot = "X"
				pare
			}
		}enquanto(bot == "")

		para(inteiro l=0; l < 3; l++){
			para(inteiro c=0; c < 3; c++){
				velha[l][c] = " "
			}
		}

		limpa()
		escreva("Escolha o modo de jogo:\n01) 1 jogador\n02) 2 jogadores\n")
		leia(rspt)

		se(rspt == 1){
			enquanto(verificaVitoria(velha, sinal, bot, win) == falso){
				limpa()
				imprimeTabelaCoor(velha)
					para(inteiro i=0; i < 10; i++){
						escreva("Insira a coordenada da jogada (x, y): ")
						leia(x,y)
						
						se(velha[x][y] == " "){
							velha[x][y] = sinal
							pare
						}senao{
							limpa()
							imprimeTabelaCoor(velha)
							escreva("\nPosição Inválida!\n")
						} 
					}
	
					verificaVitoria(velha, sinal, bot, win)
					
					para(inteiro i=0; i < 4; i++){
						numX = sorteia(0,2)
						numY = sorteia(0,2)
						se(velha[numX][numY] == " "){
							velha[numX][numY] = bot
							pare
						}
					}
	
					empate++
					se(empate == 5){
						limpa()
						escreva("EMPATAMO FAMÍLIA!\n")
						pare
					}
					verificaVitoria(velha, sinal, bot, win)
				}
			}

		se(rspt == 2){
			enquanto(verificaVitoria(velha, sinal, bot, win) == falso){
					para(inteiro i=0; i < 5; i++){
						limpa()
						imprimeTabelaCoor(velha)						
						escreva("Insira a coordenada da jogada do Player 1 (x, y): ")
						leia(x,y)
						
						se(velha[x][y] == " "){
							velha[x][y] = sinal
							pare
						}senao{
							limpa()
							imprimeTabelaCoor(velha)
							escreva("\nPosição Inválida!\n")
						} 
					}
					
					verificaVitoria(velha, sinal, bot, win)
					se(verificaVitoria(velha, sinal, bot, win) == verdadeiro){
						pare
					}
	
					empate++
					se(empate == 5){
						limpa()
						escreva("EMPATAMO FAMÍLIA!\n")
						pare
					}
	
					para(inteiro i=0; i < 5; i++){	
						limpa()
						imprimeTabelaCoor(velha)
						escreva("Insira a coordenada da jogada do Player 2 (x, y): ")
						leia(x,y)
						se(velha[x][y] == " "){
							velha[x][y] = bot
							pare
						}senao{
							limpa()
							imprimeTabelaCoor(velha)
							escreva("\nPosição Inválida!\n")
						} 
					}
				}
				verificaVitoria(velha, sinal, bot, win) 
		}
		imprimeTabela(velha)	
		}
	

	funcao imprimeTabela(cadeia velha[][]){
		escreva("  ",velha[0][0]," |  ",velha[0][1],"  |  ",velha[0][2],"\n----|-----|-----\n  ",velha[1][0]," |  ",velha[1][1],"  |  ",velha[1][2],"\n----|-----|-----\n  ",velha[2][0]," |  ",velha[2][1],"  |  ",velha[2][2],"\n\n")
	}

	funcao imprimeTabelaCoor(cadeia velha[][]){
		escreva("//--00----01----02-//\n")
		escreva("|\n00    ",velha[0][0]," |  ",velha[0][1],"  |  ",velha[0][2],"\n|   ----|-----|-----\n01    ",velha[1][0]," |  ",velha[1][1],"  |  ",velha[1][2],"\n|   ----|-----|-----\n02    ",velha[2][0]," |  ",velha[2][1],"  |  ",velha[2][2],"\n\n")
	}

	funcao logico verificaVitoria(cadeia velha[][], cadeia sinal, cadeia bot, logico win){
		win = falso
		
		para(inteiro i=0; i < 3; i++){
			se(velha[i][0] == sinal e velha[i][1] == sinal e velha[i][2] == sinal){
				win = verdadeiro
				limpa()
				escreva("VOCÊ GANHOU!!\n")
				pare
			}senao se(velha[0][i] == sinal e velha[1][i] == sinal e velha[2][i] == sinal){
				win = verdadeiro
				limpa()
				escreva("VOCÊ GANHOU!!\n")
				pare
			}senao se(velha[0][0] == sinal e velha[1][1] == sinal e velha[2][2] == sinal){
				win = verdadeiro
				limpa()
				escreva("VOCÊ GANHOU!!\n")
				pare
			}senao se(velha[0][2] == sinal e velha[1][1] == sinal e velha[2][0] == sinal){
				win = verdadeiro
				limpa()
				escreva("VOCÊ GANHOU!!\n")
				pare		
			}

			// Verificação de vitória para o BOT
			se(velha[i][0] == bot e velha[i][1] == bot e velha[i][2] == bot){
				win = verdadeiro
				limpa()
				escreva("TU FOI AMASSADO!!\n")
				pare
			}senao se(velha[0][i] == bot e velha[1][i] == bot e velha[2][i] == bot){
				win = verdadeiro
				limpa()
				escreva("TU FOI AMASSADO!!\n")
				pare
			}senao se(velha[0][0] == bot e velha[1][1] == bot e velha[2][2] == bot){
				win = verdadeiro
				limpa()
				escreva("TU FOI AMASSADO!!\n")
				pare
			}senao se(velha[0][2] == bot e velha[1][1] == bot e velha[2][0] == bot){
				win = verdadeiro
				limpa()
				escreva("TU FOI AMASSADO!!\n")
				pare		
			}
		}
		retorne win
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1998; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {empate, 6, 46, 6};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */