programa{
	
	funcao inicio(){
		inteiro rspt = 1, contaVeic = 0, aux = 0, codigo, mov = 0, movEntrada = 0, movSaida = 0, estoque = 0,
		gerenciaEstoque[200][3], entrada[200]
		
		cadeia carros[200]

		enquanto(rspt != 0){
			escreva("O que gostaria de fazer?\n0)Sair\n1)Cadastrar Veículo\n2)Listar Veículos\n3)Remover Cadastro\n4)Consultar Saldo de Veículo\n5)Entrada ou Saída de Produto\n")
			leia(rspt)
			
			escolha(rspt){
			caso 1: 
			limpa()
			escreva("Insira o nome do veículo: ")
			para(inteiro i=0; i <= contaVeic; i++){
				se (carros[i] == "") {
		 		    leia(carros[i])
		 		    contaVeic++
				    pare
				} 
			}
			pare
			caso 2:
				para(inteiro i=0; i <= contaVeic; i++){
					se(carros[i] != ""){
						limpa()
						listaVeic(contaVeic, carros)
						pare
					}senao{
						limpa()
						escreva("ERRO! Não há veículos cadastrados.\n")
					}
				}
			pare
			caso 3:
				limpa()	
					para(inteiro i=0; i <= contaVeic; i++){
						se (carros[i] != "") {
						escreva("Insira o código do veículo que deseja remover: ")
						leia(codigo)
							se(codigo < contaVeic e codigo >= 0){
								carros[codigo] = ""
								pare
							}senao{
								limpa()
								escreva("ERRO! Código inválido.\n")
								pare
							}
						}senao{
							escreva("ERRO! Não há veículos cadastrados.\n")
						}
					}
			pare
			caso 4:
				limpa()
				para(inteiro i=0; i <= contaVeic; i++){
					se (gerenciaEstoque[i][0] != 0) {
						listaEstoque(mov, gerenciaEstoque, carros)
						pare
					}senao{
						limpa()
						escreva("ERRO! Não há veículos em estoque.\n")
					}
				}
			pare
			caso 5:
				limpa()
					se(carros[0] == "" e carros[1] == ""){
						escreva("ERRO! Não há veículos cadastrados.\n")
						pare
					}
					escreva("CÓDIGO | VÉICULO\n")
					listaVeic(contaVeic, carros)
					escreva("Insira o código do veículo: ")
					leia(codigo)
				para(inteiro i=0; i < contaVeic; i++){
					se(carros[codigo] != ""){
						limpa()
						escreva("Digite 1 para entrada ou 2 para saída: ")
						leia(aux)
						
						pare
					}senao{
						limpa()
						escreva("ERRO! Código inválido.")
						pare
					}
				}
				se(aux == 1){
					para(inteiro i = 0; i <= 200; i++){
						limpa()
						escreva("Insira o valor da entrada: ")
						leia(entrada[codigo])
						estoque += entrada[codigo]
						gerenciaEstoque[codigo][0] = gerenciaEstoque[codigo][0] + entrada[codigo]
						pare
					}
				}senao se(aux == 2){
					para(inteiro i = 0; i <= 200; i++){
						limpa()
						escreva("Insira o valor da saída: ")
						leia(gerenciaEstoque[codigo][1])
						estoque -= gerenciaEstoque[codigo][1]
						pare
					}
				}
				se(aux == 1 ou aux == 2){
					mov++
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

	funcao listaEstoque(inteiro mov, inteiro gerenciaEstoque[][], cadeia carros[]){
		escreva("       Entradas  Saídas  Estoque")
		para(inteiro i=0; i < mov; i++){
			gerenciaEstoque[i][2] = gerenciaEstoque[i][0] - gerenciaEstoque[i][1]
			escreva("\n",carros[i]," - ",gerenciaEstoque[i][0]," -  - ",gerenciaEstoque[i][1]," -  - ",gerenciaEstoque[i][2]," -\n\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1506; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {estoque, 4, 91, 7}-{gerenciaEstoque, 5, 2, 15}-{carros, 7, 9, 6};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */