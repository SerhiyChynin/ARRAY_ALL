//split - разбить строку и превратить ее в массив
let str = 'Hello Baby today is a good day!';
let s = str.split('', 19); // '' разделитель без пробела нужен для разделения слов, иначе вся строка целиком залетит в массив одним елементом
console.log(str);         // через запятую можно указать колл возвращаемых элементов
console.log(s);
let m = str.split(' ')  //Если несколько слов ' ' разделитель с пробелом разделит слова между собой, иначе предложение будет вместе
console.log(m);

// join - позволяет обьединить массив в строку
let zzz = ['h', 'cx', 'g', 't', 'r',];
let xx2 = zzz.join('')
console.log(xx2);
console.log(zzz);

// Home work

let a11 = [13, 15, 22, 23, 26, 35, 72];

b_1.onclick = () => {
    let b = a11.join('');
    out_1.innerHTML = b; 
}


b_2.onclick = () => {
    let b = a11.join(' ');
    out_2.innerHTML = b; 
}


b_3.onclick = () => {
    let b = a11.join('=');
    out_3.innerHTML = b; 
}

b_4.onclick = () => {
    let b = str.split(' ', 3);
    out_4.innerHTML = b; 
}


