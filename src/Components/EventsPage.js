"use strict";
exports.__esModule = true;
require("../styles/events.css");
var EventsPage = /** @class */ (function () {
    function EventsPage() {
    }
    EventsPage.prototype.renderEventsList = function () {
        var root = document.querySelector('#root');
        root.innerHTML = "    <div class=\"dark\" id=\"dark\"></div>\n    <div class=\"burger-icon\" id=\"burger\">\n      <div class=\"burger-line\"></div>\n    </div>\n    <header id=\"header\">\n      <div class=\"navbar\" id=\"navbar\">\n        <div class=\"all-items\">\n          <div class=\"item\">CONCERTS & TICKETS</div>\n          <div class=\"item\">PLAN YOUR VISIT</div>\n          <div class=\"item\">SIMPHANIC</div>\n          <div class=\"item\">SUPPORT US</div>\n          <div class=\"item\">ABOUT US</div>\n          <div class=\"item\">DONATE</div>\n        </div>\n      </div>\n    </header>\n\n    <div class=\"event-info\">\n      <div class=\"info\">\n        <div class=\"main-info\">\n          <div class=\"title\">\n            Star Wars\n          </div>\n          <div class=\"description\">\n            Movie about Jedis\n          </div>\n        </div>\n        <div class=\"data-time-location\">\n          7:30 PM, Silver Screen, Minsk\n        </div>\n        <div class=\"button-all\">\n          <div class=\"button buy\">Buy now</div>\n          <div class=\"button more-info\">More info</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"scroll\">\n      <div class=\"scroll-thumb\"></div>\n    </div>\n<!--////////////  items   ///////////////  -->\n\n    <div class=\"wrap-items\">\n        <div class=\"items\">\n            <ul class=\"events\">\n              <li class=\"e\">\n                    <div class=\"event-type\">Title1</div>\n                    <div class=\"event-description\">\n                     <b>title</b><br> description\n                    </div>\n                    <div class=\"event-date\">data</div>\n                </li>\n\n              <li>\n                <div class=\"event-type\">Title2</div>\n                <div class=\"event-description\">\n                 <b>title</b><br> description\n                </div>\n                <div class=\"event-date\">data</div>\n              </li>\n\n              <li>\n                <div class=\"event-type\">Title3</div>\n                <div class=\"event-description\">\n                  <b>title</b><br> description\n                </div>\n                <div class=\"event-date\">data</div>\n              </li>\n\n              <li>\n                <div class=\"event-type\">Title4</div>\n                <div class=\"event-description\">\n                  <b>title</b><br> description\n                </div>\n                <div class=\"event-date\">data</div>\n              </li>\n\n              <li>\n                <div class=\"event-type\">Title5</div>\n                <div class=\"event-description\">\n                  <b>title</b><br> description\n                </div>\n                <div class=\"event-date\">data</div>\n              </li>\n\n            </ul>\n        </div>\n        \n      <button class=\"arrow prev\">\u2B9D</button>\n      <button class=\"arrow next\">\u2B9F</button>\n    </div>\n    ";
        var burger = document.getElementById('burger');
        var header = document.getElementById('header');
        var dark = document.getElementById('dark');
        var navbar = document.getElementById('navbar');
        var burgerActive = false;
        function setNavbar() {
            var selected;
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
            if (burgerActive === false) {
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
        var count = 4;
        var wrap = document.querySelector('.wrap-items');
        var items = document.querySelector('.items');
        var ul = document.querySelector('.wrap-items ul');
        var listLi = document.querySelectorAll('.events li');
        var prev = document.querySelector('.prev');
        var next = document.querySelector('.next');
        var scrollThumb = document.querySelector('.scroll-thumb');
        listLi.forEach(function (li) {
            li.addEventListener('click', function (event) {
                scrollThumb.style.marginLeft = (li.offsetLeft - ul.offsetLeft) + "px";
            });
        });
        var position = 0;
        prev.addEventListener('click', function (event) {
            if (ul.offsetTop > 0) {
                return;
            }
            position += 190;
            ul.style.marginTop = position + "px";
        });
        next.addEventListener('click', function (event) {
            if (ul.offsetTop < (-(ul.offsetHeight - 190 * 2))) {
                return;
            }
            position -= 190;
            ul.style.marginTop = position + "px";
        });
    };
    return EventsPage;
}());
exports["default"] = EventsPage;
