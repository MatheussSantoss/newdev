programa {
	funcao inicio() {
	//	exe01()
	//	exe02()
	//  	exe03()
	//  	exe04()
	//  	exe05()
	//   exe06()
	//	exe07()
	//	exe08()
	//	exe09()
	//	exe010()
	}
	
	funcao exe01() {
	    inteiro num, cont 
	    cadeia rspt
	    
	    escreva("Quer checar a tabuada de algum número?\n")
	    leia(rspt)
	    
	    enquanto(rspt == "sim" ou rspt == "Sim" ou rspt == "s") {
	        escreva("De qual número será?\n")
            leia(num)
            cont = 1
	            
	       enquanto(cont < 11){
	           escreva("\n",num," x ",cont," = ", cont*num)
	           cont++
	       }
	       
	    escreva("\nQuer checar a tabuada de mais algum número?\n")
	    leia(rspt)
	    }
    }
    
    	funcao exe02() {
        inteiro num = 1, cont = 1
        
        enquanto(num <= 10) {
            para(inteiro i = 0; i < 10; i++) {
                escreva(num," X ",cont," = ",num*cont,"\n")
                cont++
                se(cont == 11) {
                    num++ 
                    cont = 1
                }
            }
        }
    }
    
  	funcao exe03() {
        inteiro num
        
        para(inteiro i = 1000; i <= 2000; i++) {
            se(i%11 == 2) {
                escreva(i," dividido por 11 dá resto 2\n")
            }
        }
    }
    
   	funcao exe04() {
        real num
        
        para(inteiro i = 0; i < 3; i++) {
            escreva("Insira um número:\n")
            leia(num)
            
            se(num >= 30 e num <= 90) {
                escreva("O número ",num," está entre 30 e 90\n")
            } senao{
                escreva("O número ",num," não está entre 30 e 90\n")
            }
        }
    }
    
    	funcao exe05() {
        real money
        cadeia clientes
        
        para(inteiro i = 1; i < 6; i++) {
            escreva("Insira o nome do cliente:\n")
            leia(clientes)
            
            se(i == 5){
                escreva("Qual foi o faturamento a loja no mês?\n")
                leia(money)
                
                se(money > 54000) {
                    escreva("Superamos o faturamento da loja rival em R$", money-54000,"\n")
                } senao se(money < 54000) {
                    escreva("Ficamos inferiores em relação ao faturamento da loja rival, tivemos défict em R$", 54000-money,"\n")
                } senao se(money == 54000){
                    escreva("Empatamos com a loja rival no faturamento\n")
                }
            }
        }
    }
    
     funcao exe06() {
        real peso, mediaIdade = 0
        inteiro gordolas = 0, idade
        
        para(inteiro i = 0; i < 7; i++) {
            escreva("Informe seu peso\n")
            leia(peso)

            se(peso > 90) {
            	gordolas++
            }
        }

        para(inteiro i = 0; i < 7; i++) {
        	escreva("Informe sua idade\n")
        	leia(idade)

        	mediaIdade = mediaIdade + idade
        }

        escreva("A quantidade de pessoas com mais de 90KG é ",gordolas,"\n")
        escreva("A média de idades é ",mediaIdade/7,"\n")
    }

	funcao exe07() {
		real preco = 5.0, quantidade = 120.0

		enquanto(preco >= 1){
			quantidade = quantidade + 26
			preco = preco - 0.5
			escreva("\nA quantidade de ingressos que serão vendidos se o valor for R$", preco,", será ", quantidade)
		}	
	}

	funcao exe08() {
		real compra, compraTot
		inteiro percento = 0
		
		escreva("Insira o valor da compra\n")
		leia(compra)

		compraTot = compra
		
		se(compra >= 500) {
			
			faca{
				compra = compra - 100
				percento++
			}enquanto(compra > 500)
			
			escreva("Sua compra de ", compraTot," teve um desconto de ",percento,"% e ficou em ",(compraTot-(compraTot*percento)/100))
			
		}senao se(compra < 500) {
			
			escreva("Sua compra ficará com o valor padrão, R$",compra)
		}

	}

    	funcao exe09() {
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

	funcao exe010() {
		real precoCarro, valorPlus
		inteiro parcelas = 6, acrescimo = 3

		escreva("Qual o valor do carro?\nR$")
		leia(precoCarro)

		escreva("O preço do carro à vista, teria um desconto de 20%, ficando por R$", precoCarro-((precoCarro*20)/100),"\n")
		
		para(inteiro i = 0; i <= 9; i++) {
			valorPlus = (precoCarro * acrescimo) / 100
			escreva("Parcelado em ",parcelas,"x teria um acréscimo de ",acrescimo,"%, ficando em R$",precoCarro+valorPlus,"\n")
			parcelas = parcelas + 6
			acrescimo = acrescimo + 3
		}
		
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 113; 
 * @DOBRAMENTO-CODIGO = [14, 36, 51, 61, 76, 99, 133, 158, 188];
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */