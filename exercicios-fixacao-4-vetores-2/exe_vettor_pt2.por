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
		exe08()
	//	exe09()
	}

	funcao exe01() {
		inteiro fibo[40], redu = 1

		fibo[0] = 1
		fibo[1] = 1

		para(inteiro i=2; i < 40; i++){
			fibo[i] = fibo[i-2] + fibo[i-1]
		}

		para(inteiro i=0; i < 40; i++){
			escreva(fibo[i],"\n")
		}
		
	}

	funcao exe02() {
		inteiro num[101]

		para(inteiro i=0; i < 101; i++){
			se(i%2 == 0) {
				num[i] = i
				escreva("\n",num[i])
			}
		}
	}

	funcao exe03() {
		inteiro num[100]

		para(inteiro i=0; i < 100; i++){
			se(i%2 != 0) {
				num[i] = i
				escreva("\n",num[i])
			}
		}
	}
	
	funcao exe04() {
		inteiro num[10]

		para(inteiro i=0; i < 10; i++){
			escreva("Insira um número: ")
			leia(num[i])
		}

		para(inteiro i=0; i < 10; i++){
			escreva("\nO cubo de ",num[i]," é ",num[i] * num[i] * num[i])
		}
	}

	funcao exe05() {
		real altura[10], media = 0.0

		para(inteiro i=0; i < 10; i++){
			escreva("Insira a altura do atleta: ")
			leia(altura[i])
			media = media + altura[i]
		}

		media = media/10

		para(inteiro i=0; i < 10; i++){
			se(altura[i] >= media) {
				escreva("\n",altura[i])
			}
		}
	}

	funcao exe06() {
		inteiro num[5], num2[5], indice = 4

		para(inteiro i=0; i < 5; i++){
			escreva("\nInsira um número: ")
			leia(num[i])
		}

		para(inteiro i=0; i < 5; i++){
			num2[indice] = num[i]
			escreva("\n",indice,") ",num2[indice])
			indice = indice - 1
		}	
	}

	funcao exe07() {
			inteiro num[10], num2[10]

		para(inteiro i=0; i < 10; i++){
			escreva("Insira um número: ")
			leia(num[i])
		}

		para(inteiro i=0; i < 10; i++){
			se(num[i]%2 == 0) {
				num2[i] = num[i]/2
			}senao {
				num2[i] = num[i]*3
			}
		}
		limpa()
		para(inteiro i=0; i < 10; i++){
			escreva("Lista 1: ", num[i], "\n")
		}escreva("\n\n")
		para(inteiro i=0; i < 10; i++){
			escreva("Lista 2: ", num2[i], "\n")
		}
	}
	
	funcao exe08() {
		inteiro  num[5], par[5], impar[5], indice = 0, indice2 = 0, maiorP = 0, maiorI = 0

		para(inteiro i=0; i < 5; i++){
			escreva("Insira um número: ")
			leia(num[i])

			se(num[i]%2 == 0) {
				par[indice] = num[i]
				se(par[indice] > maiorP) {
					maiorP = i
				}
				indice++
			}senao{
				impar[indice2] = num[i]
				se(par[indice] > maiorI) {
					maiorI = impar[i]
				}
				indice2++
			}
		}

		escreva("\n",par[maiorP])
		para(inteiro i=0; i < 5; i++){
			par[maiorP] = 0
			
			se(par[indice] > maiorP) {
				maiorP = i
				escreva("\n",par[maiorP])
			}
		}
		
		para(inteiro i=0; i < 5; i++){
				escreva("\n",par[i])
		}
	}

	funcao exe09() {
		cadeia nomes[10], achar[10]
		inteiro posicao = 0

		para(inteiro i=0; i < 10; i++){
			escreva("Insira o nome: ")
			leia(nomes[i])
		}limpa()
		para(inteiro i=0; i >= 0; i++){
			escreva("\nInsira o nome de qualquer pessoa: ")
			leia(achar[i])
			posicao = i
			para(inteiro x=0; x < 10; x++){
				se(achar[posicao] == nomes[x]) {
					escreva("ACHEI")
					pare
				} se(x==9) {
					escreva("NÃO ACHEI")
					pare
				}
			}
		}
	}

}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 3022; 
 * @DOBRAMENTO-CODIGO = [16, 32, 43, 54, 67, 85, 100, 124];
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */