"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var DataService_1 = require("../services/DataService");
var CategoryPage = /** @class */ (function () {
    function CategoryPage() {
    }
    CategoryPage.prototype.renderCategory = function (category) {
        var _this = this;
        var menu = document.querySelector('.menu');
        var title;
        category.forEach(function (item, id) {
            title = item.title;
            var wrapper = document.createElement('div');
            // wrapper.setAttribute('id','category'+id)
            wrapper.classList.add('category', title);
            var h1 = document.createElement('h1');
            h1.innerHTML = title;
            wrapper.appendChild(h1);
            h1.setAttribute('id', 'title-category' + id);
            var subwrapper = document.createElement('div');
            subwrapper.classList.add('subcategories');
            subwrapper.setAttribute('id', 'sub' + id);
            wrapper.appendChild(subwrapper);
            menu.appendChild(wrapper);
        });
        document.querySelectorAll('.category').forEach(function (div) {
            div.addEventListener('click', function (e) { return __awaiter(_this, void 0, void 0, function () {
                var getSub, results;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (e.target != 'H1')
                                return [2 /*return*/];
                            getSub = new DataService_1["default"]();
                            return [4 /*yield*/, getSub.getSubCategory(e.target.id.slice(13))];
                        case 1:
                            results = _a.sent();
                            results.forEach(function (el) {
                                var subCategory = document.querySelector(".subcategories #sub" + el.categoryId);
                                var span = document.createElement('span');
                                span.innerHTML = el.title;
                                subCategory.appendChild(span);
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    CategoryPage.prototype.renderSubCategory = function (category) {
    };
    return CategoryPage;
}());
exports["default"] = CategoryPage;
// data.forEach(elCategory => {
//     categName = elCategory.name;
//     subNames = elCategory.categories.map(elSubcategory => elSubcategory.subname);
//     backgrImg = elCategory.backgroundImage;
//
//     let htmlStr = `<h1>${categName}</h1>
//         <div class="subcategories">`;
//
//     subNames.forEach(elSubcategoryName => {
//         htmlStr += `<span>${elSubcategoryName}</span>
//                 <span>/</span>`;
//     });
//
//     htmlStr = htmlStr.slice(0, htmlStr.length - 14);
//     htmlStr += `</div>`;
//
//     let div = document.createElement('div');
//     div.classList.add('category', categName);
//     div.innerHTML = htmlStr;
//
//     menu.append(div);
// });
// }
//
// fillMenu();
//
// let parentH1;
// let sub;
//
// menu.addEventListener('click', function(event) {
//     let el = event.target;
//
//     if (el.tagName != 'H1') return;
//
//     if (parentH1) {
//         parentH1.classList.remove('selected');
//         sub.setAttribute('style', 'display: none');
//     }
//
//     parentH1 = el.parentElement;
//     sub = parentH1.lastElementChild;
//
//     let url = data.find(el => el.name == parentH1.className.split(' ')[1]).backgroundImage;
//
//     main.setAttribute(`style`, `background-image: url(${url})`);
//
//     parentH1.classList.add('selected');
//
//     let topBgr = menu.offsetTop + parentH1.offsetTop;
//     sub.setAttribute('style', 'display: block');
//     bgr.setAttribute(
//         'style',
//         ` display: inline;
//                                 top: ${topBgr}px;`,
//     );
