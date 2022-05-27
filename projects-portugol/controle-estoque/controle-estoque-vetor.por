programa{
	
	funcao inicio(){
		inteiro rspt = 1, indice = 0, alteracao = 0, tamanho = 0, limite = 200, estoque[200], entrada = 0, saida = 0, contVeiculo = 0
		cadeia nomeCarros[200], operacao = ""

		// O enquanto irá manter o loop do código ativo até que seja inserido o 0 ou a "opção sair"
		enquanto(rspt != 0){
			escreva("\nO que gostaria de fazer?\n0)Sair\n1)Cadastrar Veículo\n2)Listar Veículos\n3)Remover Cadastro\n4)Consultar Saldo de Veículo\n5)Entrada ou Saída de Produto\n")
			leia(rspt)
			limpa()

			// Caso o usuário escolha fazer o cadastro de um veículo, este será o bloco executado
			se(rspt == 1){
				limpa()
				escreva("\nInsira o nome do veículo: ") 

				para(inteiro i=0; i <= contVeiculo; i++){
					se (nomeCarros[i] == "") {
						 leia(nomeCarros[i])
						 contVeiculo++
						 pare
					} senao {
						leia(nomeCarros[contVeiculo])
						contVeiculo++
						pare
					}
				}
				
			}

			// Caso o usuário escolha listar os veículos já cadastrados, este será o bloco executado
			se(rspt == 2){ 
				se(nomeCarros[0] != ""){
					limpa()
					listaVeiculos(nomeCarros,contVeiculo)
					escreva("\n")
				}senao{
					escreva("\nERRO! Cadastre algum veículo antes de executar a listagem.")
				}
			}

			// Caso o usuário escolha remover um dos veículos cadastrados, este será o bloco executado
			se(rspt == 3){
				limpa()
				se(nomeCarros[0] != ""){ // Condição para apenas remover se o vetor tiver algum valor
					escreva("\nInsira o código do veículo que deseja remover: ")
					leia(alteracao)
					se(alteracao < contVeiculo e alteracao > 0){
						para(inteiro i=0; i < contVeiculo; i++){
						nomeCarros[alteracao] = ""
						}
					}senao{
						escreva("\nERRO! Código inválido.")
					}
				}senao{
					escreva("\nERRO! Possua algum cadastro antes de tentar removê-lo.")
				}
			}

			// Caso o usuário escolha consultar o saldo de veículos, este será o bloco executado
			se(rspt == 4){
				se(tamanho > 0){
					escreva("\nHouveram ",entrada," entrada(s) e ",saida," saída(s).")
					insereTabela(nomeCarros, contVeiculo, estoque, alteracao)
				}senao{
					escreva("\nERRO! Não há veículos em estoque.")
				}
			}

			// Caso o usuário escolha fazer a entrada ou saída de um produto, este será o bloco executado
			se(rspt == 5){ 
				se(nomeCarros[0] != ""){ // Garante que apenas fará a operação se já houver algum cadastro
					escreva("\nInsira o código do veículo: ")
					leia(indice)
						para(inteiro i=0; i < contVeiculo; i++){
								escreva("\nFará uma entrada ou saída de estoque do veículo ",nomeCarros[indice],": ")							
								leia(operacao)
								pare
						}
						se(operacao == "entrada" ou operacao == "Entrada"){ // O usuário informa se fará uma entrada ou saída no sistema
							escreva("\nQuanto irá inserir ao estoque? ") // Informa a quantidade que irá inserir
							leia(alteracao)
							se(alteracao > limite){ // Caso o usuário informe um valor maior que limite do depósito, ele será avisado
								escreva("\nERRO! Valor informado excede limite do depósito (Limite máx. ",limite,").")
								escreva("\nQuanto irá inserir ao estoque? ")
								leia(alteracao)
							}
							para(inteiro y = 0;y < alteracao; y++){	 // Esse "para" registra a quantidade de carros que serão colocados no depósito
								se(tamanho < limite){ // Ele apenas irá até o limite do depósito, parando antes de ultrapassá-lo
									estoque[indice] += 1 // Soma para o estoque
									tamanho++ // A váriavel que faz a verificação para saber a ocupação do depósito
								}senao{
									escreva("\nERRO! Limite de capacidade do depósito excedido (Limite máx. ",limite,").\n") // Aviso caso passe o limite
									pare
								}
							}
							entrada++		
						}senao se(operacao == "saida" ou operacao == "Saída" ou operacao == "Saida" ou operacao == "saída"){
							escreva("\nQuanto irá remover do estoque? ")
							leia(alteracao)
							se(alteracao > limite){ 
								escreva("\nERRO! Valor informado excede limite do depósito para retirar (Limite máx. ",limite,").")
								escreva("\nQuanto irá remover do estoque? ")
								leia(alteracao)
							}senao se(estoque[indice] == 0 ou alteracao > estoque[indice]){
								escreva("ERRO! Não é possível remover um produto não disponível em estoque.")
							}
							para(inteiro y = 0;y < alteracao; y++){	 
								se(tamanho > 0) { 
									estoque[indice] -= 1 
									tamanho--
								}senao{
									escreva("\nERRO! Quantidade mínima não atingida (Limite mín. 0).\n") 
									pare
								}
							}
							saida++
						}
				}senao{
					escreva("\nERRO! Cadastre um veículo antes de fazer uma operação.")
						}
					}
				}
		}

	
	funcao listaVeiculos(cadeia veiculos[], inteiro contaVeiculos){
		para(inteiro i=0; i < contaVeiculos; i++){
			escreva("\n",i,") ",veiculos[i])
		}
	}

	funcao insereTabela(cadeia nomeCarros[], inteiro contVeiculo, inteiro estoque[],inteiro alteracao){
		escreva("\nCÓDIGO	VEÍCULO")
		listaVeiculos(nomeCarros,contVeiculo)
		escreva("\nInsira o código do veículo: ")
		leia(alteracao)
		escreva("\nHá ",estoque[alteracao]," ",nomeCarros[alteracao]," em estoque.\n")
	}

}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 5166; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {nomeCarros, 5, 9, 10};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */