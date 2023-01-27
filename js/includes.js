//Includes - возвращает только true или false, задача метода констатировать да есть или нет нету, не возвращает индекс елемента

const transactions = ['97426h1234', 'nnafnvns33cm', '132446lj573473', '1235jj54355', '2587h425'];
const test = [44, 55, 66, 77, 889, 990, 553];
 
if (test.indexOf(44) !== -1) {
    console.log('YES ' + test.indexOf(44));
}
else {
    console.log('NO');
}

if (transactions.includes('132446lj573473')) {
    console.log('YES ' + transactions.indexOf('132446lj573473'));
}
else {
    console.log('NO');
}


const str = 'abcdefgsjdsakhfj';
if (str.includes('fg1')) {
    console.log('YES ' + str.indexOf('fg'));
}
else {
    console.log('NO');
}


const users = [
    {'name': 'Ivanov', 'age': 44},
    {'name': 'Petrov', 'age': 12},
    {'name': 'Mishigin', 'age': 54},
    {'name': 'Petrushka', 'age': 33},
]

let newUsers = users.filter(item => item.name.includes('i') ); 
console.log(newUsers);
