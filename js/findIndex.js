
const qqq = [10, 20, 30, 40, 50];

//find - запускает на каждом елементе массива функцию, если вернет тру, find будет остановлен и возвращенно значение на котором остановилось. Undefind если условие не сработало

let www = qqq.find(item => {
    if (item >= 15 && item <= 45) {
        return true;
    }
})
console.log(www);

const baza = [
    { 'name': 'ivan', 'age': 13},
    { 'name': 'yurasyk', 'age': 21},
    { 'name': 'lesyk', 'age': 25},
    { 'name': 'misha', 'age': 32},
    { 'name': 'petro', 'age': 12},
]

let eee = baza.find(item => {
    if (item.age <= 18) {
        return true;
    }
})
console.log(eee);

//FinIndex - работает точно так же только возвращает номер индекса. Если не выполняеться условия вернеться -1

let ccc = qqq.findIndex(item => {
    if (item > 38) {
        return true;
    }
})
console.log(ccc);

//lastIndexOf - указываеться елемент который над найти, и выведет индекс последнего елемента
const ddd = 'Hello  Helga';
let xxx = ddd.lastIndexOf('e'); // работает и со строками и с массивами 
console.log(xxx);


// Home Work

let a1 = [13, 15, 22, 23, 26, 35, 72];
let a1_from = 17;
let a1_to = 39;

b_1.onclick = () => {
    let b = a1.find(item => {
        if (item > a1_from && item < a1_to) {
            return true
        }
    })
    out_1.innerHTML = b;
}

b_2.onclick = () => {
    let b = a1.find(item => {
        if (item > a1_from && item < a1_to) {
            return true;
        }
    })
    if (b === undefined) {
        b = false
    }
    out_2.innerHTML = b;
}

b_3.onclick = () => {
    let b = a1.filter(item => (item > a1_from && item < a1_to))
   let c =  b.find(item => {
        if (item >= a1_from) return true
    })
    console.log(b);
    out_3.innerHTML = c;
}











