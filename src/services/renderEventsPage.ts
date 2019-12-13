import DataService from './DataService';
import EventsPage from '../Components/EventsPage';

export default async function renderEventsPage(subId: string) {
  const dataService = new DataService();
  const events: T[] = await dataService.getEvents(subId);
   
  /* alert(subId); */
/*   alert(events[0].title); */
  const EvPage = new EventsPage();
  await EvPage.renderEventsList(events);

}