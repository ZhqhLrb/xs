window.onload = function () {
    var load = document.querySelector('.loading');
    load.style.display = 'none';
}

function init() {
    var cont = document.querySelector('.container');

    if (window.innerHeight / window.dpr >= 500) {
        cont.style.height = window.innerHeight + 'px';
    }   
}

init();