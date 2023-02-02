
const temp = [0, 4, 4, 6, 8, 7, 3, , -2, -1, 0];
temp[20] = 22;

let tF = temp.map(item => {  //map создает новый массив перебирает старый и в новый присваивает то что прописано в ретерн
    console.log(item);       //результирующий массив равен исходному, меп перебирает каждый елемент что то с ним делает и обязательно возвращает результат
    return 32 + item * 1.8    // возвращает то что написано после ретерн
})
console.log(tF);

let a3 = [33, 44, 55];
a3[10] = 90;
let b3 = a3.map((item, index, array) => {
    if (index == 2) {
        array[index + 1] = 66;
    }
    return item
})
for (let i = 0; i < a3.length; i++){
    if (a3[i] == 66) {
        console.log('Hello');
    }
}

// console.log(a3);
// console.log(b3);

const z2 = [
    {"name": "Ivan", 'order': 12, "sum": '123' },
    {"name": " kolya", 'order': 13, "sum": '144' },
    {"name": "  VANgog  ", 'order': 14, "sum": '13.5' },
    {"name": "Ira   ", 'order': 15, "sum": '1223,5' },
    {"name": "Ivanov", 'order': 16, "sum": '12,5' },

]

const zBack = z2.map(item => {
    item.name = item.name.trim().toLocaleLowerCase();
    return item
})
console.log(zBack);


// Home work

b_1.onclick = () => {
    let b = temp.map(item => {
        return item * 3;
    })
    out_1.innerHTML = b.join(' ');
}

b_2.onclick = () => {
    let b = temp.map((item, index) => {
    
        return item * 3;
    })
    out_2.innerHTML = b.join(' ');
}

b_3.onclick = () => {
    let b = temp.map((item, index) => {
    if(item >= 0) return item * 2
    })
    out_3.innerHTML = b.join(' ');
}

b_4.onclick = () => {
    let b = temp.map((item, index) => {
        return index
    })
    out_4.innerHTML = b.join(' ') + ' ' + temp.join(' ');
}

let fff2 = [
    [1,2,3],
    [1,4,2],
    [1,6,4, 12],
]

b_5.onclick = () => {
    let b = fff2.map((item) => {
        return item.reduce((acc, item) => {
            acc = acc + item;
            return acc;
        })
    })
    out_5.innerHTML = b.join(' ') + ' ' + fff2.flat().join(' ');
}

let rrr5 = [1, 2, 34, 5, 7, ]; 
b_6.onclick = () => {
    let b = rrr5.map((item, index) => {
        return item
    })
    let c = rrr5.map((item, index) => {
        return index
    })
    out_6.innerHTML = b.join(' ') + ' _______   ' + c.join(' ');
}
