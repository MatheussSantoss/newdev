programa {
    
    inclua biblioteca Matematica --> mat
    
	funcao inicio() {
	//  Segue atividades referentes ao Aluno Matheus de Oliveira Santos
	//  S� retirar os coment�rios que o c�digo funciona :) 
	//	atv6()
	//	atv7() 
	//  atv8()
	//  atv9()
	  atv10()
	}
	
	funcao atv6() {
	    cadeia sexo
	    real altura, pesoIdeal
	    
	    escreva("Insira seu g�nero (M para masculino e F para feminino)\n")
	    leia(sexo)
	    
        escreva("Insira sua altura\n")
        leia(altura)
        
        se(sexo == "M") {
            pesoIdeal = (70.7*altura) - 58
            escreva("Seu peso ideal � ", pesoIdeal)
        } senao se (sexo == "F") {
            pesoIdeal = (62.1 * altura) - 44.7
            escreva("Seu peso ideal � ", pesoIdeal)
        }
	}
	
	funcao atv7() {
	    real peso, altura, imc, imcRedondo
	    
	    escreva("Informe sua altura\n")
	    leia(altura)
	    
	    escreva("Informe seu peso\n")
	    leia(peso)
	    
	    imc = peso / (altura*altura)
	    imcRedondo = mat.arredondar(imc, 2)
	    
	    se (imc < 18.5) {
	        escreva("Seu IMC est� abaixo da m�dia, ele est� em ",imcRedondo,", e o m�nimo � 18.5")
	    } senao se (imc >= 18.5 e imc <= 25) {
	        escreva("Seu IMC est� dentro da m�dia, ele est� em ",imcRedondo,", e o m�nimo � 18.5")
	    } senao se (imc > 25 e imc <= 30) {
	        escreva("Seu IMC est� acima da m�dia, ele est� em ",imcRedondo,", e a m�dia � entre 18.5 e 25")
	    } senao se (imc > 30) {
	        escreva("Seu IMC muito acima da m�dia, ele est� em ",imcRedondo,", acima de 30 � considerado obesidade")
	    }
	
}

    funcao atv8() {
        inteiro n1
        
        escreva("Insira um n�mero\n")
        leia(n1)
        
        se (n1%2 == 0) {
            escreva("Seu numero ficou em ", n1+5)
        } senao {
            escreva("Seu n�mero ficou em ", n1+8)
        }
    }
    
    funcao atv9() {
        real distancia, consumo, consumoMedio
        
        escreva("Insira a dist�ncia percorrida\n")
        leia(distancia)
        
        escreva("Insira o o total de gasolina gasto\n")
        leia(consumo)
        
        consumoMedio = distancia/consumo
        
        escreva("O consumo m�dio de gasolina � ", consumoMedio)
    }
    
    funcao atv10() {
        inteiro compra, pagamento, troco
        
        escreva("Qual o valor do produto?\n")
        leia(compra)
        
        escreva("Quanto voc� ir� pagar?\n")
        leia(pagamento)
        

        
        se(pagamento == compra) {
            escreva("Compra efetuada!") 
        } senao se(pagamento > compra) {
            troco = pagamento - compra
            se (troco == 10) {
                escreva("Compra efetuada, receba seu troco de 1 nota de ", troco, " reais")
            } senao se(troco == 1) {
                escreva("Compra efetuada, receba seu troco de 1 nota de ", troco, " real")
            } senao se(troco == 100) {
                escreva("Compra efetuada, receba seu troco de 1 nota de ", troco, " reais")
            } senao se(troco != 10 e troco != 1 e troco != 100) {
                se(troco%100 == 0) {
                    escreva("Compra efetuada, receba seu troco de ", troco/100, " notas de 100 reais")
                } senao se(troco%10 == 0) {
                    escreva("Compra efetuada, receba seu troco de ", troco/10, " notas de 10 reais")
                } senao se(troco%1 == 0) {
                    escreva("Compra efetuada, receba seu troco de ", troco, " notas de 1 real")
                }
            }
        } senao se(pagamento < compra) {
            escreva("Pagamento Negado")
        }
        
    }
}