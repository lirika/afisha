import Category from './getData';
var getCategory = new Category();
getCategory.getData('categories').then(function (data) { return renderCategory(data); });
export default function renderCategory(data) {
    var main = document.querySelector('.main');
    var menu = document.querySelector('.menu');
    var bgr = document.querySelector('.bgr');
    console.log(data);
}
//# sourceMappingURL=renderCategory.js.map