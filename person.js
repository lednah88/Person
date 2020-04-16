class Person {
    constructor(name, age, gender, interest) {
        this.name = name
        this.age = age
        this.gender = gender
        this.interest = [interest]
    }
    hello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My interests are ${this.interest}.`)
    }
}
let person = new Person('Rixongile', 22, 'female', ['being a smartworker', ' reading', ' agile', ' ssd hard drives'])
person.hello()