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

//Обьединяем обьекты

let resObj2 = { ...b1, ...b2 }; // Порядок. Второй ключ перезатрет первый, свойства попадает оба
console.log(resObj2);

//"Добавление"свойств

let b3 = { ...b1, bike: true }; // создали новый обьект
console.log(b3);

// rest ... - все аргументы которые не попадут в а, попадут в б в виде массива. Rest - остальные параметры в массив

function ff1(a, ...b) {
    console.log(a);
    console.log(b);
}
ff1(1, 2, 3)

// пример с переменной

let [s10, ...s11] = [100, 200, 300, 400];
console.log(s11);

//Деструктурирующее присваивание

const a23 = [100, 200, 300, 400];
let [s12, s13] = a23;
console.log(s12);
console.log(s13);

//Строка

let [x1, ,x2] = 'Intel pentium Inside'.split(' ');
console.log(x1);
console.log(x2);

//set

let [ , x3, , x4] = new Set('Hello'); // пробелом с запятой можн пропускать елементы
console.log(x3);
console.log(x4);

// значение по умолчанию

let [x5, x6 = 'Baby'] = [999]; 
console.log(x5);
console.log(x6);

//Object

let objt = {
    fname: 'Alex',
    passport: true,
    age: 25,
    best: 777
}

let { age, ppp, fname } = objt;
console.log(age, ppp, fname);

// по переменным

let {age: x, fname: y, best: z = 55 } = objt;
console.log(x, y, z);





