

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
    console.log('car' + goods + 'delete');
}

