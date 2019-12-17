import AdminPage from '../Components/AdminPage'
import DataService from "../services/DataService";

export default async function renderAdminPage() {
    const dataService = new DataService()
    const events:Array<object> = await dataService.getAllSubCategory()
    const Admin = new AdminPage();
     await Admin.renderPage(events)
}