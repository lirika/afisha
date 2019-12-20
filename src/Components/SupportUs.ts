import Contacts from "../model/Contacts";
import '../styles/supportUs.css';

export default class SupportUs {
    render(data: Contacts) {
        const root = document.querySelector('#root');
        root!.innerHTML = `
            <div class="dark" id="dark"></div>
        <div class="burger-icon" id="burger">
          <div class="burger-line"></div>
        </div>
        <header id="header">
          <div class="navbar" id="navbar">
            <div class="all-items">
              <div class="item homePage">HOME PAGE</div>
              <div class="item TodoApp">PLAN YOUR VISIT</div>
              <div class="item eventPage">Events</div>
              <div class="item support active">SUPPORT US</div>
              <div class="item aboutPage">ABOUT US</div>
              <div class="item adminPage">ADMIN PAGE</div>
            </div>
          </div>
        </header>
        <div class="contentSupport">
        <form class="formSupport">
        <div class="titleSupport"> Support Us</div>
            <label for="name">Your name</label>
            <input type="text" name="name" class="input">
             <label for="name">Your last name</label>
            <input type="text" name="last-name" class="input">
             <label for="name">Your email</label>
            <input type="email" name="email" class="input">
            <input type="submit" class ="button" value="send">
         </form>
         <div class="contacts-wrapper">
         <div class="titleSupport"> Our contacts</div>
         <p class="contacts"><b>Phone:</b> ${data.phone}</p>
         <p class="contacts"><b>Email:</b> ${data.email}</p>
         <p class="contacts"><b>Address:</b> ${data.address}</p>
    </div>
</div>
        `

        const burger = document.getElementById('burger') as HTMLDivElement;
        const header = document.getElementById('header') as HTMLElement;
        const dark = document.getElementById('dark') as HTMLDivElement;
        const navbar = document.getElementById('navbar') as HTMLDivElement;
        const subTitleActive = document.querySelector('.active') as HTMLDivElement;

        let burgerActive = false;

        function setNavbar() {
            let selected: HTMLElement = subTitleActive;
            navbar.addEventListener('click', (ev) => {
                const targetItem = ev.target as HTMLElement;
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
    }


}