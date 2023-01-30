let l = [3, 4, 5];
let k = l.shift();
l.shift();     // удаляет с начала массива, возвращает удаленній елемент, массив переиндексируется
console.log(l);
console.log(k);

let j = l.unshift(333); // добавляет елемент в начала массива и переиндексирует массив, возвращает новую длинну массива
console.log(l);
console.log(j);

let d = [12, 23, 34, 45, 56, 67,56,67,78,444];
let f = d.slice(3, 5); // от 3 включительно и до 5 не включительно 
console.log(d);
console.log(f); // создает новый массив из начального не изменяя его и копирует все в новый массив начиная с указаной позиции(включительно) указанной в аргументе.
// Слайс нужен если необходимо создать массив на основе исходного(не изменяя его), и скопировать туда последовательно(это важно) елементы. 

let e = 'Hello';
// e.shift, unshift - error!!!
console.log(e.slice(3, 5)); // выведет строки от и до; Slice работает на строке

// Home Work

let t = [1, 2, 3];


b_1.onclick = () => {
    t.unshift(+i_1.value || i_1.value);
    out_1.innerHTML = t;
    console.log(t);
    i_1.value = '';
}

b_2.onclick = () => {
    t.unshift(+i_2.value, (i_2.value ** 4) );
    // console.log(t.unshift(+i_2.value, i_2.value ** 4) );
    console.log(t);
    out_2.innerHTML = t;
    i_2.value = '';
}

