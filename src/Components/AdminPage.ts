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
        erroSpan.classList.add('error')
        const successSpan = document.createElement('span')
        successSpan.classList.add('success')
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
          <div class="item">SUPPORT US</div>
          <div class="item aboutPage">ABOUT US</div>
          <div class="item adminPage active">ADMIN PAGE</div>
        </div>
      </div>
    </header>`;
        root.appendChild(mainWrapper);
        const optionInSelect = document.querySelectorAll('select option') as NodeListOf<HTMLOptionElement>;

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
            let value: Event = {
                id: inputId,
                title: inpTitle,
                status: inputStatus,
                genre: inputGenre,
                date: inputDate,
                time: inputTime,
                place: inputPlace,
                img: inputImg,
                online: !!inputOnline
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