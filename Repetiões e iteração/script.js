// Loop while com interação do usuário
// Este bloco demonstra como usar o while para criar um loop controlado por input do usuário
let execute = true

while(execute){
    let response = window.prompt("Deseja continuar?: 1 (Sim) 2 (Não)")
    
    if(response == 2){
        execute = false
    }
}

console.log("Fim do programa")

// Exemplo de loop infinito (comentado para evitar travamento)
// Um loop while sem uma condição de saída continuaria executando indefinidamente
let value = true

// while(value){
//     console.log("executando...")
// }

// Loop do-while
// Diferente do while, o do-while sempre executa o bloco pelo menos uma vez antes de verificar a condição
value = 0
do{
    console.log("executando...")
    value++
} while(value < 10)

console.log("segue o fluxo...")

// Loop for básico
// Estrutura mais compacta que inclui inicialização, condição e incremento em uma única linha
value = 0
for(let i = 0; i < 10; i++){
    console.log(i)
}

// Exemplo prático: Tabuada usando for
// Demonstra como usar o loop for para criar uma tabuada de multiplicação
let number = 22
for(let i = 0; i <= 10; i++){
    console.log(`${number} x ${i} = ${number * i}`)
}

// Loop for...in para objetos
// Permite iterar sobre as propriedades de um objeto
let person = {
    name: "Fernando",
    surname: "Pegoraro",
    email: "fernandopbilia2304@gmail.com"

}
let steps = 1

for(let i in person){
    console.log(`Passo ${steps}`)

    //exibe o nome da propriedade
    console.log(i)

    //exibe o valor da propriedade
    console.log(person[i])
    
    steps++
}

// Loop for...in para arrays
// Também pode ser usado para iterar sobre os índices de um array
let students = ["Fernando", "Marcos", "Letícia"]

for (let i in students){
    console.log(students[i])
}

// Loop for...of para arrays
// Permite iterar sobre os valores de um array sem precisar do índice
for (let student of students){
    console.log(student)
}

