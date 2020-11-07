'use strict';

// const obj = new Object(); - возможная но не очень удобно-корректная запись

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

// console.log(options.colors.bg);

// что-бы удалить ключ из обьекта:
// например удалить - ключ name
// delete options.name;
// console.log(options);

// чтобы перебрать вещи в шкафу т.е. keys in options используем
// цикл FOR IN
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
    }
