
const user4 = {
    name: 'Mishigin',
    age: 25,
    profession: 'programmer',
    salary: 70000,
    help: function(){console.log('SOS');}
};
console.log(user4);

// keys

let keys = Object.keys(user4);
console.log(Object.keys(user4));
console.log(keys);

// value 
let value = Object.values(user4);
console.log(value);

//entries - массив и из массивов, первый елемент ключ второй его значение.
let entries = Object.entries (user4);
console.log(entries);

entries.map(([index, item]) => console.log(index, item));
