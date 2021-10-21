'use strict';

// Сумматор на основе двух вложенных лямбд
const add = x => y => {
    const z = x + y;
    console.log(x + '+' + y + '=' + z);
    return z;
}

const res = add(2)(3);
console.log(res);