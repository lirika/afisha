const burger: HTMLElement = document.getElementById('burger');
const header: HTMLElement = document.getElementById('header');
const dark: HTMLElement = document.getElementById('dark');
const navbar: HTMLElement = document.getElementById('navbar');

let burgerActive = false;

function setNavbar() {
  let selected: HTMLElement;
  navbar.addEventListener('click', (ev: MouseEvent) => {
    const targetItem = ev.target;
    // @ts-ignore
    if (targetItem.className !== 'item') {
      return;
    }
    active(targetItem);
  });

  function active(item: HTMLElement) {
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

burger.addEventListener('click', () => {
  if (burgerActive === false) {
    burger.classList.add('burger-active');
    burgerActive = true;
    header.classList.add('header-animation');
    dark.style.display = 'block';
  } else {
    burgerHide();
  }
});

dark.addEventListener('click', () => {
  burgerHide();
});
