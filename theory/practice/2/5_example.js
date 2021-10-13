'use strict';

// Значение по умолчанию в ES6 
function fnNew(a, b = 'Hello', c = 5) {
    console.log(a, b, c);
}

fnNew(1, 2, 3); // 1 2 3
fnNew(1, 2); // 1 2 5
fnNew(1); // 1 'Hello' 5

// Значения по умолчанию для старого синтаксиса, где нет такой возможности
function fnOld(a, b, c) {
    b = b || 'Hello';
    c = c || 5;
}

fnOld(1, 2, 3); // 1 2 3
fnOld(1, 2); // 1 2 5
fnOld(1); // 1 'Hello' 5

// Hash style for default parameter values
// Передача именнованных аргументоа
function fnHash(args) {
    args.a = args.a || [4, 45, 65];
    args.b = args.b || 'Hello';
    args.c = args.c || 100;
}

fnHash({a: [15, 32, 78], b: 'World', c: 78});
fnHash({b: 'World'});
fnHash({c: 78});

'use strict';

const f1 = (...args) => {
    console.log(args);
}

f1(1, 5, 9);

// Использование forEach для разбора неограниченного числа аргументов
const f2 = (...args) => {
    args.forEach (arg => {
        console.log('Type: ' + typeof arg);
        if(typeof arg === 'object') {
            console.log('Value: ' + JSON.stringify(arg));
        } else {
            console.log('Value: ' + arg);
        }
    });
}
f2(5, 'world', [2, 'hello'], {field: 'value'});

// Функции внутри объектов
const powName = 'pow';

const obj1 = {
    fn1: function inc(a) {
        return ++a;
    },
    sum: function(a, b) {
        return a + b;
    },
    inc(a) {
        return ++a;
    },
    max: (a, b) => {
        return a > b ? a : b;
    },
    min: (a, b) => (a < b ? a : b),
    dec: a => --a,
    [powName](a, b) {
        return Math.pow(a, b);
    },
};

console.log('obj1.fn1.name: ' + obj1.fn1.name); //obj1.fn1.name: inc
console.log('obj1.sum.name: ' + obj1.sum.name); //obj1.sum.name: sum
console.log('obj1.inc.name: ' + obj1.inc.name); //obj1.inc.name: inc
console.log('obj1.max.name: ' + obj1.max.name); //obj1.max.name: max
console.log('obj1.min.name: ' + obj1.min.name); //obj1.min.name: min
console.log('obj1.dec.name: ' + obj1.dec.name); //obj1.dec.name: dec

console.log('obj1.pow(8, 6): ' + obj1.pow(8, 6)); //262144