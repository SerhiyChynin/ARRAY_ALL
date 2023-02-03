//rest spread

//spread - ... когда используем три точки разбиваем одну переменную, обьект, массив, строку на несколько

let s1 = [22, 33, 44];
let s2 = [55, ...s1, 66];  //разбили s1 на составляющие и поместили в s2
console.log(s2);
// копия массива
let s3 = [...s1];
console.log(s3);
//spread позволяет уменьшить колл кода, то что он делает можн сделать циклами и методами массива, но спред короче
//конкатенация
let a4 = [88, 77];
let b4 = [100, 200];
let s4 = [...a4, ...b4];
console.log(s4);

//unShift();
let s5 = [999, ...a4]; //здесь мы создали новый массив, когда чистый аншифт мы изменяем исходный массив
console.log(s5);

//Преобразовать нод лист колекцию в массив
let p = document.querySelectorAll('p');
p = [...p];
let res = p.map(item => item.textContent);
console.log(res);

// удаление дублей

let s6 = [2, 3, 4, 54, 3, 2, 2, 2, 3, 34, 43, 3];
let s7 = [...new Set(s6)]; // получаем массив без дублей
console.log(s7); 

//Строка

let s8 = 'Hello Baby';
let s9 = [...s8]; //Строку преобразовали в массив разбив каждую букву на елемент
console.log(s9.join(' '));

// Object

let b1 = {name: 'MishMish', param1: 15}
let b2 = { name: 'MishPish', param2: 32 };
let resObject = { ...b1 }
console.log(resObject);

