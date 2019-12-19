import renderCategoryPage from './services/renderCategoryPage';
import renderEventsPage from './services/renderEventsPage';
import renderAboutPage from './services/renderAboutPage';
import renderAdminPage from "./services/renderAdminPage";
import TodoApp from "./Components/TodoApp";
import renderSupportUsPage from "./services/renderSupportUsPage";

window.addEventListener('load', init);

async function init() {
/*     await renderEventsPage(1, "ht"); */
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
        case 'item support':
            root.innerHTML = ``;
            await renderSupportUsPage()
            break;
        case 'item eventPage':
            root.innerHTML = ``;
            await renderEventsPage('0', 'rock');
            break;
        case 'item TodoApp':
            const todo = new TodoApp();
            todo.render();
            break;
        case 'item aboutPage':
            await renderAboutPage();
            break;
        case 'item adminPage':
            root.innerHTML = ``;
            await renderAdminPage();
            break
        case 'item homePage':

        case 'btns_more':
            init();
            break;


        // case 'button buy':
        //  await  console.log(document.querySelector('.modal'))
        //     break;
        

    }
});