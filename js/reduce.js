
let h = [-12,22, -4, -6, 3, 55, 66]; //reduce возвращает результат обработки массива, два парамметра accum(накопитель) и текущее значение item
let x = h.reduce((accum, item,) => {
    // accum = accum + ' ' + item; // елементы массива
    // accum = accum + item;  // Сумма елементов массива
    // if (item > 0) {           //елементы больше 0 суммируються в акумею Кладем в акум то что хотим накопить
    //     accum += item;    
    // }
    if (item > accum) {  // Самое большее значение
        accum = item
    }
        return accum;
}, 0)  // Это стартовое значение акума. После функции , и 0. Если в начале массива будет отрицательное значение оно попадет в акум и сумма может быть некоректная, так как условия только выше 0, поэтому принудительно ставим акум 0 в самом конце

console.log('=========');
console.log(x);

let aaa = [
    {'id': 55, 'city': 'Kyiv'},
    {'id': 65, 'city': 'Lviv'},
    {'id': 155, 'city': 'Bro'},
]

let bbb = aaa.reduce((accum, item) => {
    accum.push(item.city);
    return accum;
}, [])

console.log(aaa);
console.log(bbb);
console.log(Array.isArray(aaa)); //метод проверяющий что мы получили массив или нет.

//Home_work

// aaa = 'Hello BAby'
// aaa = new Set([1,33,44])
// aaa = [1, 2, 3];

b_1.onclick = () => {
    out_1.innerHTML = Array.isArray(aaa);
    // out_1.innerHTML = typeof(aaa);
}

b_2.onclick = () => {
   let b = aaa.reduce((accum, item) => {
        accum.push(item.city);
        return accum;
    }, [])
    console.log(b);
}

let ray = [123, 45, 666, 79, 245, 2345, 0];
let ray1 = [
    [1, 2, 3, 4, 5],
    [234, 45, 356,],
    [1,2,3,4,35,56,467,78,9,9,0]
]

b_3.onclick = () => {
    let b = ray.reduce((accum, item) => {
        if (accum < item) accum = item;
        return accum
    }, 0)
    out_3.innerHTML = b;
}

b_4.onclick = () => {
    let b = ray.reduce((accum, item) => {
        if (accum < item) accum = item;
        return accum
    }, 0)
    out_4.innerHTML = b;
}



