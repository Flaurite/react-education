import { appMath } from './app-math.mjs';

/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

function f(...args) {
    let sum = 0;
    for (const arg of args) {
        if (!appMath.isNumber(arg)) {
            throw Error(`Parameter '${arg}' is not a nubmer type`);
        }
        sum += arg;
    }
    return sum;
}

console.log(f(1, 2, 3, 4));

// wrong
// console.log(f(1, "2", 3, 4));
// console.log(f(1, true, 3, 4));
// console.log(f(1, ["true", 1], 3, 4));