import { appMath } from "./app-math.mjs";

/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 * 
 * Заметки:
 * - В решении вам понадобится использовать цикл с перебором массива.
 */

function getDivisors(num) {
    if (!appMath.isNumber(num)) {
        throw Error(`Parameter '${num}' is not a nubmer type`);
    }

    if (num < 1) {
        throw Error("Parameter is less than 0");
    }

    let divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

console.log(getDivisors(10));

// wrong
// console.log(getDivisors("1"));
// console.log(getDivisors(true));
// console.log(getDivisors([1, 2]));