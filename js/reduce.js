
let h = [-12,22, -4, -6, 3, 55, 66]; //reduce возвращает результат обработки массива, два парамметра accum(накопитель) и текущее значение item
let x = h.reduce((accum, item,) => {
    // accum = accum + ' ' + item; // елементы массива
    // accum = accum + item;  // Сумма елементов массива
    // if (item > 0) {           //елементы больше 0 суммируються в акумею Кладем в акум то что хотим накопить
    //     accum += item;    
    // }
    if (item > accum) {  // Самое большее значение
        accum = accum / item;
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
    [1,2,3,4,35,56,467,78,9,9,0,222]
]

b_3.onclick = () => {
    let b = ray.reduce((accum, item) => {
        if (accum < item) accum = item;
        return accum
    }, 0)
    out_3.innerHTML = b;
}

b_4.onclick = () => {
    let b = ray1.reduce((accum, item) => {

        if (accum < item.length) accum = item.length;
        return accum;
    }, 0)
    out_4.innerHTML = b;
}

b_5.onclick = () => {
    let b = ray1.reduce((accum, item, index, array) => {        
        if (accum < array)
        accum = array;
        return accum;
    }, [])
    out_5.innerHTML = b;
}


const temp = [+5, +7, +8, 0, -2];
// console.log(Math.floor(temp.item));

b_6.onclick = () => {
    let b = temp.reduce((accum, item, index, array) => {        
        accum = (accum + item);
        let total = accum / array.length;
        out_6.innerHTML = total;
        return accum;
    })

}

b_7.onclick = () => {
    let b = aaa.reduce((accum, item, index, array) => {        
        accum.push(item.id+ ': ' + item.city + ' ' )
        return accum;
    }, [])
    out_7.innerHTML = b;
}

const country = [
    {'name': 'Ukraine', 'id': 22},
    {'name': 'Usa', 'id': 32},
    {'name': 'England', 'id': 42 },
]

b_8.onclick = () => {
    let b = country.reduce((accum, item, index, array) => {        
        accum.push(item.name + ' ' )
        return accum;
    }, [])
    console.log(Array.isArray(b));
    out_8.innerHTML = b;
}








