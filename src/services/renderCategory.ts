import DataService from './DataService';
import CategoryPage from './../Components/CategoryPage';
import './../styles/categories.css';

window.addEventListener('load', showData);

export default async function showData() {
  const Category = new DataService();
  const categories: T[] = await Category.getCategory();
  const Page = new CategoryPage();
  await Page.renderCategory(categories);
}
