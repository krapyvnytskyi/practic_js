/*
Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.
*/

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const sum = repairBots + defenceBots;
const message = `${companyName} has ${sum} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"



/*
6.
Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо 
разделить вес в киллограммах на квадрат высоты человека в метрах.
Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). 
Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
Индекс массы тела необходимо округлить до одной цифры после запятой;
*/

let weight = '88.3';
let height = '1.75';

Number.parseFloat(weight);
Number.parseFloat(height);

const bmi = weight / (Math.pow(height, 2));

const roundedBmi = bmi.toFixed(1);         // string
console.log(typeof roundedBmi); // 28.8




/*
7, 8.
Каким будет результат выражений?
*/

console.log(5 > 4);  // true
console.log(10 >= '7');  // true
console.log('2' > '12');  // true/ Одинаковые типы. Это сравнивается как строки - посимвольно. И первые символы 2 больше, чем один
console.log('2' < '12');  //  false
console.log('4' == 4);     // true
console.log('6' === 6);   // false
console.log('false' === false);  // false
console.log(1 == true);  // true
console.log(1 === true);  // false
console.log('0' == false); // true. Сначала приводится к числу 0, потом о к фолс
console.log('0' === false); // false
console.log('Papaya' < 'papaya'); // true
console.log('Papaya' === 'papaya');  // false
console.log(undefined == null);  // true
console.log(undefined === null);  // false
console.log(true && 3);   // 3
console.log(false && 3);  // false 
console.log(true && 4 && 'kiwi');  // 'kiwi' 
console.log(true && 0 && 'kiwi');  // 0
console.log(true || 3);   // true
console.log(true || 3 || 4);  // true
console.log(true || false || 7);  // true
console.log(null || 2 || undefined);  // 2
console.log((1 && null && 2) > 0);  // false
console.log(null || (2 && 3) || 4);  // 3



/*
9.
Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, 
если оно не равно undefined или null. В противном случае должно присваиваться значение defaultValue. 
Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false. 
Используй оператор ?? (nullish coalescing operator).
*/

const incomingValue = null;
const defaultValue = 10;

const value9 = incomingValue ?? defaultValue;
console.log(value9);



/*
10.
Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.
•	70 покажет 01:10
•	450 покажет 07:30
•	1441 покажет 24:01
*/

const totalMinutes = 1441;
const hours = Math.floor(totalMinutes / 60);
const minutes = Math.round(totalMinutes % 60);

// Переводим в формат 2х чисел. В этом методе мы указываем что добавляем нули в начало, 
// пока не получим 2 числа

const resHours = String(hours).padStart(2, 0);
const resMinutes = String(minutes).padStart(2, 0);
console.log(`${resHours}:${resMinutes}`);



/*
11.
Используя конструкцию if..else и prompt, напиши код, который будет спрашивать: 
"Какое официальное название JavaScript?". Если пользователь вводит ECMAScript, 
то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"
*/

const answer = prompt('Какое официальное название JavaScript?');

if (answer === 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
};


/*
12.
Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.". 
Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.
*/

const hours1 = 14;
const minutes1 = 0;
let message1 = '';

if (minutes1 === 0) {
    message1 = `${hours1} ч.`;
} else {
    message1 = `${hours1} ч. ${minutes1} мин.`
};
console.log(message1);


/*
13.
Напиши скрипт, который выводит в консоль строку "Это положительное число",если в prompt 
пользователь ввел число больше нуля.Если был введен ноль, выводи в консоль строку "Это ноль".
Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".
*/

let answer1 = prompt('Введите число');

if (answer1 > 0) {
    console.log('Это положительное число');
} else if (answer1 < 0) {
    console.log('Это отрицательное число');
} else {
    console.log('Это ноль');
};

// Или нужно было привести результат промта к числу

let answer2 = Number(prompt('Введите число'));



/*
14.
Напиши скрипт, который сравнивает числа в переменных a и b. Если оба значения больше 100, 
то выведи в консоль максимальное из них. 
В противном случае в консоли должна быть сумма значения b и числа 512.
*/

const a = 20;
let b = 180;

if (a > 100 && b > 100) {

    if (a >= b) {
        console.log(a);
    } else {
        console.log(b);
    }; 
} else {
    console.log(b += 512);
};



/*
15.
Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. 
Если нет, добавь в конец значения link этот символ. Используй конструкцию if...else.
*/

let link = 'https://my-site.com/about';

if (!link.endsWith('/')) {
    link += '/';
};

console.log(link);



/*
16.
Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. 
Если нет, добавь в конец значения link этот символ, но только в том случае, 
если в link есть подстрока "my-site". Используй конструкцию if...else.
*/

let link1 = 'https://some-my-site.com/about';

if (!link1.endsWith('/') && link1.includes('my-site')) {
    link1 += '/';
}
console.log(link1);

// Выполни рефакторинг кода предыдущей задачи используя тернарный оператор.

let link2 = (!link1.endsWith('/') && link1.includes('my-site'))
    ? console.log(link1 += '/')
    : null;



/*
17.
Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.
Если значение переменной hours:
•	меньше 17, выводи строку "Pending"
•	больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
•	больше 24 , выводи строку "Overdue"
*/

const hours10 = 23;

if (hours10 < 17) {
    console.log("Pending");
} else if (hours10 >= 17 && hours10 <= 24) {
    console.log("Expires");
} else {
    console.log("Overdue"); 
};




/*
18.
Напиши скрипт для отображения времени дедлайна сдачи проекта.
•	Eсли до дедлайна 0 дней - выведи строку "Сегодня"
•	Eсли до дедлайна 1 день - выведи строку "Завтра"
•	Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
•	Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"
*/

const daysUntilDeadline = 2;
let message10 = '';

if (daysUntilDeadline === 0) {
    message10 = 'Сегодня';
} else if (daysUntilDeadline === 1) {
    message10 = 'Завтра';
} else if (daysUntilDeadline === 2) {
    message10 = 'Послезавтра';
} else if (daysUntilDeadline >= 3) {
    message10 = 'Дата в будущем';
};

console.log(message10);



/*
19.
Выполни рефакторинг кода задачи используя switch.
*/

switch (daysUntilDeadline) {
    case 0:
        message10 = 'Сегодня';
        break;
    case 1:
        message10 = 'Завтра';
        break;
    case 2:
        message10 = 'Послезавтра';
        break;
    default:
        message10 = 'Дата в будущем';
};
console.log(message10);



/*
20.
Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max, 
н*/о только если число кратное 5.

let maxNumber = 50;
let minNumber = 3;

for (let i = minNumber; i <= maxNumber; i += 1){
    if (!(i % 5)) {
       console.log(i); 
    }
};




/*
21.
Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.
•	Если посетитель вводит "Админ", то prompt запрашивает пароль
•	Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
•	В противном случае вывести строку "Я вас не знаю"
Пароль проверять так:
•	Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
•	Иначе выводить строку "Неверный пароль"
*/

const login = prompt('Введите логин');
let password;

if (login === "Админ") {
    password = prompt('Введите пароль');

    if (password === 'Я админ') {
        console.log('Здравствуйте!');
    } else {
        console.log('Неверный пароль');
    };

} else if (!login) {
    console.log('Отменено');
} else {
    console.log('Я вас не знаю');
};




/*
Напиши скрипт, который выведет строку в формате: Гость х y поселяется в z номер q.
Подставив вместо  x y z q значения переменных. 
*/

const firstName = 'Chelsy';
const lastName = 'Emerald';

const room = 716;
const type = 'VIP';

const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
console.log(welcomeMsg);



/*
НОРМАЛИЗАЦИЯ пользовательского ввода
*/

let brand = 'Samsung';       // Пользователь вводит так
const inBd = 'samsung';      // В базе данных так

brand.toLowerCase()          // Но по хоошему нужна новая переменная,т.к. метод создает новую строку 

if (brand.toLowerCase() === inBd) {
    console.log(`Да, бренд ${brand} есть в базе!`);
};



/*
Можно ли не трогать пепвую букву, а нормализировать все остальные буквы?
Да*/, строка индексируется.


let brand1 = 'samsUng';
const inBd1 = 'samsung';

const partBrand = brand1.slice(1);
const normalizedBrand = partBrand.toLowerCase();
brand1 = brand1[0] + normalizedBrand;
console.log(brand1);



/*
ПОИСК в СТРОКЕ
*/

const blackListedWord1 = 'распродажа';
const blackListedWord2 = 'спам';

const string1 = 'Привет! Я принц Такой-то. Это не спам. Предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели! Не пропустите!';
const string3 = 'Рекламная кампания #jbhjfbkfbk';

const normalizedString1 = string1.toLowerCase();
console.log(normalizedString1.includes(blackListedWord1));
console.log(normalizedString1.includes(blackListedWord2));

const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes(blackListedWord1));
console.log(normalizedString2.includes(blackListedWord2));

const normalizedString3 = string3.toLowerCase();
console.log(normalizedString3.includes(blackListedWord1));
console.log(normalizedString3.includes(blackListedWord2));



/*
Напиши скрипт, который проверяет вхождение числа в отрезок х1 – х2.
*/

const x1 = 5;
const x2 = 20;
const num = 4;

console.log(`Число ${num} входит в отрезок от ${x1} до ${x2} ?`, num > x1 && num < x2);

// Число num попадает ли в отрезок до x1 или после x2?

console.log(`Число ${num} попадает ли в отрезок до ${x1} или после ${x2} ?`, num < x1 || num > x2);



/*
Напиши скрипт, который проверяет возможность открыть чат с пользователем. Для этого пользователь должен быть другом, 
быть онлайн и БЕЗ режима “не беспокоить”.
*/

const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = (isOnline && isFriend && !isDnd);

console.log(`Можно ли открыть чат с пользователем?`, canOpenChat);



/*
Написать скрипт проверки подписки пользователя при доступе к контенту.
Есть три типа подписки free, pro, vip.
Получить доступ могут только пользователи pro и vip.
*/

const subscriptionFree = 'free';
const subscriptionPro = 'pro';
const subscriptionVip = 'vip';

const subscriptionUsers = 'pro';

const canAccessContent = (subscriptionUsers === subscriptionPro || subscriptionUsers === subscriptionVip);

console.log('Предоставить ли пользователю доступ к контенту?', canAccessContent);



/*
Если есть много условий, а выполниться из них должно только одно
*/

const salary = 1500;

if (salary < 500) {
    console.log('Уровень 1');

} else if(salary >= 500 && salary < 1500) {
    console.log('Уровень 2');

} else if(salary >= 1500 && salary < 3000) {
    console.log('Уровень 3');

} else {
    console.log('Уровень 4');
};



/*
Есть баланс. И нужно записать что-то в переменную по условию
Тернарный оператор.
*/

const balance = 1000;
let message;

if (balance >= 0) {
    message = 'Позитивный балланс';
} else {
    message = 'Негативный балланс';
};

// Это все заменяется на:

const message1 = balance >= 0 ? 'Позитивный балланс' : 'Негативный балланс';
console.log(message1);



/*
Напиши скрипт обработки покупки в магазине. 
Баланс пользователя хранится в переменной balance. 
Сумма покупки хранится в переменной payment. 
Перед проверкой вывести сообщение, что общая сумма заказа столько-то кредитов. Проверяем количество доступных средств на счету.
Если сумма покупки не превышает баланс, то вычесть из баланса сумму покупки и вывести сообщение: “На счету осталось столько-то кредитов”.
Если сумма покупки превышает баланс, то вывести сообщение: На счету недостаточно средств для проведения операции.
В конце вывести сообщение: Операция завершена.
*/

let balanceAll = 10000;
const payment = 11000;
let messageAll;

console.log(`Общая сумма заказа ${payment} кредитов`)

if (payment <= balanceAll) {
    
    balanceAll -= payment;
    messageAll = `На счету осталось ${balanceAll} кредитов.`;
    console.log(messageAll);
} else {
    
    messageAll = 'На счету недостаточно средств для проведения операции.';
    console.log(messageAll);
};

console.log('Операция завершена.');



/*
Напиши скрипт подсчета суммы покупки со скидкой в зависимости от потраченной суммы за все время (партнерская программа)
Общая сумма потраченного хранится в переменной totalSpent.
Сумма текущего платежа хранится в переменной payment.
Скидка хранится в переменной discount.
Если потрачено от 100 до 1000, то бронзовый партнер, скидка 2%
Если потрачено от 1000 до 5000 , то серебряный партнер, скидка 5%
Если потрачено больше 5000, то золотой партнер и скидка 10%. 
Если потрачено меньше 100, не партнер, скидка 0.
В результате вывести сообщение: Оформляем заказ на сумму такую-то со скидкой такой-то.
*/

let totalSpent = 5500;
let payment8 = 1000;
let discount = 0;

let message8;

if (totalSpent > 100 && totalSpent <= 1000) {
    discount = 0.02;
    
} else if (totalSpent > 1000 && totalSpent <= 5000) {
    discount = 0.05;
    
} else if (totalSpent > 5000) {
    discount = 0.1;
    
} else {
    message8 = `У вас еще нет партнерской скидки.`;
    console.log(message8);
};

payment8 -= payment8 * discount;
message8 = `Оформляем заказ на сумму ${payment8}. Оформляем заказ со скидкой ${discount * 100}%.`;
console.log(message8);

totalSpent += payment8;
console.log(totalSpent);




/*
Напиши скрипт выбора стоимости отеля по количеству звезд.
1 – 20$, 2 – 30$, 3 – 50$, 4 – 70$, 5 – 120$.
Если в переменной stars что-либо кроме чисел 1-5, то выведи строку : Такого количества звезд нет.
*/


const stars = 5;
let price;

if (stars === 1) {
    price = 20;
    console.log(`Стоимость отеля ${stars} звезд - ${price} кредитов.`);

} else if (stars === 2) {
    price = 30;
    console.log(`Стоимость отеля ${stars} звезд - ${price} кредитов.`);

} else if (stars === 3) {
    price = 50;
    console.log(`Стоимость отеля ${stars} звезд - ${price} кредитов.`);

} else if (stars === 4) {
    price = 70;
    console.log(`Стоимость отеля ${stars} звезд - ${price} кредитов.`);

} else if (stars === 5) {
    price = 1200;
    console.log(`Стоимость отеля ${stars} звезд - ${price} кредитов.`);

} else {
    console.log('Такого количества звезд нет');
};



// Перепишем на switch

switch (stars) { 
    case 1:
        price = 20;
        console.log(`Стоимость отеля ${stars} звезд - ${price} кредитов.`);
        break;
    
    case 2:
        price = 30;
        console.log(`Стоимость отеля ${stars} звезд - ${price} кредитов.`);
        break;
    
    case 3:
        price = 50;
        console.log(`Стоимость отеля ${stars} звезд - ${price} кредитов.`);
        break;
    
    case 4:
        price = 70;
        console.log(`Стоимость отеля ${stars} звезд - ${price} кредитов.`);
        break;
    
    case 5:
        price = 120;
        console.log(`Стоимость отеля ${stars} звезд - ${price} кредитов.`);
        break;
    
    default:
        console.log('Такого количества звезд нет');
};



/*
Напиши скрипт выбора опции доставки товара. Опция хранится в переменной option:  1 - самовывоз, 2 - Курьер,  3 – почта.
В переменную месседж записать сообщение в зависимости от опции.
Вы сможете забрать товар завтра с 12ти часов в нашем офисе
Курьер доставит заказ завтра с 9ти до 18ти.
Посылка будет отправлена сегодня
Вам перезвонит менеджер
*/

const option = 3;
let message = '';

switch (option) {
    case 1:
        message = 'Вы сможете забрать товар завтра с 12ти часов в нашем офисе';
        console.log(message);
        break;
    
    case 2:
        message = 'Курьер доставит заказ завтра с 9ти до 18ти';
        console.log(message);
        break;
    
    case 3:
        message = 'Посылка будет отправлена сегодня';
        console.log(message);
        break;
    
    default:
        message = 'Вам перезвонит менеджер';
        console.log(message);
};



/*
Напиши скрипт, который подсчитывает общую сумму зарплат работников.
Количество работников хранится в переменной employees. Зарплата каждого работника – это случайное число от 500 до 5000.
Записать сумму в переменную totalSalary и вывести в консоль.
*/

const employees = 10;
const salaryMin = 500;
const salaryMax = 5000;
let totalSalary = 0;


for (let i = 1; i <= employees; i += 1 ) {

    const salary = Math.round(Math.random() * (salaryMax - salaryMin) + salaryMin);

    totalSalary += salary;
};

console.log(totalSalary);




/*
Напиши скрипт, котрый подсчитывает сумму всех четных чисел, 
которые входят в диапазон переменных от мин до макс
*/

const min = 3800;
const max = 7500;
let sum = 0;

for (let i = min; i <= max; i += 1){

    if (i % 2 === 0) {
        sum += i;
    };
}
console.log(sum);




           // 2 МОДУЛЬ

/*
Напиши функцію min(a, b), яка повертає менше з чисел a та b.
*/

const getMinNumber = function (a, b) {
    
    if (a < b) {
        return a;
    };
    return b;
};

console.log(getMinNumber(2, 5)); // 2 
console.log(getMinNumber(3, -1)); // -1 
console.log(getMinNumber(1, 1)); // 1



/*
Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, 
значення яких будуть передані до параметра dimensions у вигляді рядка. 
Значення гарантовано розділені пробілом.
*/

function getRectArea(dimensions) {
    const array = dimensions.split(' ');
    const areaRectangular = array[0] * array[1];

    return areaRectangular;
};

console.log(getRectArea('8 11'));



/*
Напиши функцію logItems(items), яка отримує масив та використовує цикл for, 
який для кожного елемента масиву буде виводити в консоль повідомлення форматі 
<номер елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.
['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 – Mango, а для індексу 2 виведе 3 – Ajax.
*/

function logItems(items) {
    for (let i = 0; i < items.length; i += 1) { 
        console.log(`${i+1} - ${items[i]}`)
    };
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);




/*
Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. 
У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. 
Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакове.
*/

function printContactsInfo(names, phones) { 

    const arrNames = names.split(', ');
    const arrPhones = phones.split(',');

    for (let i = 0; i < arrNames.length; i += 1) {
        console.log(`${arrNames[i]} - ${arrPhones[i]}`);
    };
};

printContactsInfo('Jacob, William, Solomon, Artemis', '89001234567,89001112233,890055566377,890055566300',);



/*
Напиши функцію findLargestNumber(numbers) яка шукає найбільше число в масиві.
*/

function findLargestNumber(numbers) {
    let numberMax = numbers[0];

    for (let i = 0; i < numbers.length; i += 1){

        if (numbers[i] >  numberMax) {
            numberMax = numbers[i];
        };
    };
    return numberMax;
};

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94 
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83




/*
Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. 
Усі аргументи будуть лише числами.
*/

function calAverage(...args) { 
    let middleValue = 0;

    for (let i = 0; i < args.length; i +=1){
        middleValue += args[i];
    };

    middleValue = middleValue / args.length;

    return middleValue;
};

console.log(calAverage(1, 2, 3, 4)); // 2.5 
console.log(calAverage(14, 8, 2)); // 8 
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2




/*
Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі 
годин та хвилин HH:MM.
*/

function formatTime(minutes) { 

    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;

    const resHours = String(hours).padStart(2, 0);
    const resMinutes = String(min).padStart(2, 0);

    return console.log(`${resHours}:${resMinutes}`);
};

console.log(formatTime(70)); // "01:10" 
console.log(formatTime(450)); // "07:30" 
console.log(formatTime(1441)); // "24:01"





/**/
let arr = ['a', 'b', 'c', 'd', 'e'];

// Индекс последнего элемента
// Значение последнего элемента

let newArr = arr.push('z');
console.log(newArr);

let indLast = arr.length-1;
console.log(arr.length - 1);
console.log(arr[arr.length - 1]);


// Добавление с помощью splice

const add = arr.splice(1, 0, 'Новый1', 'Новый2');
console.log('Добавление с помощью splice. Возвращает:', add);

// Замена с помощью splice

const replacement = arr.splice(1, 3, 'New');
console.log('Замена с помощью splice. Возвращает:', replacement);

// Удаление с помощью splice

const del = arr.splice(1, 2);
console.log('Удаление с помощью splice. Возвращает:', del);




/*
ЗАДАЧА 1
Создать массив genres с элементами 'Jazz' и 'Blues'. Добавить "Рок-н-рол" в конец массива.
Вывести в консоль первый элемент массива.
Вывести в консоль последний элемент массива. Код должен работатьь для массива произвольной длины.
Удалить первый элемент и вывести его в консоль.
Вставить в начало массива 'Country' и 'Reggae'.
*/
const genres = ['Jazz', 'Blues'];

genres.push("Рок-н-рол");

console.log(genres[0]);
console.log(genres[genres.length - 1]);

console.log(genres.shift());

genres.unshift('Country', 'Reggae');
console.log(genres);




/*
ЗАДАЧА 2
Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых 
сохраняются в переменной  'values' в виде строки.
Значения гарантированно разделены пробелом.
*/

let values = '9 11';

const arr = values.split(' ');

const square = arr[0] * arr[1];
console.log(square);



/*
ЗАДАЧА 3
Напиши скрипт для перебора массива fruits циклом for. 
Для каждого элемента массива выведи в консоль строку в формате номер элемента: и значение элемента.
Нумерация элементов должна начинаться с 1.
*/

const fruits = ['apple', 'grape', 'peach', 'banana', 'lemon'];
let message = '';

for (let i = 0; i < fruits.length; i += 1){
    
    const num = i + 1;
        
    message = `Элемент с номером ${num}: ${fruits[i]}`;
    console.log(message);
};




/*
ЗАДАЧА 4
Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами.
Порядковий номер імен та телефонів у рядках вказують на відповідність. 
Кількість імен та телефонів гарантовано однакова.
*/
  
const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

const namesArr = names.split(',');
const phonesArr = phones.split(',');


// Итерацию делаем по одному массиву, а достучаться можем через этот же счетчик 
// к любому другому массиву, у которого тоже есть элемент с данным индексом
// И знаем, что количество точно одинаковое

for (let i = 0; i < namesArr.length; i += 1){
    console.log(`${namesArr[i]} - ${phonesArr[i]}`);
};

// Решение через ФОР ОФ

for (let name of namesArr) {

    const index = namesArr.indexOf(name);

    console.log(name, phonesArr[index]);
    // або
    console.log(`${name} - ${phonesArr[index]}`);
};



/*
ЗАДАЧА 5
Напиши скрипт, який виводить у консоль усі слова рядка окрім першого та останнього. 
Результуючий рядок не повинен починатися або закінчуватися символ пробілу.
Скрипт повинен працювати для будь-якого рядка.
*/
 
const string = 'Welcome to the future';
let stringArr = string.split(" ");

for (let i = 1; i < stringArr.length-1; i += 1){
    console.log(stringArr[i]);
};

// АБО

const shortString = stringArr.splice(1, stringArr.length - 2);
console.log(shortString);

// АБО

stringArr.shift();
stringArr.pop();

const newString = stringArr.join(' ');
console.log(newString);



/*
ЗАДАЧА 6
Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить її в консоль.
*/

const string = 'Welcome to the future';

let newString = '';

for (let i = string.length - 1; i >= 0; i -= 1){

    newString += string[i];
};

console.log(newString);

// АБО сначала разобьем на массив букв строку. Для этого в методе не пробел указываем, а пустую строку.

const string1 = 'Welcome to the future';
const lettersArr = string1.split('');

lettersArr.reverse();
const newString1 = lettersArr.join('');
console.log(newString1);




/*
ЗАДАЧА 7
Напиши скрипт сортування масиву.
*/

// Функция сорт просто сортирует массив по алфавиту. Сорт модифицирует, т.е. изменяет, исходный массив, не создает  ничего нового
// Сортировать можно и строки, и массивы, все по умолчанию сортируетмся от А до Я и от меньшего к большему

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
langs.sort();
console.log(langs);



/*
ЗАДАЧА 7
Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. 
икористовуй цикл для розв'язання задачі.
*/
const numbers = [2, 17, 94, 1, -23, 37];
let min = numbers[0];

for (let i = 0; i <= numbers.length - 1; i += 1){
    
    if (numbers[i] < min) {
        min = numbers[i];
    };
};
console.log(min); 




/*
Напиши функцию calculateTotalPrice(item), которая принимает массив цен(чисел)т и возвращает их сумму
*/

const calculateTotalPrice = function (item) {
    let total = 0;
    
    for (let item of cart) {
        total += item;
    };

    return total;
};

const cart = [52, 84, 96, 45, 36, 23, 78, 101, 7, 16];
console.log(calculateTotalPrice(cart));




/*
Напиша функцию findLogin() для поиска логина.
Если логина в базе нет, то одно сообщение, если есть , то второе.
*/

const logins = ['512464511', 'hg54541fth', 'fg4444485', 'fgfgfghnjhbbg']
let loginToFind = 'fgfgfghnjhbbgоиор';

const findLogin = function (allLogins, login) {
    if (allLogins.includes(login)) {
        return `Пользователь ${login} найден`;
    };
    return `Пользователь ${login} не найден`;
};
console.log(findLogin(logins, loginToFind));


// ПЕРЕПИШЕМ НА ТЕРНАРНЫЙ ОПЕРАТОР

const findLoginTer = function (allLogins, login) {

    return allLogins.includes(login)
        ? `Пользователь ${login} найден`
        : `Пользователь ${login} не найден`;
};
console.log(findLoginTer(logins, loginToFind));




/*
Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве.
При условии, что числа уникальные
*/

const numbers = [2, 17, 94, 1, 23, 37];

const findSmallesNumber = function (numbers) {
    let min = numbers[0];

    for (let number of numbers) {
        if (number < min) {
            min = number;
        };
    };
    return min;
};
console.log(findSmallesNumber(numbers));



/*
Напиши функцию changeCase(string), которая заменяет регистр каждого символа в строке на противоположный
*/

const changeCase = function (string) {
    const letters = string.split('');
    let invertedString = ''; 

    for (let letter of letters) {
        const letter1 = letter.toLowerCase();

        if (letter === letter1) {
            letter = letter.toUpperCase();
            invertedString += letter;

        } else  {
            letter = letter.toLowerCase();
            invertedString += letter;
        };
    };

    return invertedString;
};

const string1 = 'ABkh';
console.log(changeCase(string1));




/*
Напиши функцию filerNumbers (array [, number1, ...]), которая
- первым аргументом принимает массив чисел,
- после первого аргумента возможно произвольное количество других аргументов, которые будут числами
- Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго, 
для которых есть аналог в оригинальном массиве.
*/

const filerNumbers = function (arrNumbers, ...numbers) {
    let newArr = [];

    for (let i = 0; i < numbers.length; i += 1){
        if (arrNumbers.includes(numbers[i])) {
            newArr.push(numbers[i]);
        };
    };

    return newArr;
};

console.log(filerNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filerNumbers([10, 15, 25, 30], 23, 30, 18, 15));
console.log(filerNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64, 5, 87, 95, 88, 82));




/*
Task 1 - Індекс маси тіла.
Напиши функцію `calcBMI(weight, height)` яка розраховує та повертає індекс маси тіла. 
Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
Індекс маси тіла необхідно округлити до однієї цифри після коми
*/

const weight = prompt('Введите ваш вес');
const height = prompt('Введите ваш рост');

const validateIndex = function (index) {

    if (index <= 18.5) {
        console.log('Недостаточный вес!');
    } else if (index <= 24.9) {
        console.log('Вес в пределаъх нормы!');
    } else {
        console.log('Избыточный вес!');
    };
};

const calcBMI = function (weight, height) {
    const index = weight / (height * height).toFixed(1);

    validateIndex(index);
};

calcBMI(weight, height);




/*
Task 9 - Колекція курсів.
Напишіть функції для роботи з колекцією навчальних курсів `courses`: ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
- `addCourse(name)` - додає курс до кінця колекції
- `removeCourse(name)` - видаляє курс з колекції
- `updateCourse(oldName, newName)` - змінює ім'я на нове
*/


// ВСЕ РАВНО НЕ СИЛЬНО ПОНЯЛА КАК МЫ СДЕЛАЛИ ФУНКЦИЮ ДЛЯ ПРОВЕРКИ


const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
const cours = 'Java';

const addCourse = function (name, allCourses) {

// Стоило бы добавить проверку, есть ли такой курс уже в коллекции
    if (!allCourses.includes(name)) {
        allCourses.push(name);
    }

    return allCourses;
};
console.log(addCourse(cours, courses));


const removeCourse = function (name, allCourses) {
    
// Стоило бы добавить проверку, т.к. если не найдет, то вернет -1 на свое место. И удалит все равно с конца
    if (allCourses.includes(name)) {
        const index = allCourses.indexOf(name);
        allCourses.splice(index, 1);
    };
    
    return allCourses;
};

console.log(removeCourse(cours, courses));





const validateCours = function (cours, allCourses) {
    const valid = allCourses.indexOf(cours);
    
    if (valid === -1) {
        return false;
    };

    return true;
};




const oldName = 'JavaScript';
const newName = 'Java';

const updateCourse = function (oldCours, newCours, allCourses) {

    // Если курса в коллекции нет, то нам надо выйти из функции
    if (!validateCours(cours, allCourses)) {
        return;
    };

    const index = allCourses.indexOf(oldCours);

    // allCourses.splice(index, 1, newCours);

    allCourses[index] = newCours;

    return allCourses;
};

console.log(updateCourse(oldName, newName, courses));
