var burger = document.getElementById('burger');
var header = document.getElementById('header');
var dark = document.getElementById('dark');
var navbar = document.getElementById('navbar');
var burgerActive = false;
function setNavbar() {
    var selected;
    navbar.addEventListener('click', function (ev) {
        var targetItem = ev.target;
        // @ts-ignore
        if (targetItem.className !== 'item') {
            return;
        }
        active(targetItem);
    });
    function active(item) {
        if (selected) {
            selected.classList.remove('active');
        }
        selected = item;
        selected.classList.add('active');
    }
}
setNavbar();
function burgerHide() {
    burger.classList.remove('burger-active');
    header.classList.remove('header-animation');
    burgerActive = false;
    dark.style.display = 'none';
}
burger.addEventListener('click', function () {
    if (burgerActive === false) {
        burger.classList.add('burger-active');
        burgerActive = true;
        header.classList.add('header-animation');
        dark.style.display = 'block';
    }
    else {
        burgerHide();
    }
});
dark.addEventListener('click', function () {
    burgerHide();
});
//events items
var count = 4;
var wrap = document.querySelector('.wrap-items');
var items = document.querySelector('.items');
var ul = document.querySelector('.wrap-items ul');
var listLi = document.querySelectorAll('.events li');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var scrollThumb = document.querySelector('.scroll-thumb');
listLi.forEach(function (li) {
    li.addEventListener('click', function (event) {
        scrollThumb.style.marginLeft = (li.offsetLeft - ul.offsetLeft) + "px";
    });
});
var position = 0;
prev.addEventListener('click', function (event) {
    if (ul.offsetTop > 0) {
        return;
    }
    position += 190;
    ul.style.marginTop = position + "px";
});
next.addEventListener('click', function (event) {
    if (ul.offsetTop < (-(ul.offsetHeight - 190 * 2))) {
        return;
    }
    position -= 190;
    ul.style.marginTop = position + "px";
});
