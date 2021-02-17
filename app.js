// ДЛЯ ВЕРХНЕГО МЕНЮ
var ESC_KEYCODE = 27;
var body = document.querySelector('body');
var headerOpen = document.querySelector('#button-open');
var headerClose = document.querySelector('#button-close');

// КОД МЕНЮ
// добавляет классы для корректного отображения закрытого меню
function closeHeaderMenu() {
    headerOpen.addEventListener('click', openHeaderMenu);
    headerClose.removeEventListener('click', closeHeaderMenu);
    document.removeEventListener('keydown', onEscPress);
    body.classList.add('closed-menu-js');
    body.classList.remove('opened-menu-js');
}

// добавляет классы для корректного отображения открытого меню
function openHeaderMenu() {
    headerOpen.removeEventListener('click', openHeaderMenu);
    headerClose.addEventListener('click', closeHeaderMenu);
    document.addEventListener('keydown', onEscPress);
    body.classList.remove('closed-menu-js');
    body.classList.add('opened-menu-js');
}

function onEscPress(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
        closeHeaderMenu();
    }
}

closeHeaderMenu();