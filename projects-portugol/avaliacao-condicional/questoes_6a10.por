programa {
    
    inclua biblioteca Matematica --> mat
    
	funcao inicio() {
	//  Segue atividades referentes ao Aluno Matheus de Oliveira Santos
	//  Só retirar os comentários que o código funciona :) 
	//	atv6()
	//	atv7() 
	//  atv8()
	//  atv9()
	  atv10()
	}
	
	funcao atv6() {
	    cadeia sexo
	    real altura, pesoIdeal
	    
	    escreva("Insira seu gênero (M para masculino e F para feminino)\n")
	    leia(sexo)
	    
        escreva("Insira sua altura\n")
        leia(altura)
        
        se(sexo == "M") {
            pesoIdeal = (70.7*altura) - 58
            escreva("Seu peso ideal é ", pesoIdeal)
        } senao se (sexo == "F") {
            pesoIdeal = (62.1 * altura) - 44.7
            escreva("Seu peso ideal é ", pesoIdeal)
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
	        escreva("Seu IMC está abaixo da média, ele está em ",imcRedondo,", e o mínimo é 18.5")
	    } senao se (imc >= 18.5 e imc <= 25) {
	        escreva("Seu IMC está dentro da média, ele está em ",imcRedondo,", e o mínimo é 18.5")
	    } senao se (imc > 25 e imc <= 30) {
	        escreva("Seu IMC está acima da média, ele está em ",imcRedondo,", e a média é entre 18.5 e 25")
	    } senao se (imc > 30) {
	        escreva("Seu IMC muito acima da média, ele está em ",imcRedondo,", acima de 30 é considerado obesidade")
	    }
	
}

    funcao atv8() {
        inteiro n1
        
        escreva("Insira um número\n")
        leia(n1)
        
        se (n1%2 == 0) {
            escreva("Seu numero ficou em ", n1+5)
        } senao {
            escreva("Seu número ficou em ", n1+8)
        }
    }
    
    funcao atv9() {
        real distancia, consumo, consumoMedio
        
        escreva("Insira a distância percorrida\n")
        leia(distancia)
        
        escreva("Insira o o total de gasolina gasto\n")
        leia(consumo)
        
        consumoMedio = distancia/consumo
        
        escreva("O consumo médio de gasolina é ", consumoMedio)
    }
    
    funcao atv10() {
        inteiro compra, pagamento, troco
        
        escreva("Qual o valor do produto?\n")
        leia(compra)
        
        escreva("Quanto você irá pagar?\n")
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