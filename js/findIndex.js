
const qqq = [10, 20, 30, 40, 50];

//find - запускает на каждом елементе массива функцию, если вернет тру, find будет остановлен и возвращенно значение на котором остановилось

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

//FinIndex - работает точно так же только возвращает номер индекса

let ccc = qqq.findIndex(item => {
    if (item > 38) {
        return true;
    }
})
console.log(ccc);







