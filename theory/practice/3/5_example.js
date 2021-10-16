'use strict';

const hash = () => {
    const data = {};
    Object.defineProperty(data, 'add', {
        enumerable: false,
        value(key, value) {
            data[key] = data;
            return data;
        }
    });
    return data;
};

console.dir(
        hash()
            .add('name', 'Marcus')
            .add('city', 'Rome')
            .add('born', 121)
);