'use strict';

// Пример замыкания
const hash = () => {
    const data = {};
    let counter = 0;
    return (key, value) => {
        data[key] = value;
        counter++;
        console.dir({ counter });
        return data;
    };
};

const h1 = hash();
h1('name', 'Marcus'); // { counter: 1 }
h1('city', 'Rome'); // { counter: 1 }
const obj1 = h1('year', 121); // { counter: 1 }
// obj1 - это получается ссылка на объект data, который возвращается из вложенной лямбды

console.dir({ obj1 }); //{ obj1: { name: 'Marcus', city: 'Rome', year: 121 } }