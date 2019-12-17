import '../styles/events.css';

export default class EventsPage {
  renderEventsList(events: T[], subTitle:string) {
    const defaultItem = events[0]

    document.body.style.background = `linear-gradient(to bottom, rgba(0,0,0,.0), rgba(0,0,0,.99) 75%),linear-gradient(to top,  rgba(0,0,0,.0), rgba(0,0,0,.5) 90%)`;
    /////// set base Background ////
    const defaultBg = events[0].img;
    /////// set base Template //////
    if (defaultItem.online) {
      var defaultDate = `<div class="data-time-location">${defaultItem.date}</div>`;
      var defaultButtons = `<div id="watch${events[0].id}" class="button watch">Watch now</div>`;
    } else {
      defaultDate = `<div class="data-time-location">
                              ${defaultItem.time}, ${defaultItem.place}<br>
                              ${defaultItem.date}
                            </div>`;
      defaultButtons = ` 
                                 <div id="buy${events[0].id}" class="button buy">Buy now</div>
                                 <div id="more-info${events[0].id}" class="button more-info">More info</div>
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
          <div class="item aboutPage">ABOUT US</div>
          <div class="item">DONATE</div>
        </div>
      </div>
    </header>
    <div class="screen"><img src=${defaultBg}  alt=img class="bg-event-img" style="display: block; width: 100%; height: 100%"></div>

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
    const screen = document.querySelector('.screen')
    events.forEach((event) => {
      let liHTMLelem = document.createElement('li');
      liHTMLelem.id = `li${event.id}`;
      liHTMLelem.classList.add('event-item')
      let liContent :string = `<div class="event-type">`;
      if(!event.online){
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
     liContent += `<img class="bg-event-img" alt=img src=${event.img}>`

      liHTMLelem.innerHTML = liContent;
      ul.appendChild(liHTMLelem);
    });


/////////////////  buttons visibility  /////////////////

    let btnUp = document.querySelector('.prev') as HTMLDivElement;
    let btnDown = document.querySelector('.next') as HTMLDivElement;
    let liArray :any = ul.children;

    (function buttonsVisibility(){
      if(events.length >= 5){
        visibility('visible');
      }else{
        if(isNot4InRow()){
          visibility('visible');
        }

        window.addEventListener('resize', () => {
          if(isNot4InRow()){
              visibility('visible');
          }
          else{
            if(ul.offsetTop < 0){
              ul.style.marginTop = 0 + 'px';
            }
            visibility('hidden');
          }
        });
      }
    })();

    function isNot4InRow():boolean{
      let b:boolean = false;

      for(let i=1; i < liArray.length; i++)
        if(liArray[i].offsetLeft === liArray[0].offsetLeft){
          b = true;
          return b;
        }
      return b;
    }

    function visibility(val:string){
      btnUp.style.visibility = val;
      btnDown.style.visibility = val;
    }

    //////////////////////////////////

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

    const infoWrap = document.querySelector('.event-info') as HTMLDivElement;
    const listLi = document.querySelectorAll<HTMLElement>('.events li');
    const prev = document.querySelector('.prev') as HTMLButtonElement;
    const next = document.querySelector('.next') as HTMLButtonElement;
    const scrollThumb = document.querySelector('.scroll-thumb') as HTMLDivElement;

    listLi.forEach(li => {
      li.addEventListener('click', async event => {
        scrollThumb.style.marginLeft = li.offsetLeft - ul.offsetLeft + 'px';
        let information = events[Number(li.id.slice(2))];
        let urlImg = events[Number(li.id.slice(2))].img;
        screen.innerHTML = `<img src=${urlImg} alt=img class="bg-event-img" style="display: block; width: 100%; height: 100%">`

        /////// Change info by click on event item///////////

        infoWrap.innerHTML = `
                      <div class="info">
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
</div>
                `;
        const dateWrap = document.querySelector('.data-time-location') as HTMLDivElement;
        const buttonWrapper = document.querySelector('.button-all') as HTMLDivElement;
        if (information.online) {
          dateWrap.innerHTML = information.date;
          buttonWrapper.innerHTML = `<div id="watch${li.id.slice(2)}" class="button watch">Watch now</div>`;
        } else {
          dateWrap.innerHTML = `${information.time}, ${information.place}<br>
                                                                                    ${information.date}`;
          buttonWrapper.innerHTML = ` 
                                 <div id="buy${li.id.slice(2)}" class="button buy">Buy now</div>
                                 <div id="more-info${li.id.slice(2)}" class="button more-info">More info</div>
                                `;
        }

      });
    });



    let position: number = 0;

    prev.addEventListener('click', event => {
      if (ul.offsetTop > 0 || ul.offsetTop > -188) {
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
