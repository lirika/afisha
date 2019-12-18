import '../styles/events.css';

export default class EventsPage {
  renderEventsList(events: T[], subTitle:string) {
  let currentEvent = events[0]; 

let payBlock: string = `
<div class="row">
            <div class="col-75">
              <div class="container-form">
                <form action="/action_page.php">
          
                  <div class="row">
                    <div class="col-50">
                      <h3>Billing Address</h3>
                      <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                      <input type="text" id="fname" name="firstname" placeholder="John M. Doe">
                      <label for="email"><i class="fa fa-envelope"></i> Email</label>
                      <input type="text" id="email" name="email" placeholder="john@example.com">
                      <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                      <input type="text" id="adr" name="address" placeholder="542 W. 15th Street">
                      <label for="city"><i class="fa fa-institution"></i> City</label>
                      <input type="text" id="city" name="city" placeholder="New York">
          
                      <div class="row">
                        <div class="col-50">
                          <label for="state">State</label>
                          <input type="text" id="state" name="state" placeholder="NY">
                        </div>
                        <div class="col-50">
                          <label for="zip">Zip</label>
                          <input type="text" id="zip" name="zip" placeholder="10001">
                        </div>
                      </div>
                    </div>
          
                    <div class="col-50">
                      <h3>Payment</h3>
                      <label for="fname">Accepted Cards</label>
                      <div class="icon-container">
                        <i class="fa fa-cc-visa" style="color:navy;"></i>
                        <i class="fa fa-cc-amex" style="color:blue;"></i>
                        <i class="fa fa-cc-mastercard" style="color:red;"></i>
                        <i class="fa fa-cc-discover" style="color:orange;"></i>
                      </div>
                      <label for="cname">Name on Card</label>
                      <input type="text" id="cname" name="cardname" placeholder="John More Doe">
                      <label for="ccnum">Credit card number</label>
                      <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
                      <label for="expmonth">Exp Month</label>
                      <input type="text" id="expmonth" name="expmonth" placeholder="September">
          
                      <div class="row">
                        <div class="col-50">
                          <label for="expyear">Exp Year</label>
                          <input type="text" id="expyear" name="expyear" placeholder="2018">
                        </div>
                        <div class="col-50">
                          <label for="cvv">CVV</label>
                          <input type="text" id="cvv" name="cvv" placeholder="352">
                        </div>
                      </div>
                    </div>
          
                  </div>
                  <label>
                    <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing
                  </label>
                  <input type="submit" value="Continue to checkout" class="btn">
                </form>
              </div>
            </div>
          </div>
`;


  /*   let proceModal:number; */
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
          <div class="item adminPage">ADMIN PAGE</div>
        </div>
      </div>
    </header>
    <div class="screen"><img src=${defaultBg}  alt=img class="bg-event-img" style="display: block; width: 100%; height: 100%"></div>

    <div class="event-info">
    
      <div class="container">
        <div class="modal">
            <div class="btn-close">close</div>
            <div class = "infoEventModal">
            
              <div class="info-modal">
                <strong>${events[0].title}</strong><br>
                ${events[0].date}
                <div class="price">Price: 12</div>
              </div>

            </div>
            <div class = "payModal">${payBlock}</div>
        </div>
      </div>

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
    const screen = document.querySelector('.screen');
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

    let  buyButton: any;
    let moreButton: any;


    listLi.forEach(li => {
      li.addEventListener('click', async event => {
        scrollThumb.style.marginLeft = li.offsetLeft - ul.offsetLeft + 'px';
        let information = events[Number(li.id.slice(2))];
        let urlImg = events[Number(li.id.slice(2))].img;
        screen.innerHTML = `<img src=${urlImg} alt=img class="bg-event-img" style="display: block; width: 100%; height: 100%">`

        /////// Change info by click on event item///////////

        infoWrap.innerHTML = `
                      <div class="container">
                        <div class="modal">
                            <div class="btn-close">close</div>
                            <div class = "infoEventModal">
                                <div class="info-modal">
                                  <strong>${information.title}</strong><br>
                                  ${information.date}
                                  <div class="price">Price: 12</div>
                                </div>
                            </div>
                            <div class = "payModal">${payBlock}</div>
                        </div>
                      </div>

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
          buttonWrapper.innerHTML = ``;
          buttonWrapper.innerHTML = `<div id="watch${li.id.slice(2)}" class="button watch">Watch now</div>`;
        } else {
          dateWrap.innerHTML = `${information.time}, ${information.place}<br>
                                                                                    ${information.date}`;
         /*  buttonWrapper.innerHTML = ` 
                                 <div id="buy${li.id.slice(2)}" class="button buy">Buy now</div>
                                 <div id="more-info${li.id.slice(2)}" class="button more-info">More info</div>
                                `; */
          buyButton = document.createElement('div');
          buyButton.id = `buy${li.id.slice(2)}`;
          buyButton.classList.add(`button`);
          buyButton.classList.add(`buy`);
          buyButton.innerHTML = `Buy now`;

          moreButton = document.createElement('div');
          moreButton.id = `buy${li.id.slice(2)}`;
          moreButton.classList.add(`button`);
          moreButton.classList.add(`more-info`);
          moreButton.innerHTML = `More info`;
          buttonWrapper.innerHTML = ``;
          buttonWrapper.append(buyButton, moreButton);
        }

        currentEvent = information;
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



  let rootEvent = document.querySelector("#root") as HTMLDivElement;

    rootEvent.addEventListener('click', (event) => {
      let container = document.querySelector('.container')  as HTMLDivElement;
      let modal = document.querySelector('.modal')  as HTMLDivElement;

      let target = event.target as HTMLElement;

      if(target.classList.contains('buy')){
        container.classList.add('modal-open');

      }
      else if(target.classList.contains('btn-close')){
        container.classList.remove('modal-open');
      }
    });
  }
}



