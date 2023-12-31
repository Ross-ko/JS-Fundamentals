function objectsAndClassesExercise() {
    
let person = { name: 'Rosen', 
                age: 36, 
                height: 177, 
                hairColour: 'Black',
                lastName: 'Ignatov',
                sayHello: function () {
                    console.log('Hi, lads');
                },
                sayBye() {
                    console.log('Bye, lads');
                }
            };
for (let key of Object.keys(person)) {
     console.log(`${key}: ${person[key]}`);
};

console.log('=================================================================================================================================');

for (let key in person) {                               /* for-in loop is shorter version of For-of loop throu keys */
     console.log(`${key}: ${person[key]}`);
};

console.log('=================================================================================================================================');

for (let value of Object.values(person)) {
     console.log(value);
};

console.log('=================================================================================================================================');

for (let [key, value]/*entries*/ of Object.entries(person)) {
     console.log(`${key} -> ${value}`);
}

console.log('=================================================================================================================================');
 
console.log(person);

console.log('=================================================================================================================================');

let otherPerson = {};

otherPerson.name = 'Mihaela';
otherPerson.age = 33;
otherPerson.height = 167;
otherPerson.hairColour = 'Blond';
otherPerson['lastName'] = 'Benova';
otherPerson.sayHello = () => console.log('Hi, people');

console.log(otherPerson);

console.log('=================================================================================================================================');

class Dog {
    constructor (name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} says Woof!`);
    }
}
let dog = new Dog('Sparky');
dog.speak();
}

objectsAndClassesExercise();