import DataService from './DataService'
import CategoryPage from "./../Components/CategoryPage";
import './../styles/categories.css'

window.addEventListener('load', showData)


export default async function showData() {
    const Category = new DataService()
    const categories:Array<object> = await Category.getCategory()
    const Page = new CategoryPage()
    await Page.renderCategory(categories)

    const subcategory:Array<object> = await Category.getSubCategory(1);
    await Page.renderSubCategory(subcategory)
}

// function renderCategory(categories:Array<object>) {
//     const menu = document.querySelector('.menu') as HTMLDivElement;
//     categories.forEach(category => {
//         menu.innerHTML += `
//         <div class="category">${category.title}</div>
//         `

//
//     })
//
// }


