/* 
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável,
o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

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
let vitoria = 1
let derrota = 1
let saldoVitorias = 0
let nivelHeroi = " "

play()

//saldoVitorias = calculator(vitoria, derrota)

nivelHeroi = nivel(saldoVitorias)

console.log(`O Resultado final do Herói é. `) 
console.log(`O Herói tem: ${saldoVitorias} pontos de Saldo de Vitórias, está no nível:${nivelHeroi}`) 

/*
    simulando uma partida
*/
function play(){

    for(i = 0; i<10; i++){
        vitoria = vitoria * 2
        derrota = derrota * 1

        saldoVitorias = calculator(vitoria, derrota)
        nivelHeroi = nivel(saldoVitorias)
        console.log(`Partida acontecendo... Saldo de Vitorias: ${saldoVitorias}, Nível: ${nivelHeroi}`)

    }
}


/*
    Calculando Saldo do Heroi
*/
function calculator(vitoria, derrota){
    let calcular = vitoria - derrota
    return calcular
}


/* */
function nivel(saldoVitorias){

    if(saldoVitorias <= 10){

        return " Ferro "

    } else if (saldoVitorias <= 20){

        return " Bronze "

    }else if (saldoVitorias <= 50){

        return " Prata "
        
    }else if (saldoVitorias <= 80){

        return " Ouro "
        
    }else if (saldoVitorias <= 90){

        return " Diamante "
        
    }else if (saldoVitorias <= 100){

        return " Lendário "
        
    } else{

        return " Imortal "
    }
}


