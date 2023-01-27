//indexOf; - ищет значения в массиве, если не находть возвращает -1

const a = [1, 2, 3, 4, 5 ,1, 5];
console.log(a.indexOf(3)); // index 2
console.log(a.indexOf(13)); // -1  так как такого элемента нет в массиве
console.table(a)
if (a.indexOf(14) !== -1) { //проверка присутствует елемент в массиве или нетю Если индекс оф с таким то значением не равно -1 выведи труб иначе фолс
    console.log('YES');
}
else {
    console.log('NO');
}

const b = ['Hi', 'Hello',]

console.log(b.indexOf('Hi'));
console.log(a.indexOf(1, 5)) // второе знание после , указывает с какого индекса начинать искать число, если 2 одинаковый то выведет первый и прекратит работу
console.log(a.indexOf(3));

function indexOfEmul(arr, item, from = 0) {
for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
        return i;
    }
}
return -1;
}

console.log(indexOfEmul(a, 3));

// Home Work

let b_1 = document.querySelector('.b_1');
let b_2 = document.querySelector('.b_2');
let b_3 = document.querySelector('.b_3');
let b_4 = document.querySelector('.b_4');
let b_5 = document.querySelector('.b_5');
let b_6 = document.querySelector('.b_6');
let b_7 = document.querySelector('.b_7');
let b_8 = document.querySelector('.b_8');

let out_1 = document.querySelector('.out_1');
let out_2 = document.querySelector('.out_2');
let out_3 = document.querySelector('.out_3');
let out_4 = document.querySelector('.out_4');
let out_5 = document.querySelector('.out_5');
let out_6 = document.querySelector('.out_6');
let out_7 = document.querySelector('.out_7');
let out_8 = document.querySelector('.out_8');

let i_1 = document.querySelector('.i_1');
let i_2 = document.querySelector('.i_2');
let i_3 = document.querySelector('.i_3');
let i_4 = document.querySelector('.i_4');
let i_5 = document.querySelector('.i_5');
let i_6 = document.querySelector('.i_6');
let i_7 = document.querySelector('.i_7');
let i_8 = document.querySelector('.i_8');

const a1 = [10, 2, '2', 20, 30,'Hello' , 40, 50, 'Okay google'];

b_1.onclick = () => {
     let n = +i_1.value || i_1.value;
    out_1.innerHTML = i_1.value + ': ' + 'index:' + a1.indexOf(n);
}

b_2.onclick = () => {
    let n = +i_2.value || i_2.value;
    if (a1.indexOf(n) !== -1) return out_2.innerHTML = a1.indexOf(n);
    else if (a1.indexOf(n) === -1) return out_2.innerHTML = false; 
}

b_3.onclick = () => {
    let n = +i_3.value || i_3.value;
    if (a1.indexOf(n) !== -1) return out_3.innerHTML = true;
    else if (a1.indexOf(n) === -1) return out_3.innerHTML = false; 
}

b_4.onclick = (arr, elem) => {
    arr = a1;
    elem = arr.indexOf(+i_4.value || i_4.value);
    if (arr.indexOf(elem) !== elem) return out_4.innerHTML = true
    return out_4.innerHTML = false
    
}

let a6 = 'Hello my darling';
b_6.onclick = () => {
    let n = +i_6.value || i_6.value;
     out_6.innerHTML = a6.indexOf(n);
}

b_7.onclick = (arr, elem) => {
    arr = a1;
    elem = +i_7.value || i_7.value;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr);
        console.log(elem);
        if (elem !== arr[i]) return out_7.innerHTML = -1;
        return out_7.innerHTML = 'YES';
    }
}







