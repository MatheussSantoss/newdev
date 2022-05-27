programa {
	funcao inicio() {
	//	exe01()
	//	exe02()
	//	exe03()
	//	exe04()
	//	exe05()
	//	exe06()
	//	exe07()
	}
	
	funcao exe01() {
	    inteiro soma = 0, num = 0, contador = 0, media
	        
	    enquanto(contador < 5) {
	        escreva("Insira um número\n")
	        leia(num)
	        se(num >= 0) {
    	        soma = soma + num
    	        num = 0
    	        contador++
	        } senao se(num < 0){
	            escreva("Não é permitido inserir números negativos\n")
	            pare
	        }
	    }   
	    se(num >= 0) {
	        
	    media = soma/5
	    
	    se(contador == 5) {
    	    escreva("A soma dos números inseridos é ",soma)
    	}
    	       
            escreva("\nVocê inseriu ",contador," números")
            escreva("\nA média dos números inseridos é ", media)
	    }
	}
	
	funcao exe02() {
	    real h, h2, h3, cont = 0
	    
	    escreva("Insira uma altura\n")
	    leia(h)

	    h3 = h
	    
	    enquanto(cont < 14) {
	        escreva("Insira sua altura\n")
	        leia(h2)
	        
	        se(h2>h) {
	        	h = h2
	        } 

	        se(h3>h2) {
	        	h3 = h2
	        }
	        cont++
	    }
	    escreva("A maior altura é ",h," e a menor altura é ",h3)
	}

	funcao exe03() {
		real num

		escreva("Insira um número\n")
		leia(num)

		enquanto(num < 100) {
			num = num*3
			escreva("Seu número está em ", num,"\n")
		}
	}

	funcao exe04() {
		inteiro num

		num = 233

		faca{
			se(num >= 300 e num <= 400) {
				num = num+3
				escreva("\nO número está em ", num)
			} senao {
				num = num+5
				escreva("\nO número está em ", num)
			}
		}enquanto(num < 456)
		
	}

	funcao exe05() {
		inteiro num, multi

		escreva("Insira um número\n")
		leia(num)

		multi = num
		
		faca{
			num = num-1
			multi = multi*num
			escreva(num,"X\n")
		}enquanto(num>1)
		escreva("= ",multi)
	}

	funcao exe06() {
		inteiro num, soma

		escreva("Insira um número\n")
		leia(num)

		soma = num
		faca{
			num = num-1    
			soma = num + soma
	
			escreva(num,"X\n")
		}enquanto(num>1)

		escreva("A soma é ",soma)
	}

	funcao exe07() {
		inteiro salario, filhos, cidadao, salBig = 0, pessoas = 5, percento = 0
		real mediaSal = 0, mediaFil = 0

		para(inteiro i = 0; i < 20; i++) {
			escreva("Quantos filhos(as) você tem?\n")
			leia(filhos)
			
			escreva("Qual o seu salário?\n")
			leia(salario)

			se(salario <= 1000) {
				percento++
			}

			mediaSal = mediaSal + salario
			mediaFil = mediaFil + filhos

			se(salario >= salBig) {
				salBig = salario
			}
		}
		escreva("A média dos salários é ",mediaSal/5,"\n")
		escreva("A média dos flihos(as) é ",mediaFil/5,"\n")
		escreva("O maior salário é R$",salBig,"\n")
		escreva("O percentual de pessoas com salário até R$1000 é ",(percento*100)/20,"%")
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 29; 
 * @DOBRAMENTO-CODIGO = [11, 39, 63, 75, 92, 108, 125];
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */