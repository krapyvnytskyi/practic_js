//TODO: № 1 на if...else ===============================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
// const a = 11;
// if (a === 10) {
//   console.log("Вірно");
// } else {
//   console.log("Невірно");
// }

// Другий варіант

// console.log(a === 10 ? "Вірно" : "Невірно");

// /TODO: № 3 на if...else if ===============================================
// // У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// // Попадає це число (у першу, другу, третю або четверту).

// const min = 69;
// if (0 < min && min <= 15) {
//   console.log("перша");
// } else if (15 < min && min<= 30) {
//   console.log("двуга");
// } else if (30 < min &&  min<= 45) {
//   console.log("третя");
// } else if (45 < min && min<= 59) {
//   console.log("четверта");
// } else {
//   console.log("щоооо?");
// }

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.
// const num = 5;
// let result;
// switch (num) {
//     case 1:
//         result = "зима";
//         break;
//     case 2:
//         result = "весна";
//         break;
//     case 3:
//         result = "літо";
//         break;
//     case 4:
//         result = "осінь";
//         break;
    
//     default:
//         result = "Щооо?";
// }
// console.log(result);
// TODO: № 6 на for ===================================
// За допомогою циклу for додайте всі парні числа від min до max
// const min = 0;
// const max = 20;
// let sum = 0;

// for (let i = min; i < max; i += 1) {
//     if (i % 2 !== 0) {
//         continue;
//     }

//     sum += i;
    
// }

// TODO: № 8  =========================================================
// Напишіть if..else, що відповідає наступному switch:


// const browser = "Opera"
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
    
// }

// if (browser === "Edge") {
//     alert( "You've got the Edge!" );
// } else if (browser === "Chrome"  || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope you didn`t pick edge ))))!' );
// }


// TODO: № 7 на for =====================================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max


// function showNumbers(min, max){
//     for(let i = max; i >= min; i-= 1){
//         if(i % 2 ===0){
//             console.log(i);
//         }
        
//     }
// }
// console.log(showNumbers(4, 14));




