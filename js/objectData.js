
const d1 = new Date();
//Fri Feb 03 2023 10:54:54 GMT+0200 (Восточная Европа, стандартное время)
console.log(d1);

//miliseconds

const d2 = new Date(1630916008000); // к милисекундам вконце над добавлять 000 для коректности
console.log(d2);

// Явно

const d3 = new Date(2023, 1, 3, 11, 00); // месяц идет с 0
const d4 = new Date('2023 Feb 3 '); 
console.log(d3);
console.log(d4);
console.log(typeof d3);

// строку в обьект

const d5 = new Date('Fri Feb 03 2023 10:54:54 GMT+0200')
console.log(d5);
// out_5.innerHTML = d5
out_6.innerHTML = d5.toUTCString()
out_7.innerHTML = d5.toDateString()
out_8.innerHTML = d5.toISOString()

const d20 = new Date();
console.log(d20.getFullYear());
console.log(d20.getMonth()); //месяцы идут с 0 до 11
console.log(d20.getDate()); //текущий день
console.log(d20.getDay()); //текущий день недели начиная с воскресенья - 0 to set 6;
console.log(d20.getHours());// 0 to 24 
console.log(d20.getMinutes()); // 0 to 59
console.log(d20.getSeconds()); // 0 to 59
console.log(d20.getTime()); // UnixTime в милисекундах
console.log(Date.now());// UnixTime

function addLeadingZero(d) {
    return (d < 10) ? '0' + d : d;
}
const days = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thuesday', 'Friday', 'Saterday']


function getUserTime(t) { 
    let Y = t.getFullYear();
    let M = addLeadingZero(t.getMonth () + 1);
    let D = addLeadingZero(t.getDate ());
    let d = days[t.getDay ()];
    let h = addLeadingZero(t.getHours ());
    let m = addLeadingZero(t.getMinutes ());
    console.log(Y, M, D, d, h, m);
    return `${Y}.${M}.${D} ${h}:${m} ${d}`
}
console.log(getUserTime(new Date()));

b_4.onclick = () => {
    out_4.innerHTML = getUserTime(new Date())
}

window.onload = function () {
    window.setInterval(function () {
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        if (h < 10) h = `0${h}`
        if (m < 10) m = `0${m}`
        if (s < 10) s = `0${s}`
        let clock = `${h}:${m}:${s}`;
        document.querySelector('.clock').innerHTML = clock;
    }, 1000);
}