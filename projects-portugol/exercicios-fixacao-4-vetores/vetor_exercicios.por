programa{
	funcao inicio(){
	//	exe01()
	//	exe02()
	//	exe03()
	//	exe04()
	//	exe05()
	//	exe06()
	//	exe07()
	//	exe08()
	//	exe09()
	//	exe010()
	}

	funcao exe01() {
		inteiro num[5]

		para(inteiro i=0; i < 5; i++){
			escreva("\nInsira um número: ")
			leia(num[i])

			se(num[i] == 2 ou num[i] == 3 ou num[i] == 5 ou num[i] == 7) {
				escreva("\n",num[i]," é primo\n")	
			} 
			se(num[i]%2 != 0 e num[i]%3 != 0 e num[i]%5 != 0 e num[i]%7 != 0) {
				escreva("\n",num[i]," é primo\n")
			}
		}


	}

	funcao exe02() {
		inteiro num[8], maior = 0, posicao = 0

		para(inteiro i=0; i < 8; i++){
			escreva("\nInsira um número: ")
			leia(num[i])

			se(num[i] > maior) {
				maior = num[i]
				posicao = i
			}
		}

		escreva("\nO maior número é ", maior," e está na posição ",posicao)
	}

	funcao exe03() {
		inteiro num[10], multi = 1, soma = 0

		para(inteiro i=0; i < 10; i++){
			escreva("\nInsira um número: ")
			leia(num[i])

			se(num[i]%2 == 0) {
				multi = multi * num[i] 
			} senao se(num[i]%2 != 0) {
				soma += num[i]
			}
		}

		escreva("\nA multiplicação dos números pares é ",multi)
		escreva("\nA soma dos números pares é ",soma)
	}

	funcao exe04() {
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

	funcao exe05() {
		inteiro num[10], divisor

		para(inteiro i=0; i < 10; i++){
			escreva("\nInsira um número: ") 
			leia(num[i])
		}

		escreva("\nInforme um divisor: ")
		leia(divisor)

		para(inteiro i=0; i < 10; i++){
			se(num[i]%divisor == 0) {
				escreva("\n",num[i]," é divisível por ",divisor)
			}
		}
	}

	funcao exe06() {
		inteiro num[5], soma = 0

		para(inteiro i=0; i < 5; i++){
			escreva("\nInsira um número: ")
			leia(num[i])

			 soma += num[i]
		}

		escreva("\nA soma dos números é ",soma)

		para(inteiro i=0; i < 5; i++){
			escreva("\n",i,") ",num[i])
		}
	}

	funcao exe07() {
		cadeia nome[5]

		para(inteiro i=0; i < 5; i++){
			escreva("\nInsira um nome: ")
			leia(nome[i])
		}

		escreva("\nOrdem correta\n")
		para(inteiro i=0; i < 5; i++){
			escreva("\n",i,") ",nome[i])
		}

		escreva("\n\nOrdem reversa\n")
		para(inteiro i=4; i > -1; i = i - 1){
			escreva("\n",i,") ",nome[i])
		}
	}

	funcao exe08() {
		cadeia mes[13] = {" ","Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"}
		inteiro num

		para(inteiro i=1; i > 0; i++){
			escreva("\nInsira um número de 1 a 12: ")
			leia(num)
			escreva("\n",mes[num],"\n")

			se(num == 0) {
				pare
			}
		}
	}

	funcao exe09() {
		inteiro num[50], soma = 1

		para(inteiro i=0; i < 50; i++){
		num[i] = num[i] + soma
		soma++
		escreva("\n",num[i])
		}
	}

	funcao exe010() {
		inteiro num[10]

		para(inteiro i=0; i < 10; i++){
			escreva("\nInsira um número: ")
			leia(num[i])

			num[i] = num[i]*num[i]
		}

		para(inteiro i=0; i < 10; i++){
			escreva("\n",i,") ",num[i])
		}
	}
} 
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 152; 
 * @DOBRAMENTO-CODIGO = [14, 32, 48, 66, 82, 100, 117, 136, 151, 161];
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */