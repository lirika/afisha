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
require("../styles/adminPage.css");
var AdminPage = /** @class */ (function () {
    function AdminPage() {
    }
    AdminPage.prototype.renderPage = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            function setNavbar() {
                var selected = subTitleActive;
                navbar.addEventListener('click', function (ev) {
                    var targetItem = ev.target;
                    if (targetItem.className !== 'item') {
                        return;
                    }
                    active(targetItem);
                });
                function active(item) {
                    if (selected) {
                        selected.classList.remove('active');
                    }
                    selected = item;
                    selected.classList.add('active');
                }
            }
            function burgerHide() {
                burger.classList.remove('burger-active');
                header.classList.remove('header-animation');
                burgerActive = false;
                dark.style.display = 'none';
            }
            var mainWrapper, addForm, select, btn, inputDiv, events, results, erroSpan, successSpan, root, optionInSelect, burger, header, dark, navbar, subTitleActive, burgerActive;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(data);
                        mainWrapper = document.createElement('div');
                        mainWrapper.classList.add('main-wrapper');
                        addForm = document.createElement('form');
                        addForm.classList.add('add-form');
                        addForm.innerHTML = "<h2>Add events</h2>";
                        select = document.createElement('select');
                        btn = document.createElement('button');
                        btn.classList.add('button');
                        inputDiv = document.createElement('div');
                        inputDiv.classList.add('input-wrapper');
                        btn.innerHTML = 'send';
                        inputDiv.appendChild(select);
                        addForm.appendChild(inputDiv);
                        addForm.appendChild(btn);
                        mainWrapper.appendChild(addForm);
                        events = new DataService_1["default"]();
                        return [4 /*yield*/, events.getAllEvents()];
                    case 1:
                        results = _a.sent();
                        /////////////////// render input fields////////////////////////
                        Object.keys(results[0]).forEach(function (key) {
                            if (key === 'subCategoryId') {
                                return;
                            }
                            var inputWrapper = document.createElement('div');
                            inputWrapper.classList.add('field');
                            var h5 = document.createElement('h5');
                            h5.innerHTML = key + ':  ';
                            var input = document.createElement('input');
                            input.id = key;
                            inputWrapper.appendChild(h5);
                            inputWrapper.appendChild(input);
                            inputDiv.appendChild(inputWrapper);
                        });
                        erroSpan = document.createElement('span');
                        erroSpan.classList.add('error');
                        successSpan = document.createElement('span');
                        successSpan.classList.add('success');
                        addForm.appendChild(erroSpan);
                        addForm.appendChild(successSpan);
                        ////////////////render options//////////////////////////////
                        data.forEach(function (item) {
                            var option = document.createElement('option');
                            option.innerHTML = item.title;
                            option.id = 'option' + item.id;
                            select.appendChild(option);
                        });
                        root = document.getElementById('root');
                        root.innerHTML = " <div class=\"dark\" id=\"dark\"></div>\n    <div class=\"burger-icon\" id=\"burger\">\n      <div class=\"burger-line\"></div>\n    </div>\n    <header id=\"header\">\n      <div class=\"navbar\" id=\"navbar\">\n        <div class=\"all-items\">\n          <div class=\"item homePage\">HOME PAGE</div>\n          <div class=\"item TodoApp\">PLAN YOUR VISIT</div>\n          <div class=\"item eventPage\">Events</div>\n          <div class=\"item support\">SUPPORT US</div>\n          <div class=\"item aboutPage\">ABOUT US</div>\n          <div class=\"item adminPage active\">ADMIN PAGE</div>\n        </div>\n      </div>\n    </header>";
                        root.appendChild(mainWrapper);
                        optionInSelect = document.querySelectorAll('select option');
                        burger = document.getElementById('burger');
                        header = document.getElementById('header');
                        dark = document.getElementById('dark');
                        navbar = document.getElementById('navbar');
                        subTitleActive = document.querySelector('.active');
                        burgerActive = false;
                        setNavbar();
                        burger.addEventListener('click', function () {
                            if (!burgerActive) {
                                burger.classList.add('burger-active');
                                burgerActive = true;
                                header.classList.add('header-animation');
                                dark.style.display = 'block';
                            }
                            else {
                                burgerHide();
                            }
                        });
                        dark.addEventListener('click', function () {
                            burgerHide();
                        });
                        ///////////////////////////////// SEN Inputs values////////////////////////////////////////
                        addForm.addEventListener('submit', function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var id, inputId, inpTitle, inputStatus, inputGenre, inputDate, inputTime, inputPlace, inputImg, inputOnline, inputDescr, inputPrice, value;
                            return __generator(this, function (_a) {
                                e.preventDefault();
                                optionInSelect.forEach(function (option) {
                                    if (option.selected) {
                                        id = option.id.slice(6);
                                        return id;
                                    }
                                });
                                inputId = document.querySelector('#id').value;
                                inpTitle = document.querySelector('#title').value;
                                inputStatus = document.querySelector('#status').value;
                                inputGenre = document.querySelector('#genre').value;
                                inputDate = document.querySelector('#date').value;
                                inputTime = document.querySelector('#time').value;
                                inputPlace = document.querySelector('#place').value;
                                inputImg = document.querySelector('#img').value;
                                inputOnline = document.querySelector('#online').value;
                                inputDescr = document.querySelector('#description').value;
                                inputPrice = document.querySelector('#price').value;
                                value = {
                                    id: inputId,
                                    title: inpTitle,
                                    status: inputStatus,
                                    genre: inputGenre,
                                    date: inputDate,
                                    time: inputTime,
                                    place: inputPlace,
                                    img: inputImg,
                                    online: !!inputOnline,
                                    description: inputDescr,
                                    price: inputPrice
                                };
                                // @ts-ignore
                                this.sendEvents(id, value);
                                return [2 /*return*/];
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminPage.prototype.sendEvents = function (id, value) {
        return __awaiter(this, void 0, void 0, function () {
            var dataService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataService = new DataService_1["default"]();
                        return [4 /*yield*/, dataService.sendEvents(id, value)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return AdminPage;
}());
exports["default"] = AdminPage;
