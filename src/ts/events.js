var burger = document.getElementById('burger');
var header = document.getElementById('header');
var dark = document.getElementById('dark');
var navbar = document.getElementById('navbar');
var burgerActive = false;
function setNavbar() {
  var selected;
  navbar.addEventListener('click', function(ev) {
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
  burger_active = false;
  dark.style.display = 'none';
}
burger.addEventListener('click', function() {
  if (burgerActive === false) {
    burger.classList.add('burger-active');
    burgerActive = true;
    header.classList.add('header-animation');
    dark.style.display = 'block';
  } else {
    burgerHide();
  }
});
dark.addEventListener('click', function() {
  burgerHide();
});
