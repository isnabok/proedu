'use strict';

const person = {
    name: 'Vasy',
    city: 'Kiev',
    year: 2200,
};

console.log(`User name is ${person.name}, year: ${person.year}, city - ${person.city}`);
console.log('Person name is ' + person['name']);

delete person.name;
console.dir({ person });

delete person['city'];
console.dir({ person });

// With getter
const person2 = {
    name: 'Marcus',
    get city() {
        return 'Roma'
    },
    set city(value) {
        console.log('Marcus remains in Rome');
    },
};

person2.city = 'Kiev';
console.dir({ person2 });