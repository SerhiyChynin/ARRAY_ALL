//Шаблонные литералы
//Back Tics
const text1 = `Hello Baby`;
console.log(text1);
console.log(typeof text1);

//Применение кавычек

const text2 = `Hello Baby - сегождя 'учимся' применять "обратные" кавычки`;
const text2q = 'Hello Baby - сегождя \'учимся\' применять "обратные" кавычки'; //для записи обычными придеться экранировать кавычки слешем, иначе будет разрыв строки
console.log(text2);                                                            // в обратных кавычках таких проблем нет
console.log(text2q);

//Мультистроки

const text3 = `
Сверху вниз
летим без
оглядки
`;
console.log(text3); // перенос строк без проблем. с Обычными были бы проблемы

//Интерполяция  переменные - внутри шаблонных строк ДЖС может интерпретировать переменные и может подставлять их значения

const t4 = 'коды yeee';
const text4 = `На мостовую смотрели ${t4}, нагло мяукали` //подставляет значение переменной 
console.log(text4);

//Интерполяция выражения 

function tesst() {
    return 1122*2;
}
const t5 = 15;
const text5 = `На мостовую смотрели ${t5 + 100 + Math.random() + tesst()}, нагло мяукали`
console.log(text5);

// HTML шаблоны

b_8.onclick = () => {
const header = 'Шаблонные строки';
const tag = ['шаблонные строки', "шаблонные литералы", 'ES6', 'FINALL', 'BABY'];
let html = ` <h3>${header}</h3> <ul>`;
for (const x of tag) {
    html += `<li>${x}</li>`;
}
html += `</ul>`;
out_8.innerHTML = html;
}


