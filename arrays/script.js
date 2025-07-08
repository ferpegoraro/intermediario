//Criando um array

const array = new Array()

console.log(array.length)


//criar array com 10 posições vazias
const available = new Array(10)
console.log(available)
console.log(available.length)

//cria array
let fruits = ['apple', 'orange', 'banana']
console.log(fruits)
//qual valor está na posição 1
console.log(fruits[1])

console.log(fruits[7])

//Retorna quem esta na ultima posiçao do array
console.log(fruits[fruits.length - 1])

let fullName = "Fernando Pegoraro Bilia"

//cria array com base na string
console.log(fullName.split(" "))

//cria um array com as Letras
console.log(Array.from(fullName))

//Adicionando e removendo elementos do array
let users = []

// console.log(users)

//Adiciona um item no final do array
users.push("Fernando")
users.push("Marcos")
users.push("João")
//Adiciona um item no iniciodo array
users.unshift("Ana")

//Remove um item do final do array
users.pop()

//Remove um item do inicio do array
users.shift()

console.log(users)

//Usando o indice 
fruits = ['apple', 'orange', 'lemon', 'banana']

//Encontra e retorna o indice do elemento do array
let position = fruits.indexOf('lemon')
console.log(position)

//Remove um item do array
//fruits.splice(1,3)
fruits.splice(position, 1)
console.log(fruits)


let myArray = [
    "um texto",
    10,
    true,
    function(){
        console.log("Isso é uma função dentro do array")
    },

    {
        name: "Fernando",
        age: 21
    }
]

//string
console.log(myArray[0])

//number
console.log(myArray[1])

//boolean
console.log(myArray[2])

//function
myArray[3]()

//object
console.log(myArray[4].name)
console.log(myArray[4].age)

//verficar se um valor existe no array
console.log(myArray.includes("um texto"))









