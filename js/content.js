window.onload = function () {
    var load = document.querySelector('.loading');
    var inner = document.querySelector('.inner');
    load.style.display = 'none';
    inner.style.display = 'block';
}

function init() {
    var cont = document.querySelector('.container');
    var alertBox = document.querySelector('.alert');
    var btn = document.querySelector('.alert-confirm');

    if (window.innerHeight / window.dpr >= 500) {
        cont.style.height = window.innerHeight + 'px';
    }

    btn.addEventListener('click', function () {
        alertBox.style.display = 'none';
    })
}

init();