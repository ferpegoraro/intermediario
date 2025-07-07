//Criar um objeto vazio

const obj = {}
console.log(obj)

console.log(typeof obj)

//Criar um objeto com propriedades e metodos

const user = {
    email: "fernandopbilia2304@gmail.com",
    age: 21,

    name: { 
        //Comum usar com _
        first_name: "Fernando",
        last_name: "Pegoraro"
    },

    address: {
        location: "Rua guaramebe",
        number: 183,
        city: "São Paulo",
        cep: "05754-060"
    },

    message: (name) => {
        return "hello " + name
    }

}



//Acessar propriedades e metodos de um objeto usando notacao de ponto

console.log(user.email)
console.log(user.name.first_name)
console.log(user.address.location)
console.log(user.message("Fernando"))


//notaçao de conchetes
console.log(user["email"])
console.log(user["name"]["first_name"])
console.log(user["message"]("Fernando"))

const user2 = {
    name: "Leonardo",
    //Só funciona com function
    message: function(){
        console.log("hello " + this.name)
    }
}

user2.message()


const product = {
    name: "teclado",
    price: 100,
}

console.log(product.name)
product.price = 200

console.log(product.price)

product.name = "mouse"
console.log(product.name)

//Encademento opcional(Optional Chaining)

const user3 = {
    
    id: 1,
    name: "Fernando",
    address: {
        city:  "São Paulo",
        street: "Rua guaramebe",
        geo: {
            lat: 47.8080,
            lng: 17.5674,
        },

        message: function(){
            console.log(`Hello, ${this.name}`)
        }

    },
}


// Operador de encadeamento opcional (?.) - Verifica se cada propriedade existe antes de acessar a próxima
// Evita erro se user3, name ou address forem undefined ou null
console.log(user3?.name?.address?.street)

// Operador de chamada opcional (?.) - Verifica se o método existe antes de tentar chamá-lo
// Evita erro se user3.message for undefined ou null
user3.message?.()


let content = null
console.log(content ?? "Conteúdo padrão")


const user4 = {
    name: "Fernando",
    picture: undefined,
}

console.log(user4.picture ?? "default.png")

//funçào contrutora

function createPoduct(name){
    const product = {}

    product.name = name
    product.details = function(){
        console.log(`Product: ${this.name}`)
    }

    return product
}
//O New cria um novo objeto com utilizando a estrutura da função contrutora
const product1 = new createPoduct("teclado")
console.log(product1.name)
product1.details()

const product2 = new createPoduct("mouse")
console.log(product2.name)
product2.details()

console.log(product1 === product2)


//exemplos de funões contrutoras ja existentes

let myName = new String("Fernando")
console.log(myName)

let price = "40.6" .replace(".",",")
console.log(price)

let date = new Date("2024-1-1")
console.log(date)

let myNumber = new Number(10)
console.log(myNumber)


function Person(name){
    this.name = name
    this.message = function(){
        console.log(`Olá ${this.name}`)
    }
}

const person1 = new Person("Fernando")
person1.message()

const person2 = new Person("Leonardo")
person2.message()
