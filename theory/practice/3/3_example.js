'use strict';

function f1(a, b) {
    console.log('f1(' + a + ', ' + b + ')');
}

f1(2, 3);
// Все что может быть передано вместо null (объект) привяжет контектс к этой функции
// Все поля этого объекта будут доступны в функции через this
f1.call(null, 2, 3);

const arr = [2, 3];
// ... при вызове функции - спред оператор, разбивает массив на элементы и делает их аргументами функции 
f1(...arr);// f1(2, 3)
// Тоже самое делает и apply только вторым параметром принимает массив
f1.apply(null, arr); //f1(2, 3)