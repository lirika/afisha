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
require("../styles/categories.css");
var CategoryPage = /** @class */ (function () {
    function CategoryPage() {
    }
    CategoryPage.prototype.renderCategory = function (category) {
        var _this = this;
        var root = document.querySelector('#root');
        root.innerHTML = "<div class=\"main\">\n                        <div class=\"menu-wrap\">\n                          <div class=\"menu\">\n                            <div class=\"bgr\"></div>\n                          </div>\n                        </div>\n                        <div class=\"changeCategories up\"></div>\n                        <div class=\"changeCategories down\"></div>\n                      </div>";
        var menu = document.querySelector('.menu');
        var Category = new DataService_1["default"]();
        var first = 0;
        category.forEach(function (item, id) { return __awaiter(_this, void 0, void 0, function () {
            var categoryItem;
            return __generator(this, function (_a) {
                categoryItem = document.createElement('div');
                categoryItem.classList.add('category');
                if (first === id) {
                    categoryItem.classList.add('first');
                    first += 4;
                }
                categoryItem.innerHTML = "\n          <h1>" + item.title + "</h1>\n          <div class=\"subcategories\" id=\"sub" + id + "\"></div>";
                menu.appendChild(categoryItem);
                return [2 /*return*/];
            });
        }); });
        document.querySelectorAll('.subcategories').forEach(function (subDiv) {
            (function () { return __awaiter(_this, void 0, void 0, function () {
                var subCat;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Category.getSubCategory(subDiv.id.substr(-1))];
                        case 1:
                            subCat = _a.sent();
                            subCat.forEach(function (item) {
                                var span = document.createElement('span');
                                span.id = "span" + item.id;
                                span.classList.add('subcategoryHomePage');
                                span.innerHTML += item.title;
                                subDiv.appendChild(span);
                            });
                            return [2 /*return*/];
                    }
                });
            }); })();
        });
        /*  const parentH1;
         const sub; */
        var bgr = document.querySelector('.bgr');
        var main = document.querySelector('.main');
        var wrap = document.querySelector('.menu-wrap');
        var parentH1;
        var sub;
        var firstCategories = document.querySelectorAll('.first');
        firstCategories.forEach(function (firstElement) {
            parentH1 = firstElement;
            sub = firstElement.lastElementChild;
            setSelected();
        });
        menu.addEventListener('click', function (event) { return __awaiter(_this, void 0, void 0, function () {
            var el, h, prev, url;
            return __generator(this, function (_a) {
                el = event.target;
                if (el.tagName !== 'H1') {
                    return [2 /*return*/];
                }
                if (parentH1.classList.contains("first")) {
                    firstCategories.forEach(function (frst) {
                        if (frst.offsetTop < el.offsetTop) {
                            parentH1 = frst;
                            sub = frst.lastElementChild;
                        }
                    });
                }
                if (parentH1) {
                    parentH1.classList.remove('selected');
                    sub.setAttribute('style', 'display: none');
                }
                h = parentH1.offsetHeight / 2;
                prev = parentH1;
                parentH1 = el.parentElement;
                sub = parentH1.lastElementChild;
                url = category[Number(sub.id.slice(3))].img;
                main.setAttribute("style", "background-image: url(" + url + ")");
                setSelected();
                if (parentH1.classList.contains('first') || parentH1.offsetTop <= prev.offsetTop) {
                    bgr.setAttribute('style', "display: inline; top: " + (parentH1.offsetTop) + "px;");
                }
                else {
                    bgr.setAttribute('style', "display: inline; top: " + (parentH1.offsetTop - h) + "px;");
                }
                return [2 /*return*/];
            });
        }); });
        function setSelected() {
            parentH1.classList.add('selected');
            sub.setAttribute('style', 'display: block');
        }
        var up = document.querySelector('.up');
        var down = document.querySelector('.down');
        var arrCategories = document.querySelectorAll('.category');
        var pos = 0;
        var block4 = 0;
        up.addEventListener('click', function (event) {
            if (menu.offsetTop > -1 || menu.offsetTop > -441) {
                return;
            }
            block4 -= 4;
            parentH1.classList.remove('selected');
            sub.setAttribute('style', 'display: none');
            firstCategories.forEach(function (firstElement) {
                parentH1 = firstElement;
                sub = firstElement.lastElementChild;
                setSelected();
            });
            var url = category[block4].img;
            main.setAttribute("style", "background-image: url(" + url + ")");
            bgr.setAttribute('style', "display: inline; top: " + arrCategories[block4].offsetTop + "px;");
            pos += 441;
            menu.style.marginTop = pos + 'px';
            /* alert(menu.offsetTop); */
        });
        down.addEventListener('click', function (event) {
            var allHeight = 0;
            /*
                  alert(sub); */
            arrCategories.forEach(function (el) {
                allHeight += el.offsetHeight;
            });
            if (menu.offsetTop < -allHeight + 556) {
                return;
            }
            parentH1.classList.remove('selected');
            sub.setAttribute('style', 'display: none');
            firstCategories.forEach(function (firstElement) {
                parentH1 = firstElement;
                sub = firstElement.lastElementChild;
                setSelected();
            });
            block4 += 4;
            var url = category[block4].img;
            main.setAttribute("style", "background-image: url(" + url + ")");
            /*       alert(arrCategories[block4].offsetTop); */
            bgr.setAttribute('style', "display: inline; top: " + arrCategories[block4].offsetTop + "px;");
            pos -= 441;
            menu.style.marginTop = pos + 'px';
        });
    };
    return CategoryPage;
}());
exports["default"] = CategoryPage;
