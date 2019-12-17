import renderCategoryPage from './services/renderCategoryPage';
import renderEventsPage from './services/renderEventsPage';
import renderBuyPage from './services/renderBuyPage';
import renderAdminPage from "./services/renderAdminPage";

window.addEventListener('load', init);

async function init() {
    await renderCategoryPage();
    /* await renderEventsPage(1, "classic"); */
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
            init();
            break;

        case 'button buy':
            let buttonBuyId: string = target.id.slice(3)
            await renderBuyPage()
            break;
        case 'item adminPage':
            root.innerHTML = ``;
            await renderAdminPage()
            break
    }
});