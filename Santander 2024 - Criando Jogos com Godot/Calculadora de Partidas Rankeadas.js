/* 
## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

*/


var vitorias = 100
var derrotas = 31

function RankedCalculator (){
    let saldoPartidas = (vitorias - derrotas)
    let nivel

    if (saldoPartidas <= 10){
        nivel = 'Ferro'
    }
    else if (saldoPartidas >= 11 && saldoPartidas <= 20){
        nivel = 'Bronze'
    }
    else if (saldoPartidas >= 21 && saldoPartidas <= 50){
        nivel = 'Prata'
    }
    else if (saldoPartidas >= 51 && saldoPartidas <= 80){
        nivel = 'Ouro'
    }
    else if (saldoPartidas >= 81 && saldoPartidas <= 90){
        nivel = 'Diamante'
    }
    else if (saldoPartidas >= 91 && saldoPartidas <= 100){
        nivel = 'Lendário'
    }
    else if (saldoPartidas >= 101){
        nivel = 'Imortal'
    }

    console.log("O Herói tem saldo de "+saldoPartidas+" e está no nível de "+nivel)
}

RankedCalculator()