const n = 1500450271 
let i = 2
let ehPrimo = true


while (i <= n) {
    if (n % i == 0) {
        ehPrimo = false

        break 
    }
    i++
}

if (ehPrimo) 
    console.log(`Sim, o número ${n} é primo.`)
else
    console.log(`Não, o número ${n} não é primo.`)
    