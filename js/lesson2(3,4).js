//TODO: № 1  ============================================================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [56, 5, 35, 56, 12, 1, 7, 80, 3];

// function findSmallerNumber(numbers) {
//     return Math.min(...numbers);
// }

// console.log(findSmallerNumber([2, 5, 35, 56, 12, 1, 7, 80, 3]));

// function findSmallerNumber(array) {
//     if (!Array.isArray(array)) {
//         return 'фигня';
//     }
//     let numberMin = array[0];
//     for (const number of array) {
//         if (numberMin > number) {
//             numberMin = number;
//         }
//     }
//     return numberMin;
// }

// console.log(findSmallerNumber(numbers));//1

//TODO: № 2 =============================================================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

/*
function caclculateAverage(...args) {
    
    let sum = 0;

    let totalCount = 0;

    for (const arg of args) {

        if (typeof arg !== "number") {
            continue;
        };

        sum += arg;

        totalCount += 1;
    };

    return sum / totalCount;
};

console.log(caclculateAverage(1, 'fttjfghgy', 1, 2, 20, 'fhth', 'dgfhgyjgy'));
*/
//TODO: № 3 ==============================================================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15, 18];

// function sumNumder(some) {
//   const newArr = [];
//   for (let i = 0; i < some.length - 1; i += 1) {
//     newArr.push(some[i] + some[i + 1]);
//   }

//   return newArr;
// }
// console.log(sumNumder(someArr));

// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (typeof obj[key] === "number") {
//         obj[key] *= 2;
//       }
//     }
//   }
//   return obj;
// }

// console.log(multiplyNumeric(menu));
