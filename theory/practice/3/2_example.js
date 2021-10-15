'use strict';

// Старый синтаксис
(function f1(){
    console.log('f1');
})();

(function (){
    console.log('anonymus');
})();

(() => {
    console.log('lambda');
})();

// Современный синтаксис
{
    console.log('block');
}
