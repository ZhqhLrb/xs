function init () {
    var cont = document.querySelector('.container');
    var form = document.querySelector('.form');
    var nameInput = document.querySelector('.names');
    var btn = document.querySelector('.btn');

    var alertBox = document.querySelector('.alert');
    var btn = document.querySelector('.alert-confirm');
    // cont.style.height = window.innerHeight + 'px';

    if (window.innerHeight / window.dpr >= 500) {
        cont.style.height = window.innerHeight + 'px';
    }

    form.onsubmit = function () {
        var name = nameInput.value;
        if (name.length > 5 || name.length <= 0) {
            alertBox.style.display = 'block';
            return false;
        }
    }

    btn.addEventListener('click', function () {
        alertBox.style.display = 'none';
    })
}

init();