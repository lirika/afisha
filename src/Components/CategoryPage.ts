import DataService from '../services/DataService';
export default class CategoryPage {
  renderCategory(category: T[]): void {
    const menu = document.querySelector('.menu') as HTMLDivElement;
    const Category = new DataService();
    category.forEach(async (item, id) => {
      const categoryItem = document.createElement('div');
      categoryItem.classList.add('category');
      categoryItem.setAttribute('id', `${id}`);

      categoryItem.innerHTML = `
           // @ts-ignore
          <h1>${item.title}</h1>

      `;
      menu.appendChild(categoryItem);
    });

    document.querySelectorAll('.category').forEach(div => {
      div.addEventListener('click', async () => {
        const subCat: T[] = await Category.getSubCategory(div.id);
        subCat.forEach(item => {
          // @ts-ignore
          if (item.categoryId === div.id) {
            const span = document.createElement('span');
            // @ts-ignore
            span.innerHTML += item.title;
            div.appendChild(span);
          }
        });
      });
    });
  }
}
