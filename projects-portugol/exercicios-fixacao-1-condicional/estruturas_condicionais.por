programa {
	funcao inicio() {
//  exe1()
//	exe2()
//	exe3()
//	exe4()
//  exe5()
//  exe6()
//  exe7() 
//  exe8()
//  exe9()
    exe10()
}

    funcao exe1() {
        real num
        
        escreva("Insira um número\n")
        leia(num)
        
        se (num > 100) {
            escreva("Seu número é maior que cem!!\n")
        } senao se(num == 100) {
            escreva("Seu número é igual a cem")
          } senao {
               escreva("Seu número é menor que cem :-(\n")
          }
    }

    funcao exe2() {
        cadeia senha
		
		escreva("Insira sua senha:\n")
		leia(senha)
		
		se(senha == "PORTUGOL") {
		    escreva("Liberado bb") 
		} senao {
		    escreva("Mete o pé vacilão")
		}
	}
    
    funcao exe3() {
        real x
        
        escreva("Insira um número\n")
        leia(x)
        
        se(x >= 100 e x <= 500) {
            escreva("Seu número está entre 100 e 500!!")
        } senao {
            escreva("Seu número não está entre 100 e 500")
        }
    }
    
    funcao exe4() {
        real n1, n2, media
        
        escreva("Qual foi sua primeira nota?\n")
        leia(n1)
        
        escreva("E a sua segunda nota?\n")
        leia(n2)
        
        media = (n1 + n2) / 2
        
        se(media >= 7) {
            escreva("Você foi aprovado!!")
        } senao {
            escreva("Reprovado bb")
        }
    }
    
    funcao exe5() {
        inteiro n1
        
        escreva("Insira um número\n")
        leia(n1)
        
        se(n1%5 == 0) {
            escreva("Seu número é divisível por 5")
        } senao {
            escreva("Seu número não e divisível por 5")
        }
    }
    
    funcao exe6() {
        inteiro num
        
        escreva("Insira um número\n")
        leia(num)
        
        se(num%2 == 0 ) {
            escreva("Seu número é par")
        } senao {
            escreva("Seu número é ímpar")
        }
    }
    
    funcao exe7() {
        real n1, n2    
        
        escreva("Insira o primeiro número\n")
        leia(n1)
        
        escreva("Insira o segundo número\n")
        leia(n2)
        
        se (n1 > n2) {
            escreva(n1," é maior que ",n2)
        } senao se(n1 == n2) {
            escreva("Os números são iguais")
        } senao {
            escreva(n2," é maior que ",n1)
        }
    }
    
    funcao exe8() {
        real sBruto, sLiquido
        
        escreva("Informe seu salário bruto\n")
        leia(sBruto)
        
        se(sBruto < 2000) {
            sLiquido = (sBruto*10)/100
            escreva("Seu salário final ficou em ", sBruto-sLiquido)
        } senao {
            sLiquido = (sBruto*20)/100
            escreva("Seu salário final ficou em ", sBruto-sLiquido)
        }
        
        
        
    }
    
    funcao exe9() {
        
        real compra, reajuste
        
        escreva("Qual foi o valor do produto?\n")
        leia(compra)
        
        se(compra < 200) {
            reajuste = (compra*50)/100
            escreva("O valor final do produto ficou em ", compra+reajuste)
        } senao {
            reajuste = (compra*30)/100
            escreva("O valor final do produto ficou em ", compra+reajuste)
        }
    }
    
    funcao exe10() {
        real n1, n2, media
        
        escreva("Informe sua primeira nota\n")
        leia(n1)
        
        escreva("Informe sua segunda nota\n")
        leia(n2)
        
        media = (n1 + n2) / 2
        
        se(media >= 7) {
            escreva("Aprovado")
        } senao se(media < 7 e media >= 3) {
            escreva("Ficou de recuperação")
        } senao {
            escreva("Reprovado")
        }
    }
}
