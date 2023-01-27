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
if (str.includes('fg')) {
    console.log('YES ' + str.indexOf('fg'));
}
else {
    console.log('NO');
}


const users = [ 'Petrov',
    {'name': 'Ivanov', 'age': 44},
    {'name': 'Petrov', 'age': 12},
    {'name': 'Mishigin', 'age': 54},
    {'name': 'Petrushka', 'age': 33},
]

// let newUsers = users.filter(item => item.name.includes('i') ); 
// console.log(newUsers);


//HomeWork

b_1.onclick = () => {
    let n = +i_1.value || i_1.value;
    console.log(n);
    let newUsers = users.filter(item => item.name.includes(n))
    console.log(newUsers);
    return out_1.innerHTML = newUsers;
    
}

b_2.onclick = () => {
    let n = +i_2.value || i_2.value;
    let newUsers = users.filter(item => item.name.includes(n))
    console.log(newUsers);  
    if (newUsers.includes(users)) return  out_2.innerHTML = newUsers;
    else return out_2.innerHTML = newUsers.name;
}



if (users.includes('Petrov')) {
    console.log('YES_____');
    // out_3.innerHTML = 'Yes';
}
else {
    console.log('NO_____');
    // out_3.innerHTML = 'NO';
}