const matrixLength = parseInt(prompt('Введіть розмір масиву:'));

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMatrix(matrixLength) {
    const matrix = [];
    for (let i = 0; i < matrixLength; i++) {
        matrix[i] = [];
        for (let j = 0; j < matrixLength; j++) {
            matrix[i][j] = getRandomNumber(1, 9);
        }
    }
    return matrix;
}

const matrix = generateMatrix(matrixLength);
printMatrix(matrix);

function printMatrix(matrix, highlightedElements) {
    document.write("<br>");
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let value = matrix[i][j];
            if (highlightedElements && highlightedElements.includes(`${i}-${j}`)) {
                value = highlightElement(value);
            }
            document.write(value + "&nbsp;&nbsp;");
        }
        document.write("<br>");
    }
}

function highlightElement(value) {
    return '<span style="color: red;">' + value + '</span>';
}

function calculateMainDiagonalSum(matrix) {
    let sum = 0;
    const highlightedElements = [];

    document.write('<br>calculateMainDiagonalSum ');

    for (let i = 0; i < matrix.length; i++) {
        const element = matrix[i][i];
        sum += element;
        highlightedElements.push(`${i}-${i}`);
    }

    printMatrix(matrix, highlightedElements);
    return sum;
}

// Розрахунок та вивід суми головної діагоналі
const mainDiagonalSum = calculateMainDiagonalSum(matrix);
document.write(`<br>Сума головної діагоналі: ${mainDiagonalSum}</br>`);


// ------------------------------------------------------
function calculateSecondaryDiagonalSum(matrix) {
    let sum = 0;
    const highlightedElements = [];
    // document.write('<br>calculateSecondaryDiagonalSum ');
    for (let i = 0; i < matrix.length; i++) {
        const element = matrix[i][matrix.length - 1 - i];
        sum += element;
        highlightedElements.push(`${i}-${matrix.length - 1 - i}`);
    }
    printMatrix(matrix, highlightedElements);
    return sum;
}
// Розрахунок та вивід суми побічної діагоналі
const secondaryDiagonalSum = calculateSecondaryDiagonalSum(matrix);
document.write('<br>Cума побічної діагоналі: ' + secondaryDiagonalSum);

// // ------------------------------------------------------
function calculateUpperRightHalfSumWithoutMain(matrix) {
    let sum = 0;
    const highlightedElements = [];
    // document.write('<br>calculateUpperRightHalfSumWithoutMain ');
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (i < j) {
                sum += matrix[i][j];
                highlightedElements.push(`${i}-${j}`);
            }
        }
    }
    printMatrix(matrix, highlightedElements);
    return sum;
}

// Сума половини матриці без головної діагоналі зверху справа
const upperRightHalfSum = calculateUpperRightHalfSumWithoutMain(matrix);
document.write('<br>Сума половини матриці без головної діагоналі зверху зправа: ' + upperRightHalfSum);

// // ------------------------------------------------------

function calculateUpperRightHalfSumWithMain(matrix) {
    let sum = 0;
    const highlightedElements = [];
    // document.write('<br>calculateUpperRightHalfSumWithoutMainWithMain ');
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[i].length; j++) {
            sum += matrix[i][j];
            highlightedElements.push(`${i}-${j}`);

        }
    }
    printMatrix(matrix, highlightedElements);
    return sum;
}
// Сума половини матриці з головною діагоналлю зверху справа
const upperRightHalfSumWithMain = calculateUpperRightHalfSumWithMain(matrix);
document.write('<br>Сума половини матриці з головною діагоналлю зверху зправа: ' + upperRightHalfSumWithMain);

// // ------------------------------------------------------

function calculateLowerLeftHalfSumWithoutMain() {
    let sum = 0;
    const highlightedElements = [];
    // document.write('<br>calculateLowerLeftHalfSumWithoutMain');
    const size = matrix.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < i; j++) {
            sum += matrix[i][j];
            highlightedElements.push(`${i}-${j}`);
        }
    }
    printMatrix(matrix, highlightedElements);
    return sum;
}
// Сума половини матриці без головної діагоналі знизу зліва
const lowerLeftHalfSumWithoutMain = calculateLowerLeftHalfSumWithoutMain(matrix);
document.write('<br>Сума половини матриці без головної діагоналі знизу зліва: ' + lowerLeftHalfSumWithoutMain);
// // ------------------------------------------------------

function calculateLowerLeftHalfSumWithMain() {
    let sum = 0;
    const highlightedElements = [];
    // document.write('<br>calculateLowerLeftHalfSumWithMain ');
    const size = matrix.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j <= i; j++) {
            sum += matrix[i][j];
            highlightedElements.push(`${i}-${j}`);
        }
    }
    printMatrix(matrix, highlightedElements);
    return sum;
}

// Сума половини матриці з головною діагоналлю знизу зліва
const lowerLeftHalfSumWithMain = calculateLowerLeftHalfSumWithMain(matrix);
document.write('<br>Сума половини матриці з головною діагоналлю знизу зліва: ' + lowerLeftHalfSumWithMain);

// // ------------------------------------------------------

function calculateUpperLeftHalfSumWithoutSecondary() {
    let sum = 0;
    const highlightedElements = [];
    // document.write('<br>calculateUpperLeftHalfSumWithoutSecondary ');
    const size = matrix.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i + j < size - 1) {
                sum += matrix[i][j];
                highlightedElements.push(`${i}-${j}`);

            }
        }
    }
    printMatrix(matrix, highlightedElements);
    return sum;
}
// Сума половини матриці без побічної діагоналі зверху зліва
const upperLeftHalfSumWithoutSecondary = calculateUpperLeftHalfSumWithoutSecondary(matrix);
document.write('<br>Сума половини матриці без побічної діагоналі зверху зліва: ' + upperLeftHalfSumWithoutSecondary);

// // ------------------------------------------------------

function calculateUpperLeftHalfSumWithSecondary() {
    let sum = 0;
    const highlightedElements = [];
    // document.write('<br>calculateUpperLeftHalfSumWithSecondary ');
    const size = matrix.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if(i+j <= size-1){
                sum += matrix[i][j];
                highlightedElements.push(`${i}-${j}`);
            }
        }
    }
    printMatrix(matrix, highlightedElements);
    return sum;
}
// Сума половини матриці з побочною діагоналлю зверху зліва
const upperLeftHalfSumWithSecondary = calculateUpperLeftHalfSumWithSecondary(matrix);
document.write('<br>Сума половини матриці з побічною діагоналлю зверху зліва: ' + upperLeftHalfSumWithSecondary);

// // ------------------------------------------------------

function calculateLowerRightHalfSumWithoutSecondary(matrix) {
    let sum = 0;
    const highlightedElements = [];
    // document.write('<br>calculateLowerRightHalfSumWithoutSecondary ');
    const size = matrix.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i + j > size - 1) {
                sum += matrix[i][j];
                highlightedElements.push(`${i}-${j}`);
            }
        }
    }
    printMatrix(matrix, highlightedElements);
    return sum;
}
// Сума половини матриці без побічної діагоналі знизу справа
const lowerRightHalfSumWithoutSecondary = calculateLowerRightHalfSumWithoutSecondary(matrix);
document.write('<br>Сума половини матриці без побічної діагоналі знизу зправа: ' + lowerRightHalfSumWithoutSecondary);

// // ------------------------------------------------------
function calculateUpperRightSquareSum(matrix) {
    let cornerElement = +prompt('Введіть значення кутового елемента квадрата верх праворуч:', Math.round(matrix.length/2));
    let sum = 0;
    const highlightedElements = [];
    // document.write('<br>calculateUpperRightSquareSum ');
    const size = matrix.length;

    for (let i = 0; i < cornerElement; i++) {
        for (let j = cornerElement; j < size; j++) {
            sum += matrix[i][j];
            highlightedElements.push(`${i}-${j}`);

        }
    }
    printMatrix(matrix, highlightedElements);
    return sum;
}
// Сума квадрата верхнього правого кута
const upperRightSquareSum = calculateUpperRightSquareSum(matrix);
document.write('<br>Сума квадрата верхнього правого кута: ' + upperRightSquareSum);

// // ------------------------------------------------------
function calculateLowerLeftSquareSum(matrix) {
    let cornerEl = +prompt('Введіть значення кутового елемента квадрата низ ліво:', Math.round(matrix.length/2));
    let sum = 0;
    const highlightedElements = [];
    // document.write('<br>calculateLowerLeftSquareSum ');
    const size = matrix.length;
    for (let i = cornerEl; i < size; i++) {
        for (let j = 0; j < cornerEl; j++) {
            sum += matrix[i][j];
            highlightedElements.push(`${i}-${j}`);
        }
    }
    sum += cornerEl;
    printMatrix(matrix, highlightedElements);
    return sum;
}

// Сума квадрата низ ліво
const lowerLeftSquareSum = calculateLowerLeftSquareSum(matrix);
document.write('<br>Сума квадрата низ ліво: ' + lowerLeftSquareSum);

// // ------------------------------------------------------

let rowForSum = parseInt(prompt('Введіть номер рядка для підрахунку суми:'));
function calculateRowSum(matrix) {
    if (rowForSum < 0 || rowForSum >= matrix.length) {
        return 'Некоректний номер рядка';
    }
    let sum = 0;
    const highlightedElements = [];
    // document.write('<br>calculateRowSum ');
    let row = matrix[rowForSum];

    for (let i = 0; i < row.length; i++) {
        sum += row[i];
        highlightedElements.push(`${rowForSum}-${i}`);
    }
    printMatrix(matrix, highlightedElements)
    return sum;
}
// Сума строки с
const rowSum = calculateRowSum(matrix);
document.write(`<br>Сума строки ${rowForSum}: ${rowSum}`);

// // ------------------------------------------------------

const columnIndex = parseInt(prompt('Введіть номер стовпця для підрахунку суми:'));
function calculateColumnSum(matrix) {
    if (columnIndex < 0 || columnIndex >= matrix[0].length) {
        return 'Некоректний номер стовпця'
    }
    let sum = 0;
    const highlightedElements = [];
    // document.write('<br>calculateColumnSum ');
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][columnIndex];
        highlightedElements.push(`${i}-${columnIndex}`);
    }
    printMatrix(matrix, highlightedElements)
    return sum;
}

// Сумма стовпця k
const columnSum = calculateColumnSum(matrix);
document.write(`<br>Сумма стовпця ${columnIndex}: ${columnSum}<br>`);

















