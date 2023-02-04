document.body.onclick = (event) => {
    const elem = event.target;
    // console.log(elem);
    if (elem.classList.contains('symbol')) {
        console.log(elem);
        navigator.clipboard.writeText(elem.innerHTML)
            .then(() => {
                document.querySelector('.out_1').innerHTML += 'copy<br>'
            })
            .catch(err => {
            console.log(err);
        })
    }
}
// 😎 😅

function f1() {
    let a = 10;
    return a;
}
console.log(f1());

function f2() {
    let a = 20;
    return a;
}

function f3() {
    let a = 30;
    return a;
}
function res(a,b,c,) {
    if(c > b && a < c)
        console.log(a, b, c);
    return c;
}
console.log(res(f1(), f2(), f3()));
        
