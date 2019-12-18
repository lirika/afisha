import DataService from './DataService';
import EventsPage from '../Components/EventsPage';
import Event from "../model/Event";

export default async function renderEventsPage(subId: string, subTitle:string) {
  const dataService = new DataService();
  const events: Array<Event> = await dataService.getEvents(subId);
  const EvPage = new EventsPage();
  await EvPage.renderEventsList(events, subTitle);
}
