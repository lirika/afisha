import DataService from '../services/DataService';
import '../styles/categories.css';

export default class EventsPage {
  renderEventsList() {
    const burger = document.getElementById('burger') as HTMLDivElement;
    const header: HTMLElement= document.getElementById('header');
    const dark = document.getElementById('dark') as HTMLDivElement;
    const navbar = document.getElementById('navbar') as HTMLDivElement;

    let burgerActive = false;

    function setNavbar() {
      let selected: HTMLElement;
      navbar.addEventListener('click', (ev) => {
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
      burgerActive = false;
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

//events items


    const count :number = 4;

    const wrap = document.querySelector('.wrap-items') as HTMLDivElement;
    const items = document.querySelector('.items') as HTMLDivElement;
    const ul = document.querySelector('.wrap-items ul') as HTMLUListElement;
    const listLi = document.querySelectorAll<HTMLElement>('.events li');
    const prev = document.querySelector('.prev') as HTMLButtonElement;
    const next = document.querySelector('.next') as HTMLButtonElement;

    const scrollThumb = document.querySelector('.scroll-thumb') as HTMLDivElement;

    listLi.forEach(li => {
      li.addEventListener('click', (event) => {
        scrollThumb.style.marginLeft = (li.offsetLeft - ul.offsetLeft) + "px";
      });
    });

    let position :number = 0;

    prev.addEventListener('click', (event) => {
      if(ul.offsetTop > 0){
        return;
      }
      position += 190;
      ul.style.marginTop = position + "px";
    });

    next.addEventListener('click', (event) => {
      if(ul.offsetTop < (-(ul.offsetHeight - 190*2))){
        return;
      }


      position -= 190;
      ul.style.marginTop = position + "px";
    });


  }
}
