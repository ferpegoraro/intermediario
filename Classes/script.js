class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

const person = new Person("Fernando", 21)
console.log(person.name)
console.log(person.age)


class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    sendEmail(){
        console.log("Email enviado para: " + this.email)
    }

}

const user = new User("Fernando", "fehpegoraro@gmail.com")
user.sendEmail()

class Message{
    static showMessage(){
        console.log("essa é a mensagem")
    }
}

Message.showMessage()

class Animal {
    constructor(name){
        this.name = name
    }

    makeNoise(){
        console.log("Som genérico do animal")
    }

}

//sobrescrevr metodos
class Dog extends Animal {
    makeNoise(){
        console.log("Au au")
    }
}



class Cat extends Animal {
    makeNoise(){
        console.log("Miau")
    }
}

const dog = new Dog()
dog.makeNoise()
dog.name = "rex"
console.log(dog.name)

const cat = new Cat("Mel")
cat.makeNoise()
cat.name = "mel"
console.log(cat.name)


//Prototype chain

const address = {
    city: "São Paulo",
    constry: "Brazil"

}

console.log(address)

const users = ["Fernando", "Maria", "Pedro"]
const userName = users[0]
console.log(userName.__proto__)

let obj = []

try{
    // obj.execute()

    if(!obj.includes(17))
        throw new Error("Elemento nao encontrado")
}catch(error){
    if(error instanceof TypeError){
        console.log("Método indisponivel")
    }
    console.log(error.message)
}


