import renderCategoryPage from './services/renderCategoryPage';
import renderEventsPage from './services/renderEventsPage';

window.addEventListener('load', init);

async function init() {
  await renderCategoryPage();
/*  await renderEventsPage(); */
}

const root = document.querySelector('#root') as HTMLDivElement;

root.addEventListener('click', async(event) => {
  let target = event.target as HTMLElement; 

  if(target.tagName != 'SPAN')
    return;

  let subIdStr:string = target.id.slice(4);
  root.innerHTML = ``;

  await renderEventsPage(subIdStr);
});


