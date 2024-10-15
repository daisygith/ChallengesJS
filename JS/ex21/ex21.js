class Person{
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayDetails(){
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Country: ${this.country}`);
    }
}
// Create instances of the Person class
const person1 = new Person('Francisca Rohan', 25, 'USA');
const person2 = new Person('Raimond Aruna', 30, 'Netherlands');

//person 1
console.log('Person 1: ');
person1.displayDetails();

//person 1
console.log('Person 2: ');
person2.displayDetails();
