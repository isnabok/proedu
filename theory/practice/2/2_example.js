'use strict';

const cities = ['Kiev', 'Roma', 'London', 'Riga', 'Baku'];
// f(s) - lambda expression - отображает длинну строки переданной в нее (s)
const f = s => s.length;

/*
* Function declaration
* cities & f из внешнего блока будут перекрыты внутренним объявлением
* .map - метод массива для перебора каждого элемента массива.
*/  
function f1() {
    const cities =  ['Kiev', 'Baku'];
    const f = s => s.toUpperCase();
    console.dir({ cities });
    console.dir(cities.map(f));

    //блок операторов, который зактроет (переопределит) вешний f ф-и f1
    {
        const f = s => s.toLowerCase();
        console.dir({ cities });
        console.dir(cities.map(f));
    }
    // блок операторов переопределит cities, а f возьмет из f1 (toUpperCase)
    {
        const cities = ['Roma', 'London', 'Riga'];
        console.dir({ cities });
        console.dir(cities.map(f));
    }
}

f1();

console.dir({ cities });
// f будет взята из начала файла, из общего скоупа
console.dir(cities.map(f));