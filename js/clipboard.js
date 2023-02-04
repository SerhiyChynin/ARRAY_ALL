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
        
