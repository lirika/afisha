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
require("../styles/events.css");
var EventsPage = /** @class */ (function () {
    function EventsPage() {
    }
    EventsPage.prototype.renderEventsList = function (events, subTitle) {
        var _this = this;
        var defaultItem = events[0];
        /////// set base Background ////
        var defaultBg = events[0].img;
        document.body.style.background = "linear-gradient(to bottom, transparent, rgba(0,0,0,.99) 75%), linear-gradient(to top, transparent, rgba(0,0,0,.5) 90%) ,url(" + defaultBg + ")";
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        /////// set base Template //////
        if (defaultItem.online) {
            var defaultDate = "<div class=\"data-time-location\">" + defaultItem.date + "</div>";
            var defaultButtons = "<div class=\"button watch\">Watch now</div>";
        }
        else {
            defaultDate = "<div class=\"data-time-location\">\n                              " + defaultItem.time + ", " + defaultItem.place + "<br>\n                              " + defaultItem.date + "\n                            </div>";
            defaultButtons = " \n                                 <div class=\"button buy\">Buy now</div>\n                                 <div class=\"button more-info\">More info</div>\n                                ";
        }
        var defaultTemplate = "\n                         <div class=\"main-info\">\n                          <div class=\"title\">\n                            " + defaultItem.title + "\n                          </div>\n                          <div class=\"description\">\n                            " + defaultItem.genre + "\n                          </div>\n                           " + defaultDate + "\n                     </div>\n                      <div class=\"button-all\">\n                      " + defaultButtons + "\n</div>\n        ";
        var root = document.querySelector('#root');
        root.innerHTML = " \n    <div class=\"dark\" id=\"dark\"></div>\n    <div class=\"burger-icon\" id=\"burger\">\n      <div class=\"burger-line\"></div>\n    </div>\n    <header id=\"header\">\n      <div class=\"navbar\" id=\"navbar\">\n        <div class=\"all-items\">\n          <div class=\"item homePage\">HOME PAGE</div>\n          <div class=\"item\">CONCERTS & TICKETS</div>\n          <div class=\"item active\">" + subTitle + "</div>\n          <div class=\"item\">SUPPORT US</div>\n          <div class=\"item\">ABOUT US</div>\n          <div class=\"item\">DONATE</div>\n        </div>\n      </div>\n    </header>\n\n    <div class=\"event-info\">\n      <div class=\"info\">\n      " + defaultTemplate + "\n      </div>\n    </div>\n     \n    <div class=\"scroll\">\n      <div class=\"scroll-thumb\"></div>\n    </div>\n<!--////////////  items   ///////////////  -->\n\n    <div class=\"wrap-items\">\n        <div class=\"items\">\n            <ul class=\"events\">\n            </ul>\n        </div>\n        \n        <div class=\"arrow prev\"></div>\n        <div class=\"arrow next\"></div>\n    </div>\n    ";
        ////////////////////// code for load data to blocks /////////////////////////
        var ul = document.querySelector('.wrap-items ul');
        events.forEach(function (event) {
            var liHTMLelem = document.createElement('li');
            liHTMLelem.id = "li" + event.id;
            var liContent = "<div class=\"event-type\">";
            if (event.hasOwnProperty("place")) {
                liContent += "<div class=\"colorStatus\">" + event.status + "</div>";
            }
            else {
                liContent += "<div class=\"circle\"></div>" + event.status;
            }
            liContent += "</div>\n                    <div class=\"event-description\">\n                    <b>" + event.title + "</b><br>" + event.genre + "\n                    </div>\n                    <div class=\"event-date\">\n                    <div class=\"date\">" + event.date + "</div>";
            if (event.hasOwnProperty("place")) {
                liContent += "<div class=\"place-time\">" + event.time + ", " + event.place + "</div>";
            }
            liContent += "</div>";
            liHTMLelem.innerHTML = liContent;
            ul.appendChild(liHTMLelem);
        });
        ////////////////////////////////////////////////////////////////////////////
        var burger = document.getElementById('burger');
        var header = document.getElementById('header');
        var dark = document.getElementById('dark');
        var navbar = document.getElementById('navbar');
        var subTitleActive = document.querySelector('.active');
        var burgerActive = false;
        function setNavbar() {
            var selected = subTitleActive;
            navbar.addEventListener('click', function (ev) {
                var targetItem = ev.target;
                // @ts-ignore
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
        setNavbar();
        function burgerHide() {
            burger.classList.remove('burger-active');
            header.classList.remove('header-animation');
            burgerActive = false;
            dark.style.display = 'none';
        }
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
        //events items
        // const count: number = 4;
        var infoWrap = document.querySelector('.info');
        // const wrap = document.querySelector('.wrap-items') as HTMLDivElement;
        // const items = document.querySelector('.items') as HTMLDivElement;
        var listLi = document.querySelectorAll('.events li');
        var prev = document.querySelector('.prev');
        var next = document.querySelector('.next');
        var scrollThumb = document.querySelector('.scroll-thumb');
        listLi.forEach(function (li) {
            li.addEventListener('click', function (event) { return __awaiter(_this, void 0, void 0, function () {
                var information, urlImg, dateWrap, buttonWrapper;
                return __generator(this, function (_a) {
                    scrollThumb.style.marginLeft = li.offsetLeft - ul.offsetLeft + 'px';
                    information = events[Number(li.id.slice(2))];
                    urlImg = events[Number(li.id.slice(2))].img;
                    document.body.style.background = "linear-gradient(to bottom, transparent, rgba(0,0,0,.99) 75%),linear-gradient(to top, transparent, rgba(0,0,0,.5) 90%) , url(" + urlImg + ")";
                    document.body.style.backgroundRepeat = 'no-repeat';
                    document.body.style.backgroundSize = 'cover';
                    /////// Change info by click on event item///////////
                    infoWrap.innerHTML = "\n                       <div class=\"main-info\">\n                          <div class=\"title\">\n                            " + information.title + "\n                          </div>\n                          <div class=\"description\">\n                            " + information.genre + "\n                          </div>\n                           <div class=\"data-time-location\">\n                              " + information.time + ", " + information.place + "<br>\n                              " + information.date + "\n                            </div>\n                     </div>\n                      <div class=\"button-all\"></div>\n                ";
                    dateWrap = document.querySelector('.data-time-location');
                    buttonWrapper = document.querySelector('.button-all');
                    if (information.online) {
                        dateWrap.innerHTML = information.date;
                        buttonWrapper.innerHTML = '<div class="button watch">Watch now</div>';
                    }
                    else {
                        dateWrap.innerHTML = information.time + ", " + information.place + "<br>\n                                                                                    " + information.date;
                        buttonWrapper.innerHTML = " \n                                 <div class=\"button buy\">Buy now</div>\n                                 <div class=\"button more-info\">More info</div>\n                                ";
                    }
                    return [2 /*return*/];
                });
            }); });
        });
        var position = 0;
        prev.addEventListener('click', function (event) {
            if (ul.offsetTop > 0) {
                return;
            }
            position += 190;
            ul.style.marginTop = position + 'px';
        });
        next.addEventListener('click', function (event) {
            if (ul.offsetTop < -(ul.offsetHeight - 190 * 2)) {
                return;
            }
            position -= 190;
            ul.style.marginTop = position + 'px';
        });
    };
    return EventsPage;
}());
exports["default"] = EventsPage;
