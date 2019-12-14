import '../styles/events.css';

export default class EventsPage {
  renderEventsList(events: T[], subTitle:string) {
    const defaultItem = events[0];

    /////// set base Background ////
    const defaultBg = events[0].img;
    document.body.style.background = `linear-gradient(to bottom, transparent, rgba(0,0,0,.99) 75%), linear-gradient(to top, transparent, rgba(0,0,0,.5) 90%) ,url(${defaultBg})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

    /////// set base Template //////

    if (defaultItem.online) {
      var defaultDate = `<div class="data-time-location">${defaultItem.date}</div>`;
      var defaultButtons = `<div class="button watch">Watch now</div>`;
    } else {
      defaultDate = `<div class="data-time-location">
                              ${defaultItem.time}, ${defaultItem.place}<br>
                              ${defaultItem.date}
                            </div>`;
      defaultButtons = ` 
                                 <div class="button buy">Buy now</div>
                                 <div class="button more-info">More info</div>
                                `;
    }
    const defaultTemplate = `
                         <div class="main-info">
                          <div class="title">
                            ${defaultItem.title}
                          </div>
                          <div class="description">
                            ${defaultItem.genre}
                          </div>
                           ${defaultDate}
                     </div>
                      <div class="button-all">
                      ${defaultButtons}
</div>
        `;

    const root = document.querySelector('#root') as HTMLDivElement;
    root.innerHTML = ` 
    <div class="dark" id="dark"></div>
    <div class="burger-icon" id="burger">
      <div class="burger-line"></div>
    </div>
    <header id="header">
      <div class="navbar" id="navbar">
        <div class="all-items">
          <div class="item homePage">HOME PAGE</div>
          <div class="item">CONCERTS & TICKETS</div>
          <div class="item active">${subTitle}</div>
          <div class="item">SUPPORT US</div>
          <div class="item">ABOUT US</div>
          <div class="item">DONATE</div>
        </div>
      </div>
    </header>

    <div class="event-info">
      <div class="info">
      ${defaultTemplate}
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
        
        <div class="arrow prev"></div>
        <div class="arrow next"></div>
    </div>
    `;

    ////////////////////// code for load data to blocks /////////////////////////
    const ul = document.querySelector('.wrap-items ul') as HTMLUListElement;
    events.forEach((event) => {
      let liHTMLelem = document.createElement('li');
      liHTMLelem.id = `li${event.id}`;
      let liContent :string = `<div class="event-type">`;
  
      if(event.hasOwnProperty("place")){
        liContent += `<div class="colorStatus">${event.status}</div>`;
      }   
      else{
        liContent += `<div class="circle"></div>${event.status}`;
      }                        
  
      liContent +=`</div>
                    <div class="event-description">
                    <b>${event.title}</b><br>${event.genre}
                    </div>
                    <div class="event-date">
                    <div class="date">${event.date}</div>`;
  
     if(event.hasOwnProperty("place")){
      liContent += `<div class="place-time">${event.time}, ${event.place}</div>`;
     }
                  
     liContent +=  `</div>`;
  
      liHTMLelem.innerHTML = liContent;
      ul.appendChild(liHTMLelem);
    });

    ////////////////////////////////////////////////////////////////////////////

    const burger = document.getElementById('burger') as HTMLDivElement;
    const header = document.getElementById('header') as HTMLElement;
    const dark = document.getElementById('dark') as HTMLDivElement;
    const navbar = document.getElementById('navbar') as HTMLDivElement;
    const subTitleActive = document.querySelector('.active') as HTMLDivElement;

    let burgerActive = false;

    function setNavbar() {
      let selected: HTMLElement = subTitleActive;
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
      if (!burgerActive) {
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

    // const count: number = 4;
    const infoWrap = document.querySelector('.info') as HTMLDivElement;
    // const wrap = document.querySelector('.wrap-items') as HTMLDivElement;
    // const items = document.querySelector('.items') as HTMLDivElement;
    const listLi = document.querySelectorAll<HTMLElement>('.events li');
    const prev = document.querySelector('.prev') as HTMLButtonElement;
    const next = document.querySelector('.next') as HTMLButtonElement;

    const scrollThumb = document.querySelector('.scroll-thumb') as HTMLDivElement;
    listLi.forEach(li => {
      li.addEventListener('click', async event => {
        scrollThumb.style.marginLeft = li.offsetLeft - ul.offsetLeft + 'px';
        let information = events[Number(li.id.slice(2))];
        let urlImg = events[Number(li.id.slice(2))].img;
        document.body.style.background = `linear-gradient(to bottom, transparent, rgba(0,0,0,.99) 75%),linear-gradient(to top, transparent, rgba(0,0,0,.5) 90%) , url(${urlImg})`;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';

        /////// Change info by click on event item///////////

        infoWrap.innerHTML = `
                       <div class="main-info">
                          <div class="title">
                            ${information.title}
                          </div>
                          <div class="description">
                            ${information.genre}
                          </div>
                           <div class="data-time-location">
                              ${information.time}, ${information.place}<br>
                              ${information.date}
                            </div>
                     </div>
                      <div class="button-all"></div>
                `;
        const dateWrap = document.querySelector('.data-time-location') as HTMLDivElement;
        const buttonWrapper = document.querySelector('.button-all') as HTMLDivElement;
        if (information.online) {
          dateWrap.innerHTML = information.date;
          buttonWrapper.innerHTML = '<div class="button watch">Watch now</div>';
        } else {
          dateWrap.innerHTML = `${information.time}, ${information.place}<br>
                                                                                    ${information.date}`;
          buttonWrapper.innerHTML = ` 
                                 <div class="button buy">Buy now</div>
                                 <div class="button more-info">More info</div>
                                `;
        }
      });
    });

    let position: number = 0;

    prev.addEventListener('click', event => {
      if (ul.offsetTop > 0) {
        return;
      }
      position += 190;
      ul.style.marginTop = position + 'px';
    });

    next.addEventListener('click', event => {
      if (ul.offsetTop < -(ul.offsetHeight - 190 * 2)) {
        return;
      }
      position -= 190;
      ul.style.marginTop = position + 'px';
    });
  }
}
