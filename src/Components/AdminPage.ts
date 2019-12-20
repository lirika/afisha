import DataService from "../services/DataService";
import '../styles/adminPage.css'
import SubCategory from '../model/SubCategory'
import Event from '../model/Event'


export default class AdminPage {
    async renderPage(data: Array<SubCategory>) {
        console.log(data)
        const mainWrapper = document.createElement('div');
        mainWrapper.classList.add('main-wrapper');
        ///////////////////////// create add events form's elements//////////////////////////
        const addForm = document.createElement('form') as HTMLFormElement;
        addForm.classList.add('add-form');
        addForm.innerHTML = `<h2>Add events</h2>`;
        const select = document.createElement('select') as HTMLSelectElement;
        const btn = document.createElement('button') as HTMLButtonElement;
        btn.classList.add('button');
        const inputDiv = document.createElement('div');
        inputDiv.classList.add('input-wrapper');
        btn.innerHTML = 'send';
        inputDiv.appendChild(select);
        addForm.appendChild(inputDiv);
        addForm.appendChild(btn);
        mainWrapper.appendChild(addForm);
        ///////////////////////////////

        /////////////////////////// create add events form's elements////////////////////////

        const events = new DataService();
        const results: {} = await events.getAllEvents();

        /////////////////// render input fields////////////////////////

        Object.keys(results[0]).forEach(key => {
            if (key === 'subCategoryId') {
                return
            }
            const inputWrapper = document.createElement('div');
            inputWrapper.classList.add('field');
            const h5 = document.createElement('h5');
            h5.innerHTML = key + ':  ';
            const input = document.createElement('input');
            input.id = key;
            inputWrapper.appendChild(h5);
            inputWrapper.appendChild(input);
            inputDiv.appendChild(inputWrapper)
        });
        const erroSpan = document.createElement('span');
        erroSpan.classList.add('error');
        const successSpan = document.createElement('span');
        successSpan.classList.add('success');
        addForm.appendChild(erroSpan);
        addForm.appendChild(successSpan);
        ////////////////render options//////////////////////////////

        data.forEach(item => {
            let option = document.createElement('option') as HTMLOptionElement;
            option.innerHTML = item.title;
            option.id = 'option' + item.id;
            select.appendChild(option)
        });

        const root = document.getElementById('root') as HTMLDivElement;
        root.innerHTML = ` <div class="dark" id="dark"></div>
    <div class="burger-icon" id="burger">
      <div class="burger-line"></div>
    </div>
    <header id="header">
      <div class="navbar" id="navbar">
        <div class="all-items">
          <div class="item homePage">HOME PAGE</div>
          <div class="item TodoApp">PLAN YOUR VISIT</div>
          <div class="item eventPage">Events</div>
          <div class="item support">SUPPORT US</div>
          <div class="item aboutPage">ABOUT US</div>
          <div class="item adminPage active">ADMIN PAGE</div>
        </div>
      </div>
    </header>`;
        root.appendChild(mainWrapper);
        const optionInSelect = document.querySelectorAll('select option') as NodeListOf<HTMLOptionElement>;

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

        ///////////////////////////////// SEN Inputs values////////////////////////////////////////

        addForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            let id: string;
            optionInSelect.forEach(option => {
                if (option.selected) {
                    id = option.id.slice(6);
                    return id
                }
            });

            const inputId = (document.querySelector('#id') as HTMLInputElement).value;
            const inpTitle = (document.querySelector('#title') as HTMLInputElement).value;
            const inputStatus = (document.querySelector('#status') as HTMLInputElement).value;
            const inputGenre = (document.querySelector('#genre') as HTMLInputElement).value;
            const inputDate = (document.querySelector('#date') as HTMLInputElement).value;
            const inputTime = (document.querySelector('#time') as HTMLInputElement).value;
            const inputPlace = (document.querySelector('#place') as HTMLInputElement).value;
            const inputImg = (document.querySelector('#img') as HTMLInputElement).value;
            const inputOnline = (document.querySelector('#online') as HTMLInputElement).value;
            const inputDescr = (document.querySelector('#description') as HTMLInputElement).value;
            const inputPrice = (document.querySelector('#price') as HTMLInputElement).value;
            let value: Event = {
                id: inputId,
                title: inpTitle,
                status: inputStatus,
                genre: inputGenre,
                date: inputDate,
                time: inputTime,
                place: inputPlace,
                img: inputImg,
                online: !!inputOnline,
                description: inputDescr,
                price: inputPrice
            };
            // @ts-ignore
            this.sendEvents(id, value)
        })

    }

    async sendEvents(id: string, value: Event) {
        const dataService = new DataService();
        await dataService.sendEvents(id, value)
    }

}