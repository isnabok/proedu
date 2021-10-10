'use strict';

/*
* Метод Math.pow() возвращает основание, возведённое в степень показатель
* Math.pow(7, 2); // 49
*/
const power = Math.pow; // power - абстракция более высокого уровня
/*
* из ф-ии power можно унаследовать 2 функции при помощи лямбды
* square & cube - частные случаи power
* таким образом мы понизили уровень абстракции
* Теперь есть 2 функции, которые вычисляют квадрат и куб
*/
const square = x => power(x, 2);
const cube = x => power(x, 3);

console.log(power(10, 2));
console.log(square(10))

console.log(power(10, 3));
console.log(cube(10));