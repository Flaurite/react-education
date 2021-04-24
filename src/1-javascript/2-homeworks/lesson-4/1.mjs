import { appMath } from './app-math.mjs';
/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

function f(num) {
    if (!appMath.isNumber(num)) {
        throw Error(`Parameter '${num}' is not a number type`);
    }

    return Math.pow(num, 3);
}


console.log(f(2)); // 8
console.log(f(3)); // 27
console.log(f(4)); // 64

// wrong

// console.log(f("2"));
// console.log(f(true));
// console.log(f([1, 2]));