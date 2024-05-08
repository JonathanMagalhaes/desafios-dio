// Desafio de Codigo DIO

let heroName = "Claudio Vitelius III"
let heroExp = 4560
let heroRank = ""

    if (heroExp <= 1000){
        heroRank = "Ferro"
    }
    if (heroExp >= 1001 && heroExp <= 2000){
        heroRank = "Bronze"
    }
    if (heroExp >= 2001 && heroExp <= 5000){
        heroRank = "Prata"
    }
    if (heroExp >= 5001 && heroExp <= 7000){
        heroRank = "Ouro"
    }
    if (heroExp >= 7001 && heroExp <= 8000){
        heroRank = "Platina"
    }
    if (heroExp >= 8001 && heroExp <= 9000){
        heroRank = "Ascendente"
    }
    if (heroExp >= 9001 && heroExp <= 10000){
        heroRank = "Imortal"
    }
    if (heroExp >= 10001){
        heroRank = "Radiante"
    }   

console.log("O heroi de nome " + heroName + " esta no nivel " + heroRank)
