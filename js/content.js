window.onload = function () {
    var load = document.querySelector('.loading');
    var inner = document.querySelector('.inner');
    load.style.display = 'none';
    inner.style.display = 'block';
}

function init() {
    var cont = document.querySelector('.container');

    if (window.innerHeight / window.dpr >= 500) {
        cont.style.height = window.innerHeight + 'px';
    }   
}

init();