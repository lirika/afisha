import renderCategoryPage from './services/renderCategoryPage';
import renderEventsPage from './services/renderEventsPage';
import renderBuyPage from './services/renderBuyPage';
import renderAboutPage from './services/renderAboutPage';
import renderAdminPage from "./services/renderAdminPage";

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

        // case 'button buy':
        //  await  console.log(document.querySelector('.modal'))
        //     break;
        
        case 'item aboutPage':
            await renderAboutPage();
            break;
        case 'item adminPage':
            root.innerHTML = ``;
            await renderAdminPage()
            break
    }
});