'use strict';

function inc(a) {
    return ++a;
}

const sum = function(a, b) {
    return a + b;
}

const max = (a, b) => (a > b ? a : b);

console.log('Names: ' );
console.dir({
    // Имя функции не всегда равно идентификатору из которого name взяли
    // Потому что функцию можно передать в другую функцию и попасть в другой идентификатор.
    inc: inc.name, //inc
    sum: sum.name, //sum
    max: max.name, //max
});

console.log('Arguments: ');
console.dir({
    // у фун-ии есть атребут length, который показывает сколько функция ожидает аргументов
    inc: inc.length, //1
    sum: sum.length, //2
    max: max.length, //2
});