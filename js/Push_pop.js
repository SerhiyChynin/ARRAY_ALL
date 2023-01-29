

let q = [99, 88];
console.log(q);
q[0] = 66;
console.log(q);
q[q.length] = 55; //добавить в конец массива в лоб
console.log(q);   // возвращает длинну массива индекс
q.push(88, 44, 55); // через запятую можн несколько елементов добавлять
console.log(q);
q.pop();  // удаляет последний елемент
q.pop();
console.log(q);
console.log(q.pop()); //pop возвращает удаленный елемент


let car = [];
document.querySelector('.push').onclick = () => {
    let id = +document.querySelector('#goods').value;
    if (!car.includes(id)) {
        car.push(id);
    }
    document.querySelector('#goods').value = ' ';
    document.querySelector('.out_9').innerHTML = car;
    console.log(car);
}
document.querySelector('.pop').onclick = () => {
    let id = +document.querySelector('#goods').value;
    let goods = car.pop();
    document.querySelector('.out_9').innerHTML = car;
    console.log('car ' + goods + ' delete');
}


// Home Work

let strng = [];

b_1.onclick = () => {
    if (!strng.includes(i_1.value)) {
        strng.push(i_1.value);
        console.log(strng);
        out_1.innerHTML = strng;
    }
    i_1.value = '';
}

let nmb = [];

b_2.onclick = () => {
    if (!nmb.includes(+i_2.value)) {
        nmb.push(+i_2.value, i_2.value ** 3)
    console.log(nmb);
        out_2.innerHTML = nmb;
    }
    i_2.value = '';
}
 
let ar = [];
b_3.onclick = () => {
    out_3.innerHTML = 'length: ' + ar.push(i_3.value) +' ' + ar;
    console.log(ar);
    i_3.value = '';
}
