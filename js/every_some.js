
const a22 = [3, 4, 5, 5, 6, 18];
const c22 = [
    {name: 'ivan', age: 12},
    {name: 'ira', age: 33},
    {name: 'illya', age: 19},
    {name: 'van', age: 32},
    {name: 'kolya', age: 22},
]

// every - запускает функцию для каждого елемента, если для всех елем вернет тру, в переменную будет помещена тру, в иначе фолс
// удобно для проверки возраста или каких то параметров, если один из параметров выходит за рамки параметра дает фолс
let b22 = a22.every(item => {       //функции можно прописывать отдельно и вставлять название функции с прописаной логикой
    if (item > 2 && item < 20) {
        return true;
    }
})
console.log(b22);

let v22 = c22.every(item => {       //функции можно прописывать отдельно и вставлять название функции с прописаной логикой
    if (item.age >= 16) {
        return true;
    }
})
console.log(v22);

// some - отвечает есть ли хотя бы один елемент отвечающий приведенным условиям

let z22 = c22.some(item => {       // если хоть один елемент попал под условия вернет тру если ни один не попал - фолс
    if (item.age < 16) {
        return true;  // пустой массив вернет фолс даже если ретерн тру написать
    }
})
console.log(z22);

// Home work

let a111 = [22, 33, 44, 55, 66, 77, 88];
let a111_from = 7;
let a111_to = 100;
let a111_too = 80;

b_1.onclick = () => {
    let b = a111.every(item => {
        if (item > a111_from && item < a111_to) return true;
    })
    out_1.innerHTML = b;
}

b_2.onclick = () => {
    let b = a111.every(item => {
        if (item > a111_from && item < a111_too) return true;
    })
    out_2.innerHTML = b;
}

let yyy = [
    [10, 2, 3, 4],
    [20, 3, 4, 5, 6],
    [40,5,6,7]
]
console.log(yyy);

let ttt = yyy.reduce((accum, item) => {
    accum = accum + item;
    return accum
})
console.log(ttt);


b_3.onclick = () => {
    let b = yyy.reduce((accum, item, array) => {
        accum = accum + item;
        console.log(accum);
        return accum
    }, [])
    out_3.innerHTML = b;
    // let c = b.every(item => {
    //     if (item > 20) return true;
    // })
    
}
