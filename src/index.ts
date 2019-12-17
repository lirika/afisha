import renderCategoryPage from './services/renderCategoryPage';
import renderEventsPage from './services/renderEventsPage';
import renderBuyPage from './services/renderBuyPage';
<<<<<<< HEAD
import renderAboutPage from './services/renderAboutPage';
=======
import renderAdminPage from "./services/renderAdminPage";
>>>>>>> 01e94cea7b827e3390c91b3ffc8f9ae851c136a9

window.addEventListener('load', init);

async function init() {
    await renderCategoryPage();
}

const root = document.querySelector('#root') as HTMLDivElement;

root.addEventListener('click', async event => {
    let target = event.target as HTMLElement;

    switch (target.className) {
        case 'subcategoryHomePage':
            let subIdStr: string = target.id.slice(4);
            root.innerHTML = ``;
            await renderEventsPage(subIdStr, target.innerHTML);
            break;

     
        case 'item homePage':
        case 'btns_more':
            init();
            break;

        case 'button buy':
            let buttonBuyId: string = target.id.slice(3);
            await renderBuyPage(buttonBuyId);
            break;
        
        case 'item aboutPage':
            await renderAboutPage();
            break;
        case 'item adminPage':
            root.innerHTML = ``;
            await renderAdminPage()
            break
    }
});