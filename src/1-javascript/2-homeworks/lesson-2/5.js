/**
 * Задача 5.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

function createArray(item, repeat) {
    if(isNaN(repeat) || typeof repeat === 'string') {
        throw new Error(`"${repeat}" is not a number`);
    }

    if (!isNaN(item)
        || typeof item === 'string'
        || typeof item === 'object'
        || Array.isArray(item)) {
        const array = [];
        for (let i = 0; i < repeat; i++) {
            array.push(item);
        }
        return array;
    }

    throw new Error(`"${typeof item}" is not supported type`);
}

const result = createArray('x', '5');

console.log(result); // [ x, x, x, x, x ]