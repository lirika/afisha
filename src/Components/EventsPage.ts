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
          <div class="item homePage">HOME PAGE</div>
          <div class="item">CONCERTS & TICKETS</div>
          <div class="item">SIMPHANIC</div>
          <div class="item">SUPPORT US</div>
          <div class="item">ABOUT US</div>
          <div class="item">DONATE</div>
        </div>
      </div>
    </header>

    <div class="event-info">
      <div class="info">
      </div>
    </div>
     
    <div class="scroll">
      <div class="scroll-thumb"></div>
    </div>
<!--////////////  items   ///////////////  -->

    <div class="wrap-items">
        <div class="items">
            <ul class="events">

            </ul>
        </div>
        
      <button class="arrow prev">⮝</button>
      <button class="arrow next">⮟</button>
    </div>
    `;

////////////////////// code for load data to blocks /////////////////////////
        const ul = document.querySelector('.wrap-items ul') as HTMLUListElement;
        events.forEach((event) => {
            let liHTMLelem = document.createElement('li');
            liHTMLelem.id = `li${event.id}`;
            let liContent: string = `<div class="event-type">${event.status}</div>
                                <div class="event-description">
                                <b>${event.title}</b><br>${event.genre}
                                </div>
                                <div class="event-date">
                                ${event.date}
                                </div>
                            `;
            liHTMLelem.innerHTML = liContent;
            ul.appendChild(liHTMLelem);
        });


////////////////////////////////////////////////////////////////////////////

        const burger = document.getElementById('burger') as HTMLDivElement;
        const header: HTMLElement = document.getElementById('header');
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


        const count: number = 4;

        const wrap = document.querySelector('.wrap-items') as HTMLDivElement;
        const items = document.querySelector('.items') as HTMLDivElement;
        const listLi = document.querySelectorAll<HTMLElement>('.events li');
        const prev = document.querySelector('.prev') as HTMLButtonElement;
        const next = document.querySelector('.next') as HTMLButtonElement;

        const scrollThumb = document.querySelector('.scroll-thumb') as HTMLDivElement;

        listLi.forEach(li => {
            li.addEventListener('click', (event) => {
                scrollThumb.style.marginLeft = (li.offsetLeft - ul.offsetLeft) + "px";

                let urlImg = (events[Number(li.id.slice(2))].img);
                // document.body.setAttribute(`style`, `background: linear-gradient(0deg, black, transparent), url(${urlImg})`);
                document.body.style.background = `linear-gradient(to bottom, transparent, rgba(0,0,0,.99) 75%), url(${urlImg})`
                document.body.style.backgroundRepeat = 'no-repeat';
                document.body.style.backgroundSize = 'cover'
            });
        });

        let position: number = 0;

        prev.addEventListener('click', (event) => {
            if (ul.offsetTop > 0) {
                return;
            }
            position += 190;
            ul.style.marginTop = position + "px";
        });

        next.addEventListener('click', (event) => {
            if (ul.offsetTop < (-(ul.offsetHeight - 190 * 2))) {
                return;
            }


            position -= 190;
            ul.style.marginTop = position + "px";
        });


    }
}
