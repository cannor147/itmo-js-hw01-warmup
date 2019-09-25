'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw TypeError('Arguments should have type \'number\'.');
  }
  return a + b;
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
  if (isNaN(year)) {
    throw TypeError('Argument should have type \'number\'.');
  }
  if (year <= 0) {
    throw RangeError('Argument should be a non-negative number.');
  } else {
    return Math.floor((year - 1)/100) + 1;
  }
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
  if (typeof hexColor !== 'string') {
    throw TypeError('Argument should have type \'string\'.');
  }
  if (!/^#?([\da-f]{6})$/.test(hexColor)) {
    return '(' + hexColor.substr(1).match(/.{1,2}/g).map(function (hex) {
      return parseInt(hex, 16)
    }).join(', ') + ')';
  } else {
    throw RangeError('Argument should be in hex format.');
  }
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
  if (isNaN(n)) {
    throw TypeError('Argument should have type \'number\'.');
  }
  if (n > 1) {
    return fibonacciProblem(n - 1) + fibonacciProblem(n - 2);
  } else if (n < 0) {
    throw RangeError('Argument should be a non-negative number.');
  } else {
    return 1;
  }
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
  if (!Array.isArray(matrix) || !Array.isArray(matrix[0])) {
    throw TypeError('Argument should be a 2D array.');
  }
  const n = matrix.length;
  const m = matrix[0].length;

  const result = [];
  for (let j = 0; j < m; j++) {
    result.push([]);
    for (let i = 0; i < n; i++) {
      result[j].push(matrix[i][j]);
    }
  }
  return result;
}

/**
 * Переводит число в другую систему счисления
 * @param {Number} n Число для перевода в другую систему счисления
 * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
 * @throws {TypeError} Когда переданы аргументы некорректного типа
 * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
 * @returns {String} Число n в системе счисления targetNs
 */
function numberSystemProblem(n, targetNs) {
  if (isNaN(n) || isNaN(targetNs)) {
    throw TypeError('Arguments should have type \'number\'.');
  }
  if (targetNs < 2 || targetNs > 37) {
    throw RangeError('Argument n should be between 2 and 36.');
  }
  return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
  if (typeof phoneNumber !== 'string') {
    return false;
  }
  return /^8-800-(\d{3})-(\d{2})-(\d{2})$/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
  if (typeof text !== 'string') {
    throw TypeError('Argument should have type \'string\'.');
  }
  const smileCount = text.match(/:-\)/g) === null ? 0 : text.match(/:-\)/g).length ;
  const reversedSmileCount = text.match(/\(-:/g) === null ? 0 : text.match(/\(-:/g).length ;
  return smileCount + reversedSmileCount;
}

/**
 * Определяет победителя в игре 'Крестики-нолики'
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
  const reversedField = matrixProblem(field);

  const fieldString = '|' + field.map(function (row) {
    return row.join('');
  }).join('|') + '|';
  const reversedFieldString = '|' + reversedField.map(function (row) {
    return row.join('');
  }).join('|') + '|';

  let xWin = fieldString.includes('xxx');
  xWin |= reversedFieldString.includes('xxx');
  xWin |= /^\|x..\|.x.\|..x\|$/.test(fieldString);
  xWin |= /^\|x..\|.x.\|..x\|$/.test(reversedFieldString);

  let oWin = fieldString.includes('ooo');
  oWin |= reversedFieldString.includes('ooo');
  oWin |= /^\|o..\|.o.\|..o\|$/.test(fieldString);
  oWin |= /^\|o..\|.o.\|..o\|$/.test(reversedFieldString);

  if (xWin && !oWin) {
    return 'x';
  } else if (oWin && !xWin) {
    return 'o';
  } else {
    return 'draw';
  }
}

module.exports = {
  abProblem,
  centuryByYearProblem,
  colorsProblem,
  fibonacciProblem,
  matrixProblem,
  numberSystemProblem,
  phoneProblem,
  smilesProblem,
  ticTacToeProblem
};
