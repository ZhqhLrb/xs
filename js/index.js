function init () {
    var cont = document.querySelector('.container');

    // cont.style.height = window.innerHeight + 'px';

    if (window.innerHeight / window.dpr >= 500) {
        cont.style.height = window.innerHeight + 'px';
    }
}

// init();