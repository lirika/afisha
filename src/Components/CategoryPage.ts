import DataService from '../services/DataService';
export default class CategoryPage {
  renderCategory(category: T[]): void {
    const menu = document.querySelector('.menu') as HTMLDivElement;
    const Category = new DataService();
    category.forEach(async (item, id) => {
      const categoryItem = document.createElement('div');
      categoryItem.classList.add('category');
      categoryItem.innerHTML = `
          <h1>${item.title}</h1>
          <div class="subcategories" id="sub${id}"></div>`;
      menu.appendChild(categoryItem);
    });

    document.querySelectorAll('.subcategories').forEach(subDiv => {
      (async () => {
        const subCat: T[] = await Category.getSubCategory(subDiv.id.substr(-1));
        subCat.forEach(item => {
          const span = document.createElement('span');
          span.innerHTML += item.title;
          subDiv.appendChild(span);
        });
      })();
    });

    const parentH1;
    const sub;
    const bgr = document.querySelector('.bgr');
    const main = document.querySelector('.main') as HTMLDivElement;
    menu.addEventListener('click', async event => {
      const el = event.target;

      if (el.tagName !== 'H1') {
        return;
      }

      if (parentH1) {
        parentH1.classList.remove('selected');
        sub.setAttribute('style', 'display: none');
      }

      parentH1 = el.parentElement;
      sub = parentH1.lastElementChild;

      const Cat: T[] = await Category.getCategory();
      const url = Cat[Number(sub.id.substr(-1))].img;

      main.setAttribute(`style`, `background-image: url(${url})`);

      parentH1.classList.add('selected');

      const topBgr = menu.offsetTop + parentH1.offsetTop;
      sub.setAttribute('style', 'display: block');
      bgr.setAttribute(
        'style',
        ` display: inline;
                                  top: ${topBgr}px;`,
      );
    });
  }
}
