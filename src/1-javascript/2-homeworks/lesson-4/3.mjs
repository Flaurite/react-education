import { appMath } from "./app-math.mjs";

/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

function isEven(num) {
    if (!appMath.isNumber(num)) {
        throw Error(`Parameter '${num}' is not a nubmer type`);
    }

    return num % 2 == 0;
}

console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(4));

// wrong

// console.log(isEven("1"));
// console.log(isEven(true));
// console.log(isEven([1, 2]));