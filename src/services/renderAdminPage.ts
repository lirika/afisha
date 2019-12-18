import AdminPage from '../Components/AdminPage'
import DataService from "../services/DataService";
import SubCategory from "../model/SubCategory";

export default async function renderAdminPage() {
    const dataService = new DataService();
    const events:Array<SubCategory> = await dataService.getAllSubCategory();
    const Admin = new AdminPage();
     await Admin.renderPage(events)
}