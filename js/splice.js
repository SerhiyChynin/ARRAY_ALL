
//concat - возвращает, создает новый массив. Позволяет обьединить массивы в новый массив

const ar = [21, 22, 23, 24];  // можно конкатенировать массив сам с собой, будет копия
const ar2 = [31, 32, 33, 34];
const ar3 = [41, 42, 43, 44];
ar3[22] = 100;
const br = ar.concat(ar2, ar3,);  //Новая переменная присвоить первый массив конкатынация в скобках указуем второй массив который будем конкатенировать.
console.log(br);   // Если вложенный массив или обьект то в новом массиве появиться на него ссылка и если что то будет меняться в исходном массивах то и в последнем тож будет меняться. Копирование по ссылке обьектов

// cocft string

let ddd = 'Hello ';
let fff = 'Baby! ';
let ccc = ddd.concat(fff);
console.log(ccc);

//splice - изменяет содержимое массива, показуем откуда и что удалять. Изменяет исходный массив

let rrr = [33, 44, 55, 66, 77, 88];
console.log(rrr);
// rrr.splice(2,2)  // с позиции 2 удалить 2 елемента
rrr.splice(2, 2, 'Hello ha ha ha', 222); // c позиции 2 удалить 2 елемента и на их место добавить третий параметр
console.log(rrr);

//Home_work

b_1.onclick = () => {
    let b = ar.concat(ar2);
    out_1.innerHTML = b; 
}

b_2.onclick = () => {
    let b = ddd.concat(fff, 'Hellooooo ', 222);
    out_2.innerHTML = b;
}

b_3.onclick = () => {
    let b = ddd.concat(fff, ar);
    out_3.innerHTML = b;
}
let ggg = ['Heloo', 123, 555, 666, 45, 34, 324, 'Ha ha'];

b_4.onclick = () => {
    ggg.splice(1, 7, ' I add some thing ')
    out_4.innerHTML = ggg;
    out_4.style.background = 'orange';
}










