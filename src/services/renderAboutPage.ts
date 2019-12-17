import DataService from './DataService';
import AboutPage from '../Components/AboutPage';

export default async function renderAboutPage() {
/*   const Category = new DataService();
  const categories: T[] = await Category.getCategory(); */
  const About = new AboutPage();
  await About.renderAbout();
}