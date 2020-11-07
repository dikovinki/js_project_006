'use strict';

// const obj = new Object(); - возможная но не очень удобно-корректная запись

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

// ДЕСТРУКТУРИЗАЦИЯ - для того что-бы достучаться до вложеных объектов

const {border, bg} = options.colors;
console.log(border, bg);

options.makeTest();
// когда используются () - это означает что что-то идет в работу либо функция либо метод
// object.keys выдаст нам массив с именами ключей length give us number if keys
console.log(Object.keys(options).length);
// console.log(options.colors.bg);

// что-бы удалить ключ из обьекта:
// например удалить - ключ name
// delete options.name;
// console.log(options);

// чтобы перебрать вещи в шкафу т.е. keys in options используем
// цикл FOR IN
let counter = 0;
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
    }
    console.log(counter);
// чтобы посчитать все свойства создадим переменную counter     
