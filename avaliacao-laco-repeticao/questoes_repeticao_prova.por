programa
{
	
	funcao inicio()
	{
	//	exe01()
	//	exe02()
	//	exe03()
	//	exe04()
	//	exe05()
	//	exe06()
	//	exe07()
	//	exe08()
		exe09()
	//	exe010()
	}

	funcao exe01() {
		inteiro moneyT = 0, money

		para(inteiro i = 0; i < 5; i++) {
			escreva("Insira quanto o cliente gastou\n")
			leia(money)

			 moneyT = moneyT + money
		}

		se(moneyT > 54000) {
			 	escreva("Superamos o fatoramento da loja rival em R$",moneyT-54000)
			 } senao se(moneyT < 54000) {
			 	escreva("Tivemos um déficit de R$",54000-moneyT," em relação a loja rival")
			 } senao se(moneyT == 54000) {
			 	escreva("Tivemos o mesmo faturamento da loja rival")
			 }
	}

	funcao exe02() {
		real compra, compraTot
		inteiro percento = 0
		
		escreva("Insira o valor da compra\n")
		leia(compra)

		compraTot = compra
		
		se(compra >= 500) {
			
			faca{
				compra = compra - 100
				se(percento < 25) {
					percento++
				}
			}enquanto(compra > 500)
			
			escreva("Sua compra de ", compraTot," teve um desconto de ",percento,"% e ficou em ",(compraTot-(compraTot*percento)/100))
			
		}senao se(compra < 500) {
			
			escreva("Sua compra ficará com o valor padrão, R$",compra)
		}
	}

	funcao exe03() {
		real preco = 5.0, quantidade = 120.0

		enquanto(preco >= 1){
			quantidade = quantidade + 26
			preco = preco - 0.5
			escreva("\nA quantidade de ingressos que serão vendidos se o valor for R$", preco,", será ", quantidade)
		}
	}

	funcao exe04() {
		cadeia tipoCompra
		real compra, totalVista = 0.0, totalParcela = 0.0

		para(inteiro i = 0; i < 5; i++) {
			escreva("Insira o valor da compra:\nR$")
			leia(compra)
			escreva("Qual será o tipo de transação? (V para à vista e P para parcelado)\n")
			leia(tipoCompra)

			se(tipoCompra == "V" ou tipoCompra == "v") {
				totalVista = totalVista + compra
			} senao se(tipoCompra == "P" ou tipoCompra == "p") {
				compra = compra+((compra*10)/100)
				totalParcela = totalParcela + compra
			}

		}

		escreva("O valor total de compras à vista ficou em R$",totalVista)
		escreva("\nO valor total de compras parceladas ficou em R$",totalParcela)
		escreva("\nO valor total das compras foi R$",totalVista+totalParcela)
	}

	funcao exe05() {
		real n

		para(inteiro i = 0; i < 3; i++) {
			escreva("Insira um número:\n")
			leia(n)

			se(n >= 30 e n <= 90) {
				escreva(n," está entre 30 e 90\n")
			}
		}
	}

	funcao exe06() {
		inteiro idades, qnt = 0
		real total = 0.0

		faca{
			escreva("Insira uma idade\n")
			leia(idades)

			se(idades != 0) {
				total = total + idades
				qnt++
			}
		}enquanto(idades != 0)

		escreva("A média de idades é ",total/qnt," anos")
	}

	funcao exe07() {
		inteiro n, incremento = 1
		cadeia rspt

		faca{
			escreva("Quer ver a tabuada de algum número? (s para sim e n para não)\n")
			leia(rspt)

			se(rspt == "s" ou rspt == "S") {
				escreva("De qual número?\n")
				leia(n)

				para(inteiro i = 0; i < 10; i++) {
				escreva(n," X ",incremento," é ", n*incremento,"\n")
				incremento++
				}
				
				incremento = 1
				
			} senao se(rspt == "n" ou rspt == "N") {
				pare
			}
		}enquanto(rspt != "n" ou rspt != "N")
	}

	funcao exe08() {
		inteiro idade, bb = 0, kid = 0, vei = 0, veiao = 0, idoso = 0

    		para(inteiro i = 0; i < 10; i++) {
    			escreva("Insira a idade\n")
    			leia(idade)

    			se(idade <= 15) {
    				bb++
    			} senao se(idade > 15 e idade <= 30) {
    				kid++
    			} senao se(idade > 30 e idade <= 45) {
    				vei++
    			} senao se(idade > 45 e idade <= 60) {
    				veiao++
    			} senao se(idade > 60) {
    				idoso++
    			}
    		}
    		
    		escreva("Temos ",bb," pessoas em até 15 anos\n")
    		escreva("Temos ",kid," pessoas acima de 15 anos e até 30 anos\n")
    		escreva("Temos ",vei," pessoas acima de 30 anos e até 45 anos\n")
    		escreva("Temos ",veiao," pessoas acima de 45 anos e até 60 anos\n")
    		escreva("Temos ",idoso," pessoas acima de 60 anos\n")

    		escreva((bb*100)/10,"% das pessoas informadas tem 15 anos ou menos\n")
    		escreva((idoso*100)/10,"% das pessoas informadas tem mais de 60\n")
	}

	funcao exe09() {
		real n1, n2, operacao
		cadeia rspt

		faca{
			escreva("Gostaria de fazer uma operação? (s para sim e n para não)\n")
			leia(rspt)

			se(rspt == "s" ou rspt == "S") {
				escreva("Qual operação seria? (1 para soma, 2 para sub, 3 div e 4 para multi)\n")
				leia(operacao)

				se(operacao == 1) {
					escreva("Insira o primeiro número\n")
					leia(n1)
					escreva("Insira o segundo número\n")
					leia(n2)
					escreva("O resultado é ",n1+n2,"\n")
				} senao se(operacao == 2) {
					escreva("Insira o primeiro número\n")
					leia(n1)
					escreva("Insira o segundo número\n")
					leia(n2)
					escreva("O resultado é ",n1-n2,"\n")
				} senao se(operacao == 3) {
					escreva("Insira o primeiro número\n")
					leia(n1)
					escreva("Insira o segundo número\n")
					leia(n2)
					escreva("O resultado é ",n1/n2,"\n")
				} senao se(operacao == 4) {
					escreva("Insira o primeiro número\n")
					leia(n1)
					escreva("Insira o segundo número\n")
					leia(n2)
					escreva("O resultado é ",n1*n2,"\n")
				}
			} senao se(rspt == "n" ou rspt == "N") {
				pare
			}
		}enquanto(rspt != "n" ou rspt != "N")
	}

	funcao exe010() {
		inteiro n, cass

		faca{
			escreva("Insira um número\n")
			leia(n)

			se(n%2 == 0 e n > 0) {
				cass = 0
			} senao {
				pare
			}
		}enquanto(n > 0 e n%2 == 0)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 4089; 
 * @DOBRAMENTO-CODIGO = [17, 36, 62, 72, 96, 109, 126, 151, 181];
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */