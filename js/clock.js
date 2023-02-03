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