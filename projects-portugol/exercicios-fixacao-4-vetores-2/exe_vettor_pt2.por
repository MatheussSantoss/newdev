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
	//	exe09()
	//	exe010()
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
		inteiro num[10], par[10], impar[10], indiceP = 0, indiceI = 0, aux = 0
		logico veri

		para(inteiro i=0; i < 10; i++){
			escreva("\nInsira um número: ")
			leia(num[i])

			//Função para verificar se o número é par ou ímpar
			veri = parouimpa(num[i])

			//Faz a validação para separar os pares dos ímpares
			se(veri == verdadeiro){
				par[indiceP] = num[i]
				indiceP++
			}senao{
				impar[indiceI] = num[i]
				indiceI++
			}
		}	

		veri = verdadeiro

		// É um loop para ser repetido até que os maiores valores estejam no final no caso do par, e no começo no
		//caso do ímpar
		enquanto(veri == verdadeiro){
			veri = falso
			//Faz a organização crescente dos números pares
			para(inteiro i=0; i < 10 - 1; i++){
				se(par[i] > par[i+1]){
					aux = par[i]
					par[i] = par[i+1]
					par[i+1] = aux
					veri = verdadeiro
				}
			}

			//Faz a organização decrescente dos números ímpares
			para(inteiro i=0; i < 10 - 1; i++){
				se(impar[i] < impar[i+1]){
					aux = impar[i]
					impar[i] = impar[i+1]
					impar[i+1] = aux
					veri = verdadeiro
				}
			}
		}

		para(inteiro i=0; i < 10; i++){
			se(par[i] != 0){
				escreva("\nNúmeros Pares: ",par[i])
			}
		}

		escreva("\n\n")
		
		para(inteiro i=0; i < 10; i++){
			se(impar[i] != 0){
				escreva("\nNúmeros Ímpares: ",impar[i])
			}
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

	funcao exe010() {
		inteiro vettorBig[20], vettor1[10], vettor2[10], indice = 0

		para(inteiro i=0; i < 20; i++){
			escreva("\nInsira um número: ")
			leia(vettorBig[i])

			// Verifica se o último índice está vago, caso não esteja, continuará o preenchendo, se já estiver
			//começará a preencher o vettor2
			se(vettor1[9] == 0){
				vettor1[i] = vettorBig[i]
			}senao{
				vettor2[indice] = vettorBig[i]
				indice++
			}
		}

		para(inteiro i=0; i < 10; i++){
			escreva("\nPrimeiro Vettor: ",vettor1[i])
		}

		escreva("\n\n")

		para(inteiro i=0; i < 10; i++){
			escreva("\nSegundo Vettor: ",vettor2[i])
		}
	}

	funcao logico parouimpa(inteiro x) {
		logico par = verdadeiro
		
		se(x%2 != 0){
			par = falso
		}
		
		retorne par
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 144; 
 * @DOBRAMENTO-CODIGO = [17, 33, 44, 55, 68, 86, 101, 125, 188, 212, 240];
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */