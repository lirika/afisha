import Categories from './DataService'
import ICategory from '../model/category'
import './../styles/categories.css'

window.addEventListener('load', showData)


export default async function showSubCategory() {
    const getCategory = new Categories()
    const categories:Array<object> = await getCategory.getData('subcate')
    console.log(categories)
    await renderCategory(categories)
}

function renderCategory(categories:Array<object>) {
    const menu = document.querySelector('.menu') as HTMLDivElement;
    categories.forEach(category => {

        menu.innerHTML += `
        <div class="category">${category.title}</div>
        `

    })

}
