// Напиши функцию logItems(array), которая получает массив и использует цикл for, который 
// для каждого элемента массива будет выводить в консоль сообщение в формате[номер элемента]-[значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива
// ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// const logItems = function(array) {
//   // твой код
// };

// /*


const element = ['Mango', 'Poly', 'Ajax'];


// const logItem = (arr) => {
//     for(let i = 0; i < arr.length; i += 1) {
//         console.log(` ${i + 1} - ${arr[i]}; `);
//     }
// }


const logItem = (arr) => {
    let result = "";
    for (let i = 0; i < arr.length; i += 1){
         result += ` ${i + 1} - ${arr[i]}\n `
        console.log(result);
}
    return result;
 
}

logItem(element);

logItem(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'])

logItem([5, 10, 15, 20, 25, 30, 35, 40, 45, 50])







