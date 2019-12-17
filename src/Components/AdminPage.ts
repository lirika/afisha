import DataService from "../services/DataService";
import '../styles/adminPage.css'

export default class AdminPage {

  async renderPage(data: Array<object>) {
        const form = document.createElement('form') as HTMLFormElement;
        const select = document.createElement('select') as HTMLSelectElement;
        const btn = document.createElement('button') as HTMLButtonElement
        const inputDiv = document.createElement('div')
        inputDiv.classList.add('input-wrapper')


        const events = new DataService()
        const results = await events.getAllEvents();


        btn.innerHTML = 'send'
        form.appendChild(select)
        form.appendChild(inputDiv)
        form.appendChild(btn)

      Object.keys(results[0]).forEach(key => {
          if (key === 'subCategoryId') {
              return
          }
          const inputWrapper = document.createElement('div');
          const h5 = document.createElement('h5');
          h5.innerHTML = key;
          const input = document.createElement('input');
          input.id = key;
          inputWrapper.appendChild(h5);
          inputWrapper.appendChild(input);
          inputDiv.appendChild(inputWrapper)
          inputDiv.appendChild(input)
      })

        data.forEach(item => {
            let option = document.createElement('option') as HTMLOptionElement;
            option.innerHTML = item.title;
            option.id = 'option' + item.id
            select.appendChild(option)
        })

        const root = document.getElementById('root') as HTMLDivElement;
        root.innerHTML = ` <div class="dark" id="dark"></div>
    <div class="burger-icon" id="burger">
      <div class="burger-line"></div>
    </div>
    <header id="header">
      <div class="navbar" id="navbar">
        <div class="all-items">
          <div class="item homePage">HOME PAGE</div>
          <div class="item">CONCERTS & TICKETS</div>
          <div class="item ">Events</div>
          <div class="item">SUPPORT US</div>
          <div class="item">ABOUT US</div>
          <div class="item adminPage active">ADMIN PAGE</div>
        </div>
      </div>
    </header>`
        root.appendChild(form)
        const optionInSelect = document.querySelectorAll('select option') as NodeList;

        form.addEventListener('submit', async (e) => {
            e.preventDefault()
            var id;
            optionInSelect.forEach(option => {
                if (option.selected) {
                     id = option.id.slice(6);
                     return id
                }
            })

          var inputId = document.querySelector('#id').value
          var inpTitle = document.querySelector('#title').value
          var inputStatus = document.querySelector('#status').value
          var inputGenre = document.querySelector('#genre').value
          var inputDate = document.querySelector('#date').value
          var inputTime = document.querySelector('#time').value
          var inputPlace = document.querySelector('#place').value
          var inputImg = document.querySelector('#img').value
          var inputOnline = document.querySelector('#online').value
            let value = {
                id: inputId,
                title: inpTitle,
                status: inputStatus,
                genre: inputGenre,
                date: inputDate,
                time: inputTime,
                place: inputPlace,
                img: inputImg,
                online:inputOnline
            }
            this.sendEvents(id,value)
        })

    }

    async sendEvents(id: string, value: string) {
        const dataService = new DataService()
        const result = await dataService.sendEvents(id, value)
    }

}