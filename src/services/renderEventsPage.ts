import DataService from './DataService';
import EventsPage from '../Components/EventsPage';

export default async function renderEventsPage(/* id */) {
/*   const Category = new DataService();
  const categories: T[] = await Category.getCategory();
 /* const Page = new CategoryPage();
  await Page.renderCategory(categories); */

  const EvPage = new EventsPage();
  await EvPage.renderEventsList(/* id */);

}