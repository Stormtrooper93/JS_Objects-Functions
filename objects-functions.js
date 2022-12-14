`use strict`;

console.log('** Задача про обчислення різниці часу **')

// Напишіть функцію яка буде буде приймати 3 параметри

// - початкову дату (string)
// - кінцеву дату (string)
// - розмірність ('days', 'hours', 'minutes', seconds)

// Функція повертатиме часовий період між цими датами згідно розмірності.
// Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
// Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.


let durationBetweenDates = (startDate = '10 August 1993', endDate = '14 November 2022', format = 'hours') => {
    
    seconds = 1000;
    minutes = 1000 * 60;
    hours = 1000 * 60 * 60;
    days = 1000 * 60 * 60 * 24;

    if (format === 'seconds') {
        return Math.abs((new Date(endDate) - new Date(startDate)) / seconds)+" seconds";
    }
    else if (format === 'minutes') {
        return Math.abs((new Date(endDate) - new Date(startDate)) / minutes)+" minutes";
    }
    else if (format === 'hours') {
        return Math.abs((new Date(endDate) - new Date(startDate)) / hours)+" hours";
    }
    else if (format === 'days') {
        return Math.abs((new Date(endDate) - new Date(startDate)) / days)+" days";
    };
};

let result1 = durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds');  // поверне '86400 seconds'*
let result2 = durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days');  // поверне '362 days'*
let result3 = durationBetweenDates ();


console.log(result1);
console.log(result2);
console.log(result3);


//Just visual enter
console.log('------------------------')
console.log('')









console.log("** Задача про перетворення об'єкту **")

// Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одинм словом), а значення - його ціна.
// Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.

const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAnGEs: '48.7584',
};

let updatedPriceData = Object. fromEntries(
    Object.entries(priceData).map(([key, value]) => [key.toLowerCase(), parseFloat(value).toFixed(2)])
);
console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}*

//Just visual enter
console.log('------------------------')
console.log('')







console.log("** Задача про рекурсію та ітерацію **");


// 1. Функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.

function recursiveOddSumTo(number) {
    if (number === 1) {
        return number;
    }
    else { 
    return Math.round(2 * number - 1 + recursiveOddSumTo(number-1) / 4);
    }
};

console.log(recursiveOddSumTo(1)); // 1*
console.log(recursiveOddSumTo(10)); // 25*


// 2. Функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.

function iterativeOddSumTo(number) {
    if (number % 2) number++;
    return number * number / 4;
};

console.log(iterativeOddSumTo(1)) // 1*
console.log(iterativeOddSumTo(10)) // 25*