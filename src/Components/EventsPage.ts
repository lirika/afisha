import DataService from '../services/DataService';
import '../styles/events.css';

export default class EventsPage {
  renderEventsList(events: T[]) {
    /* alert(events[0].title); */
    const root = document.querySelector('#root') as HTMLDivElement;
    root.innerHTML = `    <div class="dark" id="dark"></div>
    <div class="burger-icon" id="burger">
      <div class="burger-line"></div>
    </div>
    <header id="header">
      <div class="navbar" id="navbar">
        <div class="all-items">
          <div class="item">CONCERTS & TICKETS</div>
          <div class="item">PLAN YOUR VISIT</div>
          <div class="item">SIMPHANIC</div>
          <div class="item">SUPPORT US</div>
          <div class="item">ABOUT US</div>
          <div class="item">DONATE</div>
        </div>
      </div>
    </header>

    <div class="event-info">
      <div class="info">
        <div class="main-info">
          <div class="title">
            Star Wars
          </div>
          <div class="description">
            Movie about Jedis
          </div>
        </div>
        <div class="data-time-location">
          7:30 PM, Silver Screen, Minsk
        </div>
        <div class="button-all">
          <div class="button buy">Buy now</div>
          <div class="button more-info">More info</div>
        </div>
      </div>
    </div>

    <div class="scroll">
      <div class="scroll-thumb"></div>
    </div>
<!--////////////  items   ///////////////  -->

    <div class="wrap-items">
        <div class="items">
            <ul class="events">
              <li class="e">
                    <div class="event-type">Title1</div>
                    <div class="event-description">
                     <b>title</b><br> description
                    </div>
                    <div class="event-date">data</div>
                </li>

              <li>
                <div class="event-type">Title2</div>
                <div class="event-description">
                 <b>title</b><br> description
                </div>
                <div class="event-date">data</div>
              </li>

              <li>
                <div class="event-type">Title3</div>
                <div class="event-description">
                  <b>title</b><br> description
                </div>
                <div class="event-date">data</div>
              </li>

              <li>
                <div class="event-type">Title4</div>
                <div class="event-description">
                  <b>title</b><br> description
                </div>
                <div class="event-date">data</div>
              </li>

              <li>
                <div class="event-type">Title5</div>
                <div class="event-description">
                  <b>title</b><br> description
                </div>
                <div class="event-date">data</div>
              </li>

            </ul>
        </div>
        
      <button class="arrow prev">⮝</button>
      <button class="arrow next">⮟</button>
    </div>
    `;

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
