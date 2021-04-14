/**
 * Задача 3.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив.
 */

 const array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name: 'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
];


function inspect(array) {
    if (!Array.isArray(array)) {
        throw new Error(`"${array}" is not an array`);
    }

    if (array.length === 0) {
        return [];
    }

    const filtered = array.filter(line => typeof line === 'string');
    return filtered.map(item => item.length);
}


console.log(inspect(array)); // [ 7, 11, 7, 12 ]
console.log(inspect([1, 2, 4]));
console.log(inspect([]));
// console.log(inspect(1)); error is thrown