programa{
	
	funcao inicio(){
		inteiro
		numerosPares[10],
		numerosImpares[10],
		numeroDigitado=0,
		contaPar = 0,
		contaImpar = 0

		enquanto(contaPar + contaImpar < 10){
			escreva("\nInsira um número: ")
			leia(numeroDigitado)

			se(numeroDigitado%2 == 0){
				numerosPares[contaPar] = numeroDigitado
				contaPar++
			}senao{
				numerosImpares[contaImpar] = numeroDigitado
				contaImpar++
			}
		}	

		concatena(numerosPares, numerosImpares,contaPar,contaImpar)
	}

	funcao listaPares(inteiro numerosPares[], inteiro contaPar){
		inteiro aux = 0
				
		para(inteiro i=0; i < contaPar; i++){
			para(inteiro x=0; x < contaPar-1; x++){
				se(numerosPares[x] < numerosPares[x+1]){
					aux = numerosPares[x] 
					numerosPares[x] = numerosPares[x+1]
					numerosPares[x+1] = aux
				}
			}
		}	
	}

	funcao listaImpares(inteiro numerosImpares[], inteiro contaImpar){
		inteiro aux = 0
				
		para(inteiro i=0; i < contaImpar; i++){			
			para(inteiro j=0; j < contaImpar - 1; j++){
				se(numerosImpares[j] < numerosImpares[j+1]){
					aux = numerosImpares[j]
					numerosImpares[j] = numerosImpares[j+1]
					numerosImpares[j+1] = aux
				}
			}
		}
	}	

	funcao concatena(inteiro par[], inteiro impar[], inteiro contaPar, inteiro contaImpar) {
		inteiro numeros[10]
		inteiro indiceV = 0
			para(inteiro x=0; x < contaPar + x; x++){
				numeros[x] = par[x]
				contaPar -= 1
				escreva("\nNúmeros Pares: ", numeros[x])
			}
			para(inteiro x=0; x < contaImpar + contaPar; x++){
				numeros[x-contaPar] = impar[x]
				contaImpar -= 1
				escreva("\nNúmeros Ímpares: ", numeros[x+contaPar])
		}
	}


}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1576; 
 * @DOBRAMENTO-CODIGO = [26, 40];
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */