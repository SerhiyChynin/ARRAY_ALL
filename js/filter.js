//Результат применения Филтра мы получаем новым массив, содержащий елементы старого массива прошедшие по условиям
//filter  получает функцию callback в которой есть несколько обязательных и не обязательных параметров
const w = [1, 2, 3, 4, 45, 8, 0, -3, -5, 456, 5768, 234, 5, 65, 56];
let r = w.filter((item, index, array) => {      //item по очереди попадает каждый из елементов массива, если true елемент проходит в новый массив
    // console.log(index);
    if(item > -1)
    return true;                //возвращает либо тру либо фолс, не нужно возвращать айтем, если в массиве будет ноль (ноль это фолс) и может быть ошибка
})                              //с true 0 залетит в новый массив с item не залетит 
 console.log(w);
console.log(r);

const clients = [
    {"inn": 'grgegwlrkf', 'user': 'Ivanov', 'debt': 4},
    {"inn": 'grgegw54kf', 'user': 'Petrov', 'debt': 0},
    {"inn": 'grgeg22rkf', 'user': 'Mishigin', 'debt': 5},
    {"inn": 'grge43wlrkf', 'user': 'Lushw', 'debt': 4122},
    {"inn": 'grg12gwlrkf', 'user': 'Nikki', 'debt': 43333},
    {"inn": 'grg12g2wlrkf', 'user': 'Nikkilo', 'debt': 43},
]

let debts = clients.filter(item => item.debt > 10).sort((a, b) => (b.debt - a.debt));
console.log(debts);

b_1.onclick = () => {
    let z = w.filter(item => item % 2 === 0 && item < 200);
    console.log(z);
    out_1.innerHTML = z;
}

b_2.onclick = () => {
    let z = w.filter((item, index) => index % 2 === 0 && item < 10);
    console.log(z);
    out_2.innerHTML = z;
}

b_3.onclick = () => {
    let z = w.filter((item, index) => item > 40 && index % 2 === 0);
    
    let debtName = clients.filter(item => item.user.includes(i_3.value))
    console.log(debtName);
    console.log(z);
}



