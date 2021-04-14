/**
 * Задача 3.
 *
 * Дописать требуемый код что бы код работал правильно.
 * Необходимо проверить длину строки в переменной string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * В консоль должна вывестись (при необходимости) усечённая строка.
 *
 * Условия:
 * - Переменная string должна обладать типом string;
 * - Переменная maxLength должна обладать типом number.
 */

function trancate(string, maxLength) {
    if (typeof string !== 'string' ||
        (isNaN(maxLength) || typeof maxLength === 'string')) {
        return null;
    }

    if (string.length <= maxLength) {
        return string;
    }

    return string.substring(0, maxLength - 3) + '...';
}


console.log(trancate('Вот, что мне хотелось бы сказать на эту тему:', 21));