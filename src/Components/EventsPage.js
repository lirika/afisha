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
        var currentEvent = events[0];
        var payBlock = "\n        <div class=\"row\">\n            <div class=\"col-75\">\n              <div class=\"container-form\">\n                <form action=\"\">\n                  <div class=\"row\">\n                    <div class=\"col-50\">\n                      <h3>Billing Address</h3>\n                      <label for=\"fname\"><i class=\"fa fa-user\"></i> Full Name</label>\n                      <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"John M. Doe\">\n                      <label for=\"email\"><i class=\"fa fa-envelope\"></i> Email</label>\n                      <input type=\"text\" id=\"email\" name=\"email\" placeholder=\"john@example.com\">\n                      <label for=\"adr\"><i class=\"fa fa-address-card-o\"></i> Address</label>\n                      <input type=\"text\" id=\"adr\" name=\"address\" placeholder=\"542 W. 15th Street\">\n                      <label for=\"city\"><i class=\"fa fa-institution\"></i> City</label>\n                      <input type=\"text\" id=\"city\" name=\"city\" placeholder=\"New York\">\n          \n                      <div class=\"row\">\n                        <div class=\"col-50\">\n                          <label for=\"state\">State</label>\n                          <input type=\"text\" id=\"state\" name=\"state\" placeholder=\"NY\">\n                        </div>\n                        <div class=\"col-50\">\n                          <label for=\"zip\">Zip</label>\n                          <input type=\"text\" id=\"zip\" name=\"zip\" placeholder=\"10001\">\n                        </div>\n                      </div>\n                    </div>\n          \n                    <div class=\"col-50\">\n                      <h3>Payment</h3>\n                      <label for=\"fname\">Accepted Cards</label>\n                      <div class=\"icon-container\">\n                        <i class=\"fa fa-cc-visa\" style=\"color:navy;\"></i>\n                        <i class=\"fa fa-cc-amex\" style=\"color:blue;\"></i>\n                        <i class=\"fa fa-cc-mastercard\" style=\"color:red;\"></i>\n                        <i class=\"fa fa-cc-discover\" style=\"color:orange;\"></i>\n                      </div>\n                      <label for=\"cname\">Name on Card</label>\n                      <input type=\"text\" id=\"cname\" name=\"cardname\" placeholder=\"John More Doe\">\n                      <label for=\"ccnum\">Credit card number</label>\n                      <input type=\"text\" id=\"ccnum\" name=\"cardnumber\" placeholder=\"1111-2222-3333-4444\">\n                      <label for=\"expmonth\">Exp Month</label>\n                      <input type=\"text\" id=\"expmonth\" name=\"expmonth\" placeholder=\"September\">\n          \n                      <div class=\"row\">\n                        <div class=\"col-50\">\n                          <label for=\"expyear\">Exp Year</label>\n                          <input type=\"text\" id=\"expyear\" name=\"expyear\" placeholder=\"2018\">\n                        </div>\n                        <div class=\"col-50\">\n                          <label for=\"cvv\">CVV</label>\n                          <input type=\"text\" id=\"cvv\" name=\"cvv\" placeholder=\"352\">\n                        </div>\n                      </div>\n                    </div>\n          \n                  </div>\n                  <label>\n                    <input type=\"checkbox\" checked=\"checked\" name=\"sameadr\"> Shipping address same as billing\n                  </label>\n                  <input type=\"submit\" value=\"Continue to checkout\" class=\"btn\">\n                </form>\n              </div>\n            </div>\n          </div>\n";
        var defaultItem = events[0];
        document.body.style.background = "linear-gradient(to bottom, rgba(0,0,0,.0), rgba(0,0,0,.99) 75%),linear-gradient(to top,  rgba(0,0,0,.0), rgba(0,0,0,.5) 90%)";
        /////// set base Background ////
        var defaultBg = events[0].img;
        /////// set base Template //////
        if (defaultItem.online) {
            var defaultDate = "<div class=\"data-time-location\">" + defaultItem.date + "</div>";
            var defaultButtons = "<div id=\"watch" + events[0].id + "\" class=\"button watch\">Watch now</div>";
        }
        else {
            defaultDate = "<div class=\"data-time-location\">\n                              " + defaultItem.time + ", " + defaultItem.place + "<br>\n                              " + defaultItem.date + "\n                            </div>";
            defaultButtons = " \n                                 <div id=\"buy" + events[0].id + "\" class=\"button buy\">Buy now</div>\n                                 <div id=\"more-info" + events[0].id + "\" class=\"button more-info\">More info</div>\n                                ";
        }
        var defaultTemplate = "\n                         <div class=\"main-info\">\n                          <div class=\"title\">\n                            " + defaultItem.title + "\n                          </div>\n                          <div class=\"description\">\n                            " + defaultItem.genre + "\n                          </div>\n                           " + defaultDate + "\n                     </div>\n                      <div class=\"button-all\">\n                      " + defaultButtons + "\n</div>\n        ";
        var root = document.querySelector('#root');
        root.innerHTML = " \n    <div class=\"dark\" id=\"dark\"></div>\n    <div class=\"burger-icon\" id=\"burger\">\n      <div class=\"burger-line\"></div>\n    </div>\n    <header id=\"header\">\n      <div class=\"navbar\" id=\"navbar\">\n        <div class=\"all-items\">\n          <div class=\"item homePage\">HOME PAGE</div>\n          <div class=\"item TodoApp\">PLAN YOUR VISIT</div>\n          <div class=\"item eventPage active\">" + subTitle + "</div>\n          <div class=\"item\">SUPPORT US</div>\n          <div class=\"item aboutPage\">ABOUT US</div>\n          <div class=\"item adminPage\">ADMIN PAGE</div>\n        </div>\n      </div>\n    </header>\n    <div class=\"screen\"><img src=" + defaultBg + "  alt=img class=\"bg-event-img\" style=\"display: block;\"></div>\n\n    <div class=\"event-info\">\n    \n      <div class=\"container\">\n        <div class=\"modal\">\n            <div class=\"btn-close\">close</div>\n            <div class = \"infoEventModal\">\n            \n              <div class=\"info-modal\">\n                <strong>" + events[0].title + "</strong><br>\n                " + events[0].date + "\n                <div class=\"price\">Price: 12</div>\n              </div>\n\n            </div>\n            <div class = \"payModal\">" + payBlock + "</div>\n        </div>\n      </div>\n\n      <div class=\"info\">\n      " + defaultTemplate + "\n      </div>\n    </div>\n     \n    <div class=\"scroll\">\n      <div class=\"scroll-thumb\"></div>\n    </div>\n<!--////////////  items   ///////////////  -->\n\n    <div class=\"wrap-items\">\n        <div class=\"items\">\n            <ul class=\"events\">\n            </ul>\n        </div>\n        \n        <div class=\"arrow prev\"></div>\n        <div class=\"arrow next\"></div>\n    </div>\n    ";
        ////////////////////// code for load data to blocks /////////////////////////
        var ul = document.querySelector('.wrap-items ul');
        var screen = document.querySelector('.screen');
        events.forEach(function (event) {
            var liHTMLelem = document.createElement('li');
            liHTMLelem.id = "li" + event.id;
            liHTMLelem.classList.add('event-item');
            var liContent = "<div class=\"event-type\">";
            if (!event.online) {
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
            liContent += "<img class=\"bg-event-img\" alt=img src=" + event.img + ">";
            liHTMLelem.innerHTML = liContent;
            ul.appendChild(liHTMLelem);
        });
        /////////////////  buttons visibility  /////////////////
        var btnUp = document.querySelector('.prev');
        var btnDown = document.querySelector('.next');
        var liArray = ul.children;
        (function buttonsVisibility() {
            if (events.length >= 5) {
                visibility('visible');
            }
            else {
                if (isNot4InRow()) {
                    visibility('visible');
                }
                window.addEventListener('resize', function () {
                    if (isNot4InRow()) {
                        visibility('visible');
                    }
                    else {
                        if (ul.offsetTop < 0) {
                            ul.style.marginTop = 0 + 'px';
                        }
                        visibility('hidden');
                    }
                });
            }
        })();
        function isNot4InRow() {
            var b = false;
            for (var i = 1; i < liArray.length; i++)
                if (liArray[i].offsetLeft === liArray[0].offsetLeft) {
                    b = true;
                    return b;
                }
            return b;
        }
        function visibility(val) {
            btnUp.style.visibility = val;
            btnDown.style.visibility = val;
        }
        //////////////////////////////////
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
        var infoWrap = document.querySelector('.event-info');
        var listLi = document.querySelectorAll('.events li');
        var prev = document.querySelector('.prev');
        var next = document.querySelector('.next');
        var scrollThumb = document.querySelector('.scroll-thumb');
        var buyButton;
        var moreButton;
        listLi.forEach(function (li) {
            li.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                var information, urlImg, dateWrap, buttonWrapper;
                return __generator(this, function (_a) {
                    scrollThumb.style.marginLeft = li.offsetLeft - ul.offsetLeft + 'px';
                    information = events[Number(li.id.slice(2))];
                    urlImg = events[Number(li.id.slice(2))].img;
                    screen.innerHTML = "<img src=" + urlImg + " alt=img class=\"bg-event-img\" style=\"display: block;\">";
                    /////// Change info by click on event item///////////
                    infoWrap.innerHTML = "\n                      <div class=\"container\">\n                        <div class=\"modal\">\n                            <div class=\"btn-close\">close</div>\n                            <div class = \"infoEventModal\">\n                                <div class=\"info-modal\">\n                                  <strong>" + information.title + "</strong><br>\n                                  " + information.date + "\n                                  <div class=\"price\">Price: 12</div>\n                                </div>\n                            </div>\n                            <div class = \"payModal\">" + payBlock + "</div>\n                        </div>\n                      </div>\n\n                      <div class=\"info\">\n                       <div class=\"main-info\">\n                          <div class=\"title\">\n                            " + information.title + "\n                          </div>\n                          <div class=\"description\">\n                            " + information.genre + "\n                          </div>\n                           <div class=\"data-time-location\">\n                              " + information.time + ", " + information.place + "<br>\n                              " + information.date + "\n                            </div>\n                          </div>\n                        <div class=\"button-all\"></div>\n                      </div>\n                ";
                    dateWrap = document.querySelector('.data-time-location');
                    buttonWrapper = document.querySelector('.button-all');
                    if (information.online) {
                        dateWrap.innerHTML = information.date;
                        buttonWrapper.innerHTML = "";
                        buttonWrapper.innerHTML = "<div id=\"watch" + li.id.slice(2) + "\" class=\"button watch\">Watch now</div>";
                    }
                    else {
                        dateWrap.innerHTML = information.time + ", " + information.place + "<br>\n                                                                                    " + information.date;
                        buyButton = document.createElement('div');
                        buyButton.id = "buy" + li.id.slice(2);
                        buyButton.classList.add("button");
                        buyButton.classList.add("buy");
                        buyButton.innerHTML = "Buy now";
                        moreButton = document.createElement('div');
                        moreButton.id = "buy" + li.id.slice(2);
                        moreButton.classList.add("button");
                        moreButton.classList.add("more-info");
                        moreButton.innerHTML = "More info";
                        buttonWrapper.innerHTML = "";
                        buttonWrapper.append(buyButton, moreButton);
                    }
                    currentEvent = information;
                    return [2 /*return*/];
                });
            }); });
        });
        var position = 0;
        prev.addEventListener('click', function () {
            if (ul.offsetTop > 0 || ul.offsetTop > -188) {
                return;
            }
            position += 190;
            ul.style.marginTop = position + 'px';
        });
        next.addEventListener('click', function () {
            if (ul.offsetTop < -(ul.offsetHeight - 190 * 2)) {
                return;
            }
            position -= 190;
            ul.style.marginTop = position + 'px';
        });
        var rootEvent = document.querySelector("#root");
        rootEvent.addEventListener('click', function (event) {
            var container = document.querySelector('.container');
            // let modal = document.querySelector('.modal') as HTMLDivElement;
            var target = event.target;
            if (target.classList.contains('buy')) {
                container.classList.add('modal-open');
            }
            else if (target.classList.contains('btn-close')) {
                container.classList.remove('modal-open');
            }
        });
    };
    return EventsPage;
}());
exports["default"] = EventsPage;
