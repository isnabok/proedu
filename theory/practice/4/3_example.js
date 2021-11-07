'use strict';

const person = {
    name: 'Marcus',
    city: 'Rome',
    year: 121,
};

if ('name' in person) {
    console.log(`Name person is: ${person.name}`); // Name person is: Marcus
}

for (const key in person) {
    const value = person[key];
    console.dir({ key, value });
}

const name = 'Vasya';
const city = 'Kiev';

// old style
const person1 = {name: name, city: city};
console.log(person1); // { name: 'Vasya', city: 'Kiev' }

// new style
const person2 = {name, city};
console.log(person2); // { name: 'Vasya', city: 'Kiev' }

// Dinamic field name
const fieldName = 'name' + 'Person';
const fieldValue = 'Vasy ' + 'Marcus';
const person3 = {
    year: 121,
    [fieldName]: fieldValue,
};
console.log(person3); // { year: 121, namePerson: 'Vasy Marcus' }

// Expression in field name
const person4 = {
    name: 'Vasy Marcus',
    ['city' + 'Born']: 'Rome',
};
console.log(person4); // { name: 'Vasy Marcus', cityBorn: 'Rome' }

// Function in field name
function fn(s) {
    return s + 'Born';
}
const person5 = {
    name: 'Vasy Petrov',
    [fn('city')]: 'Jmerenka',
}
console.log(person5); // { name: 'Vasy Petrov', cityBorn: 'Jmerenka' }