import renderCategoryPage from './services/renderCategoryPage';

window.addEventListener('load', init);

async function init() {
  await renderCategoryPage();
}


