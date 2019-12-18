import DataService from './DataService';
import CategoryPage from '../Components/CategoryPage';
import Event from "../model/Event";


export default async function renderCategoryPage() {
  const Category = new DataService();
  const categories: Array<Event> = await Category.getCategory();
  const Page = new CategoryPage();
  await Page.renderCategory(categories);
}
