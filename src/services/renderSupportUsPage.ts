import SupportUs from "../Components/SupportUs";
import DataService from '../services/DataService'
import Contacts from "../model/Contacts";
export default async function renderSupportUsPage() {
    const dataService = new DataService();
    const page = new SupportUs();
    const data:Contacts = await dataService.getContacts();
    page.render(data)
}