import DataService from '../services/DataService';
import '../styles/categories.css';
import SubCategory from "../model/SubCategory";
import Event from '../model/Event'

export default class CategoryPage {
  renderCategory(category:Array<Event>): void {
    const root = document.querySelector('#root') as HTMLDivElement;
    root.innerHTML = `<div class="main">
                        <div class="menu-wrap">
                          <div class="menu">
                            <div class="bgr"></div>
                          </div>
                        </div>
                        <div class="changeCategories up"></div>
                        <div class="changeCategories down"></div>
                      </div>`;

    const menu = document.querySelector('.menu') as HTMLDivElement;
    const Category = new DataService();
    let first:number = 0;
    category.forEach(async (item, id) => {
      const categoryItem = document.createElement('div');
      categoryItem.classList.add('category');
        
      if(first === id){
        categoryItem.classList.add('first');  
        first += 4;
      }
      
      categoryItem.innerHTML = `
          <h1>${item.title}</h1>
          <div class="subcategories" id="sub${id}"></div>`;
      menu.appendChild(categoryItem);
    });

    document.querySelectorAll('.subcategories').forEach(async subDiv => {
        const subCat: Array<SubCategory> = await Category.getSubCategory(subDiv.id.substr(-1));
        subCat.forEach(item => {
          const span = document.createElement('span');
          span.id = `span${item.id}`;
          span.classList.add('subcategoryHomePage');
          span.innerHTML += item.title;
          subDiv.appendChild(span);
        });
    });
    const bgr = document.querySelector('.bgr') as HTMLElement;
    const main = document.querySelector('.main') as HTMLDivElement;


    let parentH1: HTMLElement | null;
    let sub: Element | null;
    let firstCategories = document.querySelectorAll('.first') as NodeListOf<HTMLElement>;

    firstCategories.forEach((firstElement) => {
      parentH1 = firstElement;
      sub = firstElement.lastElementChild;
      setSelected();
    });

    menu.addEventListener('click', async(event) => {
      const el = event.target as HTMLElement;

      if (el.tagName !== 'H1') {
        return;
      }

      if(parentH1!.classList.contains("first")){
      firstCategories.forEach(frst => {
        if(frst.offsetTop < el.offsetTop){
          parentH1 = frst;
          sub = frst.lastElementChild;
        }
      });
      }

      if (parentH1) {
        parentH1.classList.remove('selected');
        sub!.setAttribute('style', 'display: none');
      }

      let h = parentH1!.offsetHeight/2;
      let prev = parentH1;

      parentH1 = el.parentElement;
      sub = parentH1!.lastElementChild;

 /*      const Cat: T[] = await Category.getCategory(); */
      const url = category[Number(sub!.id.slice(3))].img;

      main.setAttribute(`style`, `background-image: url(${url})`);
      setSelected();

      if(parentH1!.classList.contains('first') || parentH1!.offsetTop <= prev!.offsetTop){
        bgr.setAttribute('style', `display: inline; top: ${(parentH1!.offsetTop)}px;`);
      }
      else{
        bgr.setAttribute('style', `display: inline; top: ${(parentH1!.offsetTop - h)}px;`);
      }
      
    });

    function setSelected(){
      parentH1!.classList.add('selected');
      sub!.setAttribute('style', 'display: block');
    }

    const up = document.querySelector('.up') as HTMLDivElement;
    const down = document.querySelector('.down') as HTMLDivElement;
    const arrCategories = document.querySelectorAll('.category') as NodeListOf<HTMLElement>;
    let pos: number = 0;
    let block4 :number = 0;


    up.addEventListener('click', () => {
      if (menu.offsetTop > -1 || menu.offsetTop > -441) {
        return;
      }

      block4 -= 4;

      parentH1!.classList.remove('selected');
      sub!.setAttribute('style', 'display: none');

      firstCategories.forEach((firstElement) => {
        parentH1 = firstElement;
        sub = firstElement.lastElementChild;
        setSelected();
      });
      
      let url = category[block4].img;
      main.setAttribute(`style`, `background-image: url(${url})`);
      bgr.setAttribute('style', `display: inline; top: ${arrCategories[block4].offsetTop}px;`);

      pos += 441;
      menu.style.marginTop = pos + 'px';
    });


    down.addEventListener('click', () => {
      let allHeight:number = 0;

      arrCategories.forEach((el) => {
        allHeight += el.offsetHeight;
      });
 
      if (menu.offsetTop < -allHeight + 556) {
        return;
      }

      parentH1!.classList.remove('selected');
      sub!.setAttribute('style', 'display: none');
      
      firstCategories.forEach((firstElement) => {
        parentH1 = firstElement;
        sub = firstElement.lastElementChild;
        setSelected();
      });

      block4 += 4;
      let url = category[block4].img;
      main.setAttribute(`style`, `background-image: url(${url})`);

 
      bgr.setAttribute('style', `display: inline; top: ${arrCategories[block4].offsetTop}px;`);

      pos -= 441;
      menu.style.marginTop = pos + 'px';
    }); 
  }
}
