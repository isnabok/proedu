'use strict';

// Значение по умолчанию в ES6 
function fnNew(a, b = 'Hello', c = 5) {
    console.log(a, b, c);
}

fnNew(1, 2, 3); // 1 2 3
fnNew(1, 2); // 1 2 5
fnNew(1); // 1 'Hello' 5