programa{
	
	funcao inicio(){
		inteiro rspt = 1, contaVeic = 0, aux = 0, gerenciaEstoque[200][3]
		cadeia carros[200]

		enquanto(rspt != 0){
			escreva("O que gostaria de fazer?\n0)Sair\n1)Cadastrar Veículo\n2)Listar Veículos\n3)Remover Cadastro\n4)Consultar Saldo de Veículo\n5)Entrada ou Saída de Produto\n")
			leia(rspt)
			
			escolha(rspt){
			caso 0: 
			pare
			caso 1: 
			limpa()
			escreva("Insira o nome do veículo: ")
			para(inteiro i=0; i <= contaVeic; i++){
				se (carros[i] == "") {
		 		    leia(carros[i])
		 		    contaVeic++
				    pare
				} senao {
				    leia(carros[contaVeic])
				    contaVeic++
		   	 	    pare
				}
			}
			pare
			caso 2:
				limpa()
				listaVeic(contaVeic, carros)
			pare
			caso 3:
				limpa()
				escreva("Insira o código do veículo que deseja remover: ")
				leia(aux)
				se(aux < contaVeic e aux > 0){
					carros[aux] = ""
				}senao{
					escreva("\nERRO! Código inválido.")
				}
			pare
			caso 4:
			pare
			caso 5:
				limpa()
				escreva("Insira o código do veículo que deseja remover: ")
				leia(aux)
				para(inteiro i=0; i < contaVeic; i++){
					se(carros[aux] != ""){
						
					}
				}
			pare
			}
		}
	}

	funcao listaVeic(inteiro contaVeic,cadeia carros[]){
		para(inteiro i=0; i < contaVeic; i++){
			escreva(i,") ",carros[i],"\n")
		}
		escreva("\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1144; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {gerenciaEstoque, 4, 44, 15}-{carros, 5, 9, 6};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */