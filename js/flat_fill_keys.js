//flat - применяется к вложеным массивам, перебирает их и создает массив одной размерности, при определенном уровне вложенности начинает пасовать, если массив в массиве в массиве может последний не преобразовать а оставить вложеным 

let u = [1, [6, 7], 2, 3, 4,[5,7,[[11, [12] ], 4,45]]];
let o = u.flat(4);  // параметр указует на глубину вложенностию Если большой уровень вложенности необходимо его указать в параметре
console.log(u);     // параметр работает по принципу рекурсивности не стоит ставить большие значения нагружает систему
console.log(o);

let y = [3, [4, 5]]
y[100] = 100;      //если нужна копия массива с пустыми елементами то флет не поможет, он их пропустит и слепит без пропусков
let h = y.flat();
console.log(y);
console.log(h);

// fill - создает массив по указаным параметрам и заполняет его указаными значениями

let p = [1, 2, 3, 25, 23, 222, 211, 12,]; //fill изменил исходній массив и возвратил ссілку на него
console.log(p);
let n = p.fill(33, 1, 6) // первый параметр значение каким заполнить массив, второй третий параметр с какого и по какой индекс заполнять
console.log(n);          // если указать (3, 0) 0 - полностью заменит исходный массив с какого индекса

//keys - позволяет извлечь ключи из массива и массиво подобного обьекта и обьекта

let kkk = {
    hi: 3, hello: 5,
    Yes: 33, Baby: 6,
}
console.log(Object.keys(p)); // в глубь метод не лезет, если вложенный масив то выведет только ключи первого уровня
console.log(Object.keys(kkk)); // ключи у нас являються строками!!!!

// Home Work


