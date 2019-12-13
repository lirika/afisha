import DataService from './DataService';
import CategoryPage from '../Components/CategoryPage';

export default async function renderCategoryPage() {
  const Category = new DataService();
  const categories: T[] = await Category.getCategory();
  const Page = new CategoryPage();
  await Page.renderCategory(categories);
}
