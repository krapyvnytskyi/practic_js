                            // ЗАНЯТИЕ 3-1.
                    
// БОЛЬШАЯ ЗАДАЧА С БАЛЛАНСОМ (БЮДЖЕТ)

/*
Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account`в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
Типів транзакцій всього два. Можна покласти чи зняти гроші з рахунку.
*/

const Types = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};


/* 
Капслоком записаны типы транзакций - это значит, что это константы.
Это нужно, чтобы, когда это будет написано как модуль в каком-то приложении, то нужно будет передавать тип транзакции.
Нехорошо, когда каждый пишет этот тип сам, т.к. вероятны ошибки и неодинаковое написание. В проектах правильно использовать константы - 
т.е. те переменные, которые никгда не меняются. Или если меняются, то в одном месте и весь код не ломается.

Сначала регистрируем объект. У него есть баланс, есть массив с транзакциями. Кожна транзакція це об'єкт із властивостями: id, type та amount
1. Метод создает и возвращает объект транзакции. На входе принимает сумму и тип транзакции. А возвращает объект
ID должно быть уникальное, поэтому мы будем для нумерации брать длину массива с транзакциями, 
т.к. каждая следующая транзакция буджет менять эту длину
*/
const account = {
    balance: 0,
    transactions: [],
}

/*
    1. Метод создает и возвращает объект транзакции. На входе принимает сумму и тип транзакции. А возвращает объект
ID должно быть уникальное, поэтому мы будем для нумерации брать длину массива с транзакциями, 
т.к. каждая следующая транзакция буджет менять эту длину
*/
    createTransaction(amount, type) { 
        return {
            id: this.transactions.length,
            type,
            amount,
        };
}

/*
    2. Метод, що відповідає за додавання суми до балансу. Приймає суму транзакції.
Викликає createTransaction для створення об'єкта транзакції, після чого додає його до історії транзакцій/
Метод должен добавить транзакцию в коллекцию(массив). А чтобы ее(транзакцию) добавить, нужно ее создать. 
В amount приходит сумма, которую нужно добавить/отнять в балланс
Потом создаем транзакцию - вызываем метод, который ее создает

Метод Math.abs(amount) берет всегда абсолют числа. Это нужно для проверки, чтобы не ввели отрицательное число в amount
*/
    deposit(amount) { 
        amount = Math.abs(amount);
        this.balance += amount;
        const newTransaction = this.createTransaction(amount, Types.DEPOSIT);
        this.transactions.push(newTransaction);

        return this.transactions;
    }

/*
Метод, що відповідає за зняття суми з балансу. Приймає суму транзакції.
Викликає createTransaction для створення об'єкта транзакції після чого додає його до історії транзакцій.
Якщо amount більше ніж поточний баланс, виводь повідомлення про те, що зняття такої суми не можливе, недостатньо коштів.

Метод Math.abs(amount) берет всегда абсолют числа. Это нужно для проверки, чтобы не ввели отрицательное число в amount
*/
    withdraw(amount) {
        const newTransaction = this.createTransaction(amount, Types.WITHDRAW);
        if (amount > this.balance) {
            console.log('Не достаточно денег!')
            return;
        };
        this.balance -= amount;
        this.transactions.push(newTransaction);

        return this.transactions;
     }

     /*
Метод повертає поточний баланс
*/
    getBalance() { 
        return this.balance;
}

/*
Метод шукає та повертає об'єкт транзакції по id
*/
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (id === transaction.id) {
                return transaction;
            };
        };
}

/*
Метод повертає кількість коштів певного типу транзакції з усієї історії транзакцій
*/
    getTransactionTotal(type) {
        let total = 0;

        for (const transaction of this.transactions) {
            if (transaction.type === type) {
                total += transaction.amount;
            };
        };
        return total;
    },    
};

console.log(account.deposit(34));
console.log(account.withdraw(20));
console.log(account.getBalance());
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal(Types.WITHDRAW));








                                // РЕПЕТА
/* ДАНО
*/
const playlist = {
    name: 'Мой плейлист',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
    trackCount: 4,

    getName() {
        console.log(playlist.name);
    },

    changeName(newName) {
        this.name = newName;
            return this.name;
    },

    addTrack(newTrack) {
        this.tracks.push(newTrack);
        return this.tracks;
    },
};

playlist.getName();
console.log(playlist.changeName('My playlist'));
console.log(playlist.addTrack('new track'));



/*
// 1. Обращение к свойству объекта
*/
console.log(playlist.tracks);

// 2. Если  нужно взять значение свойства, ключ которого хранится в переменной

const value = 'name';
console.log(playlist[value]);

// КОРОТКАЯ ЗАПИСЬ СВОЙСТВ
// Создание объекта с динамическими ключами.Тег input

const userName = 'Mango';
const email = 'mango@gmail.com';

const signUpData = {
    // userName: userName,
    // email: email,

    userName,
    email,
};

console.log(signUpData);


// ВЫЧИСЛЯЕМЫЕ СВОЙСТВА
// Интерпретатор вычисляет ключ из какой-то переменной
// <input name = 'color', value = 'tomato'>

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
    [inputName]: inputValue,
};

console.log(colorPickerData);





const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: true },
];

                // ИЩЕМ ДРУГА ПО ИМЕНИ

const findByName = function (findFrend, allFriends) {
    
    for (const friend of allFriends){
        if (friend.name === findFrend) {
            return `Друг с именем ${findFrend} есть в базе данных`;
        };
    };
    
    return `Друг с именем ${findFrend} отсутствует в базе данных`;
    };

console.log(findByName('Poly', friends));
console.log(findByName('Po', friends));
console.log(findByName('Ajax', friends));


                // ПОЛУЧАЕМ ВСЕ ИМЕНА ДРУЗЕЙ ИЗ МАССИВА ДРУЗЕЙ:

const getAllNames = function (allFriends) {
    let allNames = [];
    
    for (let friend of allFriends){
        allNames.push(friend.name);
    };

    return allNames;
};

console.log(getAllNames(friends));


                // ПОЛУЧАЕМ ВСЕХ ДРУЗЕЙ, КОТОРЫЕ ОНЛАЙН. Не имена а целиком друзей

const getFrendsByOnline = function (allFriends) {
    let frendsByOnline = [];
    
    for (let friend of allFriends) {
        if (friend.online) {
            frendsByOnline.push(friend);
        };
    };

    return frendsByOnline;
};

console.log(getFrendsByOnline(friends));


                // ПОЛУЧАЕМ ОБЪЕКТ С 2МЯ МАССИВАМИ - ВСЕХ ДРУЗЕЙ, КОТОРЫЕ ОНЛАЙН И КОТОРЫЕ ОФФЛАЙН:

const getFrendsByOnlineStatus = function (allFriends) {
    let frendsByOnline = [];
    let frendsByOffline = [];

    for (let friend of allFriends) {

        if (friend.online) {
            frendsByOnline.push(friend);
        } else {
            frendsByOffline.push(friend);
        };
    };

    return {frendsByOffline, };
};

console.log(getFrendsByOnlineStatus(friends));


const getFrendsByOnlineStatus1 = function (allFriends) {
    const frendsByStatus = {
        online: [],
        offline: [],
    };

    for (let friend of allFriends) {

        if (friend.online) {
            frendsByStatus.online.push(friend);
        } else {
            frendsByStatus.offline.push(friend);
        };
    };

    return frendsByStatus;
};
        
console.log(getFrendsByOnlineStatus1(friends));


// Как мне узнать количество свойств в этом объекте?

const x = {
    a: 1,
    b: 2,
    c: 50,
    d: 100,
}

console.log(Object.keys(x).length);




// for in перебирает не только собственные свойства объекта, но и унаследованные.

 // Поэтому он не хорош для перебора
 // Также for in не используется для перебора массивов. Т.е. оно можно, т.к. массив это объект и оно переберет его по ключам, но надо использовать for и for of.
 
 



                    // ПЕРЕБОР ОБЪЕКТА


 // Помните, есть конструкторы Number, Boolean, Array - из которых вот эти базовые типы и получаются
 // Есть родительский конструктор Object со специальным методом:

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
};
let totalFeedback = 0;

// Я буквально говорю - получи массив ключей из объекта feedback
// И уже после этот массив я перебираю через обычный  for of

const keys = Object.keys(feedback);

console.log(keys);

for (const key of keys) {

    console.log(key);         // Вот это доступ к ключу

    // А как получить доступ к значению какой-то переменной? Синтаксис квадратных скобок
    // Т.е. внутри этого объекта нужно получить значения ключей.
    // На каждой итерации ключ - это свойство, а синтаксис квадратных скобок позволяет получить значение этого ключа
    
    console.log(feedback[key]);

    totalFeedback += feedback[key];
}

console.log(totalFeedback);

// Объекты бывают просто как хранилища, в них нет методов. Этот наш объект просто хранит данные



// Если нам не нужно сами получить ключи, а только взять значения ключей и все,
// то можно использовать вместо Object.keys   Object.values
// Object.keys ВОЗВРАЩАЕТ МАССИВ КЛЮЧЕЙ
// Object.values ВОЗВРАЩАЕТ МАССИВ ЗНАЧЕНИЙ

const values = Object.values(feedback);

console.log(values);

for (const value of values) {
    totalFeedback += value;
}

console.log('totalFeedback: ', totalFeedback);



// МАССИВ ОБЪЕКТОВ
// Объект в середине массива называется коллекция

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
];

// Например, ПЕРЕБОР:


for (const friend of friends) {

    console.log(friend);

    friend.newprop = 555;

// Соответственно, если friend это объект массива, то вы можете получить какое-то его свойство

    console.log(friend.name);
    console.log(friend.online);
}
console.log(friends);
// friends.newprop = 555; Что происходит? В объекты добавляется свойство newprop со значением 555
// Т.к. передача происходит по ссылке для сложных типов, то это свойство запишется в массив.
// И в переменную const friend записывается ссылка на объект { name: 'Mango', online: false }
// И на первой же итерации туда записывается новое свойство friend.newprop = 555;


// Помните, что в массиве сложных типов при переборе через for of вы получаете ссылку на этот объект и вы можете его изменять Добавить, убрать, перезаписать






// РЕПЕТА 3-2

/*
РАСПЫЛЕНИЕ.      
Есть массив, надо получить все его аргументы. Это означает, возьми сделай новый массив, в который распыли из массива внутри.
Т.е. распаковывает массив в отдельные независимые значения
*/

const numbers = [...[1, 2, 3], 4, 5];
console.log(numbers);


/*
Юзер зашел на сайт. 
И там есть тема по умолчанию какая-то, показывать нотификации, допустим, по умолчанию, хайд сайд бар, допустим, по умолчанию стоит фоллс.
Т.е. ты зарегистрировался и там уже стоят настройки по умолчанию.
Это объект настроек, который применяется в интерфейсе. А юзер зашелл в свои настройки и решил поменять их. 
Эти изменения не хранятся в базе данных, это у юзера прями на компе, в браузере хранится. 
И ты зашел и сделал себе объект на то, что уже ты хочешь
*/

const defaultSettings = {
    theme: 'light',
    showNotification: true,
    hideSidebar: false,
};

const userSettings = {
    // Нотификации ты захотел выключить. Клацнул чек-бокс 
    showNotification: false,
    // И хочешь чтобы сайдбар появился
    hideSidebar: true,
};

// Получается, нужно взять дефолтные настройки и слить с твоими, чтобы получить финальные настройки
// Сначала распыляются дефолтные настройки, а поверх них распыляются те, что ты выбрал
// Это никакое не наследование, а просто на базе 2х ты делаешь третий, с заменой.

const finalSettings = {
    ...defaultSettings,
    ...userSettings,
};


            /*
            ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ.      
            Сделает локальные переменные по имени свойства.
            Оно идет и ищет в объекте свойство с таким именем, как указано в скобках, и записывает его в переменную
            */

const playlist = {
    name: 'Мой плейлист',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
    trackCount: 4,
};
const { rating, tracks } = playlist;
console.log(tracks);

            // ПРАКТИЧЕСКИЙ юзкейс
            //Например, есть рейтинг авторов и нам нужно найти автора с самым большим рейтингом.

const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
};

// Взяли массив из значений свойств объекта, распылили его в отдельные аргументы и применили к ним маз-макс.
// Но при таком способе есть только значения, но нет самого автора, т.е.свойства

const ratings = Object.values(authors);
console.log(Math.max(...ratings));

// а чтобы вывести вместе с именем автора

const keys = Object.keys(authors);

for ( const key of keys) { 
    console.log(key);
    console.log(authors[key]);
};

// ИЛИ - есть метод entries
// Он возвращает массив массивов. Массив, где нулевым элементом стоит ключ, а первым элементом - значение этого ключа
 
const entries = Object.entries(authors);
console.log(entries);

for (const entrie of entries) {
    const name = entrie[0];
    const rating = entrie[1];
    console.log(name, rating);
}
// Или можем деструктуризировать массив entrie
for (const entrie of entries) {
    const [name, rating] = entrie;
    console.log(name, rating);
}
// Но еще можно эту деструктуризацию сразу положить в переменную
for (const [name, rating] of entries) {
    console.log(name, rating);
}




// ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ.
// Сделает локальные переменные по имени свойства.
// Оно идет и ищет в объекте свойство с таким именем, как указано в скобках, и записывает его в переменную


// ОПЕРАЦИЯ REST

// Иногда в локальные переменные нужно вытащить только отдельные свойства, а не все.
// А все остальные свойства собрать в какой-то другой объект, чтобы использовать где-то дальше

const profile = {
    nameProf: 'Jacques Gluke',
    tag: 'jgluke',
    location1: 'Jamaica',
    avatar: 'http...png',
    stats: {
        followers: 5236,
        views: 4125,
        likes: 1236,
    },
};

const { nameProf, tag, location1, ...restProps } = profile;

// В переменную restProps соберется все, что мы не деструктуризировали явно
console.log(nameProf, tag, location1);
console.log(restProps);






            // ПАТТЕРН - ОБЪЕКТ НАСТРОЕК

// Если нужно, чтобы функция принимала разное количество аргументов

const fn = function (params) {
// И теперь мы хотим деструктуризировать этот объекткоторый передан в парамс
    
    const { name, age, isOnline, friends, hobbies, games } = params;

};

fn({
    name: 'Mango',
    age: 10,
    isOnline: true,
    friends: 5,
    hobbies: [],
    games: {},
});





// ЗАНЯТИЕ 3-1

/* Напиши скрипт, який для об'єкта `user`, послідовно:
- додає поле `mood` зі значенням `'happy'`
- замінює значення `hobby` на `'skydiving'`
- замінює значення `premium` на `false`
- виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи `Object.keys()` та `for...of`
 */

 const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.mood = 'skydiving';
user.premium = 'false';

const keys = Object.keys(user);
for (const key of keys) {
    console.log(`${key}:${user[key]}`);
};



/*
У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть 
результат у змінній sum. Повинно вийти 390. Якщо об'єкт `salaries` порожній, то результат має бути 0.
*/
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
const salariesTeam = Object.values(salaries);
for (const element of salariesTeam) {
    sum += element;
};



/*
Напишіть функцію `calcTotalPrice(stones, stoneName)`, яка приймає масив об'єктів та рядок з назвою каменю. 
Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
*/

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];

const calcTotalPrice = function (stones, stoneName) {
    let totalCost = 0;
    
    for (const stone of stones) {
        if (stone.name === stoneName) {
            totalCost = stone.price * stone.quantity;
            return console.log(`Общая стоиость ${stoneName} = ${totalCost}`);
        };
    };
    return console.log(`Товара ${stoneName} нет`);
};

calcTotalPrice(stones, 'Діамант');
calcTotalPrice(stones, 'Сапфір');





// ЗАНЯТИЕ 3-2


/* 
ПРИМЕР ДЕСТРУКТУРИЗАЦИИ МАССИВА ОБЪЕКТОВ С ОДИНАКОВЫМИ КЛЮЧАМИ
*/


const array = [{ a: 1 }, { a: 1 }, { a: 1 }];

function foo(paramArray) {
  
  const [obj1, obj2, obj3] = paramArray;

  //const { a } = obj1;
  //const { a } = obj2;
  //const { a } = obj3;

 console.log(obj1, obj2, obj3);
 
};

foo(array);




/*
ЗАДАЧА 1. 
Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
*/

function calcBMI({ weight, height }) {
  
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));

  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

console.log(calcBMI(
  {
    weight: '88,3',
    height: '1.75',
  }
));

console.log(calcBMI(
  {
    weight: '68,3',
    height: '1.65',
  }
));

console.log(calcBMI(
  {
    weight: '118,3',
    height: '1.95',
}
));





/*
ЗАДАЧА 2.
Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
*/

function printContactsInfo({ names, phones }) {

  const nameList = names.split(',');
  const phoneList = phones.split(',');

  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

printContactsInfo(
  {
    names: 'Jacob,William,Solomon,Artemis',
    phones: '89001234567,89001112233,890055566377,890055566300',
  }
);




/*
ЗАДАЧА 3.
Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
*/

function getBotReport({ companyName, bots: { repair: repairBots, defence: defenceBots } }) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

// Було
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Очікується
console.log(
  getBotReport({
    companyName: 'Cyberdyne Systems',
    bots: {
      repair: 150,
      defence: 50,
    },
  }),
); // "Cyberdyne Systems has 200 bots in stock"




/*
ЗАДАЧА 4.
Напиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт 
про кількість товарів на складі будь-якої компанії.
*/

function getStockReport({ companyName, stock }) {
  
}

console.log(getBotReport(
  {
    companyName: "hghhg",
    stock:
  }
));





                        // КОРЗИНА ТОВАРОВ

/* Товар - это объект такого формата:   { name: 'картинка', price: 50 }
В сложных объектах лучше не обращаться к свойствам напрямую, а писать методы для вызова свойств
*/

const apple = { name: '🍎', price: 20, };
const grape = { name: '🍇', price: 35, };
const peach = { name: '🍑', price: 40, };
const lemon = { name: '🍋', price: 80, };
const banana = { name: '🍌', price: 30, };

const cart = {
    items: [],

    getItems() { 
        return this.items;
    },
    
    addItems(produkt) { 
        const { items } = this;

        for (const item of items) {

                    if (item.name === produkt.name) {
                        item.quantity += 1;
                        return;
                    };  
                };

        const newProduct = {
            ...produkt,
            quantity: 1,
        };

        items.push(newProduct);

        return items;
    },

    removeItems(produktByRemove) { 
        const { items } = this;
        
        for (let i = 0; i < items.length; i += 1){
            const { name } = items[i];
            
            if (name === produktByRemove) {
                items.splice(i, 1);
            };
        };
    },

    clear() { 
        this.items = [];
        return this.items;
    },

    countTotalPrice() { 

        const { items } = this;

        let totalPrice = 0;

        for (let { price, quantity } of items) {

            totalPrice += price * quantity;
        };

        return totalPrice;
    },

    increaseQuantity(produktName) { 

        for (let item of this.items) {
            
            const { name, quantity } = item;

            if (name === produktName) {
                quantity += 1;
                return;
            };
        };

    },





    decreaseQuantity(produktName) { },

};

cart.addItems(apple);
cart.addItems(grape);
cart.addItems(apple);
cart.addItems(peach);
cart.addItems(lemon);
cart.addItems(peach);
cart.addItems(peach);
cart.addItems(banana);

console.log(cart.getItems());

cart.removeItems('🍋');

console.log(cart.countTotalPrice());

//console.log(cart.getItems());

//console.log(cart.clear());

    
        




const cart = {

// В свойстве items будут лежать товары, а товары это объекты   
    items: [],    

    // Если я вызываю метод add, т.е. cart.add({name: 'картинка', price: 50}) , 
    // то он получает наш продукт и потом его добавляет в эти выше items: []
    add(produkt) {},
    
    // И после добавления если я вызову метод getItems(){}, то у меня должна вернуться ссылка на items: []
    getItems() {
        return this.items;
    },

    // Есть метод remove, куда передаешь имя продукта.Т.е.я вызываю cart.remove('картинка'); и этот объект должен удалиться
    remove(produktName){},

    // Метод  clear полностью очищает корзину товаров.
    clear(){},

    // Заметьте, что на корзине нету свойства общей стоимости, т.к. это вычисляемое свойство
    // И есть метод countTotalPrice, который просто возвращает общую цену
    countTotalPrice() { },
    
    // Увеличить/уменьшить клоличество какого-то товара в корзине
    // Нужно учесть, что при добавлении продукта в корзину, по умолчанию 
    // должно устанавливаться свойство Quantity равное 1.

    increaseQuantity(produktName){},
    decreaseQuantity(produktName){},

    // Когда добавляетмся продукт, которого еще нет в корзине, то
    // add(produkt) { product.quantity = 1},
    // А если добавляем продукт который уже есть, то
    // add(produkt) { product.quantity += 1},
}


// 1. Сделаем метод getItems, который должен вызывать массив значений items: [], т.е. просто возвращать ссылку на этот массив

const cart1 = {
    items: [],    

    getItems() {
        return this.items;
    },
}
console.log(cart1.getItems());


// 2. Теперь, есть метод add, куда мы получаем объект с товаром, который нужно добавить в items[]

const cart2 = {
    items: [],    

    getItems() {
        return this.items;
    },

    add(produkt) {
        this.items.push(produkt);
    },
}
cart2.add({ name: 'картинка', price: 50 });
cart2.add({ name: 'картинка2', price: 60 });
cart2.add({ name: 'картинка3', price: 80 });
cart2.add({ name: 'картинка4', price: 90 });
console.log(cart2.getItems());


// 3. Метод remove(produktName) 
// По имени, т.е.по свойству name нам надо перебрать массив items,
// найти объект с переданным именем и его оттуда удалить

const cart3 = {
    items: [],    
    getItems() {
        return this.items;
    },
    add(produkt) {
        this.items.push(produkt);
    },

    remove(produktName) {
        
        for (const item of this.items) {
            if (item.name === produktName) {
                this.items.splice(this.items.indexOf(item), 1);
            }
        }
    },
}
cart3.add({ name: 'картинка', price: 50 });
cart3.add({ name: 'картинка2', price: 60 });
cart3.add({ name: 'картинка3', price: 80 });
cart3.add({ name: 'картинка4', price: 90 });

cart3.remove('картинка');
console.log(cart3.getItems());


// 4. Метод clear должен очищать корзину. Просто он должен возвращать пустой массив и все

const cart4 = {
    items: [],
    getItems() {
        return this.items;
    },
    add(produkt) {
        this.items.push(produkt);
    },
    remove(produktName) {
        
        for (const item of this.items) {
            if (item.name === produktName) {
                this.items.splice(this.items.indexOf(item), 1);
            }
        }
    },
    clear() {
        this.items = [];
    },
}
cart4.add({ name: 'картинка', price: 50 });
cart4.add({ name: 'картинка2', price: 60 });
cart4.add({ name: 'картинка3', price: 80 });
cart4.add({ name: 'картинка4', price: 90 });
cart4.clear();

console.log(cart4.getItems());


//5. countTotalPrice доджен брать стоимость продукта и считать общую сумму

    const cart5 = {
    items: [],
    getItems() {
        return this.items;
    },
    add(produkt) {
        this.items.push(produkt);
    },
    remove(produktName) {
        
        for (const item of this.items) {
            if (item.name === produktName) {
                this.items.splice(this.items.indexOf(item), 1);
            }
        }
    },
    clear() {
        this.items = [];
    },

        countTotalPrice() {
            let total = 0;
            
            for (const { price } of this.items) {
                total += price;
            };

            return total;  
    },
}
cart5.add({ name: 'картинка', price: 50 });
cart5.add({ name: 'картинка2', price: 60 });
cart5.add({ name: 'картинка3', price: 80 });
cart5.add({ name: 'картинка4', price: 90 });

console.log(cart5.countTotalPrice());



// Для того, чтобы при добавлении уже существующего продукта, он не записывался как еще один новый
// Мы при добавлении продукта в этом же методе создадим еще один объект, у которого будет свойство quantity
// Но вначале, распылим в этот объект наш оригинальный продукт
// Т.е.создали новый продукт, распылили в него тот продукт, что передали, и плюс добавили ему свойство quantity
// И уже этот новый объект добавили в нашу корзину
// И теперь у товаров в корзине имеется кастомное для корзины свойство
// Потом при добавлении проверим, есть ли этот продукт уже в корзине. Продукты -  это массив, его надо перебрать


const cart6 = {
    items: [],
    getItems() {
        return this.items;
    },

    add(produkt) {

        for (const item of this.items) {
            if (item.name === produkt.name) {
                item.quantity += 1;
                return;
            }
        }


        const newProduct = {
            ...produkt,
            quantity: 1,
        };


        this.items.push(newProduct);
    },

    remove(produktName) {
        
        for (const item of this.items) {
            if (item.name === produktName) {
                this.items.splice(this.items.indexOf(item), 1);
            }
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        let total = 0;
            
        for (const { price, quantity } of this.items) {
            total += price * quantity;
        };

        return total;  
    },
}
cart6.add({ name: 'картинка', price: 50 });
cart6.add({ name: 'картинка', price: 50 });
cart6.add({ name: 'картинка', price: 50 });
cart6.add({ name: 'картинка3', price: 80 });
cart6.add({ name: 'картинка4', price: 90 });

console.log(cart6.getItems());

console.log(cart6.countTotalPrice());






/*
            СТРЕЛОЧНЫЕ ФУНКЦИИ (РЕПЕТА)    4-1

Это более лаконичный синтаксис для записи функции. 
Плюс их удобнее использовать для супер-супер маленьких коллбек функций.
*/

const add = function (a, b, c) {
    console.log(a, b, c);
    return a + b + c;
};
console.log(add(5, 10, 15));

// Стрелка

const addArrow = (a, b, c) => {
    console.log(a, b, c);
    return a + b + c;
};
console.log(addArrow(5, 4, 9));

// Если параметр всего один, то скобки можно опустить
// Если параметров вообще нету, то обязательны пустые скобки

const addArrowMini = a => {
    console.log(a);
    return a;
};
console.log(addArrowMini(5));


// Если в теле функции нужно выполнить несколько действий, например иф какой-то есть, потом ретёрн.Т.е. больше операций, чем просто ретёрн
// То это называется явный возврат.
// Explicit  - явный возврат, когда return объявлен,  emplicit - неявный возврат
// Но если же это только ретёрн, то можно сделать неявный возврат.
// Опустить тело функции, а то, что хотим вернуть из неё, поставить сразу после стрелки.
// Это может быть выражение сравнения, любые матемаьтические операции

const addArrow1 = (a, b, c) => {
    return a + b + c;
};

const addArrow2 = (a, b, c) => a + b + c;
console.log(addArrow2(5, 4, 9));



/*
Теперь, помните, что у каждой функции есть локальная переменная arguments, которая у нее просто есть. 
Локальная переменная arguments хранит псевдомассив всех полученных аргументов
А вот у стрелочной функции этой локальной переменной нет. А как же получить доступ ко всем аргуиментам?
Просто ...rest собрать все аргументы и все. Это не распыление, а сбор, когда вы берете  много аргументов и собираете его в самый обычный массив. Это уже не псевдомассив.
*/

const addArrow3 = (...args) => {
    console.log(args);
    return args;
};
addArrow3(5, 4, 9, 10, 11);




/*
Перепишем на стрелку 
Интерпретатор фигурную скобку после стрелки не понимает как литерал объекта, а воспринимает как начало тела функции.
() - это выражение какое-то. Оно вычисляется и его результат возвращается. 
Поэтому, чтобы из функции с неявным возвратом вернуть объект, нужгно поставить его в эти круглые скобки
*/

const fnA = function () {
    return {
        a:5,
    };
};
console.log(fnA());


const arrowFnA = () => ({ arrowA: 5 });
console.log(arrowFnA());



/*
Перепишем на стрелку функцию фильтрации
*/

const filter = (array, test) => { 
    filteredArray = [];

    for (const el of array) {
        console.log(el);
        const passed = test(el);

        if (passed) {
            filteredArray.push(el); 
        }
    };

    return filteredArray;
};

const r1 = filter([1, 2, 3, 4, 5, 6, 7], value => value >= 3);
console.log(r1);

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], value => value <= 4);
console.log(r2);



const fruits = [
    { name: "apples", quantity: 200, isFresh: true },
    { name: "grapes", quantity: 150, isFresh: false },
    { name: "bananas", quantity: 100, isFresh: true }, 
];

const r3 = filter(fruits, fruit => fruit.quantity >= 120);
console.log(r3);



/* 
У стралочной функции нет своего this. Т.е. внутри стрелочной функии вот это вот значение контекста, 
т.е. значение ключевого слова this определяется не в момент ее вызова, как у нормальной функции, а в момент объявления.
Там, где ты ее объявил, такой внешний контекст она и запомнила навсегда.
*/

const showThis = () => {
    console.log(this);
};
showThis(); // Всегда при вызове в глобальной области видимости значение this будет undtfined.
// Если объявлена не в модуле, то значение будет window


// Я делаю объект user
const user = { name: 'Mango' };

//И я ему на свойство записываю ссылку на функцию showThis. И потом эту функцию вызываю в контексте user
user.showContext = showThis;

// Но this до сих пор будет undtfined, т.к. оно записалось гдето раньше при объявлении функции
// Контекст стрелки определяетмся местом ее объявления. И в нашем случае это this было объявлено в глобальной области видимости,
// поэтому его значение навсегда записалось как undtfined 
user.showContext();


/*
Т.е. еще раз - где объявил, такой внешний контекст она и взяла.
Т.е. ага внутри метода showName() объявил, метод ссылается на userExamples, 
значит и this моей стрелки будет ссылаться на userExamples, т.е. на контекст родительской функции
*/

const userExamples = {
    fullName: 'Mango',
    showName() {
        console.log(this);
        console.log(this.fullName);

        // Теперь внутри этого метода я создаю обычную функцию
        const inner = function () {
            console.log('this внутри inner: ', this);
        };

        // И вот в момент вызова эта функция без какого-то контекста, без объекта вызывается, поэтому логично, что значение this будет undtfined
        inner();

        // А если сейчас поменять её на стрелку, то она начнет ссылаться на нашего userExamples, т.к. она объявлена внутри него
    },
};

userExamples.showName();


// НИКОГДА не использовать стрелки как методы объекта.

// Для объекта userExamples метод, т.е. функция showName() объявлена в глобальной области видимости,
// потому что сам объект в глобальной области видимости. И поэтому она навсегда запомнила this как undtfined


// СТРЕЛКА-КОНСТРУКТОР
// Также, стрелки не могут быть функциями конструкторов. Потому что у стрелки нет внутреннего свойства констракт.
// Поэтому она не может быть вызваана через new

const User = function (name) {
    this.name = name;
};
console.log(new User('Mango'));


// Еще один пример , но со вложенными объектами

const objA = {
    x: 5,
    showX() {
        console.log(this.x);

        // А теперь буквально во время вызова этой функции создается еще один новый объект
        const objB = {
            y: 10,
            showThis() {
                console.log("this внутри showThis(): ", this);
            },
        };

        objB.showThis();
    },
};
objA.showX();

// А теперь если заменить на стрелку showThis(), то ее ершы будет ссылаться на внешний из объекта А, т.е. из глобальной области видимости




            // РЕПЕТА - callback
                
            // ФУНКЦИЯ ОБРАТНОГО ВЫЗОВА
/*
Мы можем саму функцию записать в переменную и передавать её как аргумент в другую функцию
Т.о. функция может принимать другие функции как параметр
Функция, которая передается в др функцию как параметр, называется функцией отложенного (обратного) вызова, т.е. callback
А  функция, которая принимает другую функцию как параметр - это функция высшего порядка
*/

const fnA = function (massage, callback) { 
    console.log(massage);

    callback(100);
};

const fnB = function (number) {
    console.log('Это вывод функции fnB', number);
}

fnA('jfifjbk', fnB); //Помните, что fnB - это не вызов функции, а передача ее тела. Она там есть уже тогда вы можете её вызвать внутри, если это неодходимо

// И вот мы будем записывать эти callback функции в наши функции, которые по какому-то условию будут вызывать их.



            // ФУНКЦИЯ СДЕЛАЙ МАТЕМАТИКУ

const doMath = function (a, b, callback) {
    
    const result = callback(a, b);

    console.log(result);
}
// Я буду вызывать эту функцию, кидать какие-то 2 числа
// А третьим параметром буду кидать функцию, которая что-то с этими числами делает

const add = function (x, y) {
    return x + y;
};

const sub = function (x, y) {
    return x - y;
};

doMath(2, 3, add);
doMath(10, 8, sub);



            // ИНЛАЙН ФУНКЦИЯ:
//Т.е. мы не записываем функцию в переменную, а как бы делаем ее АНОНИМНОЙ
// Можно взять само объявление функцииБ т.е.не вызов функции, а прям само ее тело, и передать как третий аргумент в вызов:

doMath(2, 3, function (x, y) {
    return x + y;
});

doMath(10, 8, function (x, y) {
    return x - y;
});

// С помощью коллбеков - единственный способ регистрации события.
// Например с помощью слушателя событий мы можем регистрировать клики по кнопке.


// ПРИМЕР ИЗ КОНСПЕКТА

function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}
// Передаємо інлайн функцію greet у якості колбека
registerGuest("Манго", function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
});
// Передаємо інлайн функцію notify у якості колбека
registerGuest("Полі", function notify(name) {
  console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
});



/*
            МЕХАНИЗМ ЗАМЫКАНИЯ

Итак, функция может другую функцию в себя получать как аргумент. 
А еще функция может вернуть из себя другую функцию.
*/

const fnAA = function (params) {

    const innerVariable = "Значение внутренней переменной функции fnA";

    const innerFunction = function () {
        console.log("Это вызов innerVariable");
    };

    return innerFunction;
    // Т.е. я результатом работы возвращаю другую функцию, которая внутри нее была объявлена
};

const fnBB = fnAA();
//Получается, что я в переменную fnB записываю результат вызова fnA.
//А что есть ее результат ? Это функция const innerFunction = function ()
// И потом когда я ее вызову эту const innerFunction = function ()
fnBB();
//То она замыкается на области видимости родительской и т.о. получает доступ и к параметрам и к переменным

// Получаетсся, что я т.о.  все еще имею доступ к локальной переменной, которая была доступна только в теле функции выше
// Возвращаемая функция будет иметь доступ ко всем локальным переменным,
// параметрам родительской функции, даже если она будет вызвана вне тела родительской функции




 //       ЮЗКЕЙС ЗАМЫКАНИЯ - Делаем ПОВАРЕНКА.    Есть блюдо, имя шефа

/*
const makeDish = function (sheffName, dish) {
    console.log(`${sheffName} готовит ${dish}`)
};

makeDish('Mango', 'пирожок');
makeDish('Mango', 'омлет');
makeDish('Mango', 'отбивную');

makeDish('Polly', 'котлетки');
makeDish('Polly', 'супик');
makeDish('Polly', 'кофе');
*/

// И вот используя функцию мы сейчас уйдем от повторения имени шефа. Сделаем функцию - сделай повара.

const makesheff = function (name) {

    const makeDish = function (dish) {
    console.log(`${name} готовит ${dish}`)
};

    return makeDish;
};

const mango = makesheff('Mango');
mango('котлетки');
mango('супик');
mango('омлет');

const polly = makesheff('Polly');
polly('кофе');
polly('отбивную');
polly('пирожок');

/*
Т.о.когда мы вызываем большую функцию makesheff, то она внутри себя вызывает маленькую функцию makeDish.
Поэтому результат вызова makeDishб т.е. маленькой ф-ции, записывается в переменную mango.
Большую вызвали, большая вызвала маленькую, маленькая записалась в переменную.

Каждый шеф, получается, хранит свое имя под капотом.
*/

console.dir(mango);

// Создает объект слоузд, в котором хранит все доступные переменные, которые используются !!!
// Не просто все, а используемые в колбекфункции



            // ПРИМЕР - ОКРУГЛЯТОР
/*
Я хочу брать число и округлять его до определенного числа после запятой
Нужно написать что - то, что будет брать произвольное число и  записывать его же,
но с определенным количеством знаков после запятой.
И мы можем количество знаков после запятой мы можем закрыть в замыкание
*/

const floatingPoint = 3.514643;
const someInt = Math.round(floatingPoint); //  Просто округляем до целого числа - тогда через маз раунд

const withDecimals = Number(floatingPoint.toFixed(2)); // А если до 2х знаков хочу после запятой, то туфиксед. И он возвращает строку

/*
const rounder = function (number, places) {
    return Number(number.toFixed(places));
};
console.log(rounder(3.5565, 2));
console.log(rounder(3.5565, 3));
console.log(rounder(3.5565, 1));
*/

const rounder = function (places) {

    return function (number) {
        return Number(number.toFixed(places));
    };
};

const rounder1 = rounder(1);
const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder1(8.566552));
console.log(rounder2(8.566552));
console.log(rounder3(8.566552));



            // ТАКЖЕ, КОЛЛБЕКИ используют, особенно раньше для создания ПРИВАТНЫХ ПЕРЕМЕННЫХ
// Чтобы запретить доступ к каким-то переменным, например зп или в библиотеках. Чтобы никто не имел доступа к переменным напрямую, а только через методы
