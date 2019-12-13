"use strict";
exports.__esModule = true;
require("../styles/events.css");
var EventsPage = /** @class */ (function () {
    function EventsPage() {
    }
    EventsPage.prototype.renderEventsList = function (events) {
        /* alert(events[0].title); */
        var root = document.querySelector('#root');
        root.innerHTML = "    <div class=\"dark\" id=\"dark\"></div>\n    <div class=\"burger-icon\" id=\"burger\">\n      <div class=\"burger-line\"></div>\n    </div>\n    <header id=\"header\">\n      <div class=\"navbar\" id=\"navbar\">\n        <div class=\"all-items\">\n          <div class=\"item homePage\">HOME PAGE</div>\n          <div class=\"item\">CONCERTS & TICKETS</div>\n          <div class=\"item\">SIMPHANIC</div>\n          <div class=\"item\">SUPPORT US</div>\n          <div class=\"item\">ABOUT US</div>\n          <div class=\"item\">DONATE</div>\n        </div>\n      </div>\n    </header>\n\n    <div class=\"event-info\">\n      <div class=\"info\">\n      </div>\n    </div>\n     \n    <div class=\"scroll\">\n      <div class=\"scroll-thumb\"></div>\n    </div>\n<!--////////////  items   ///////////////  -->\n\n    <div class=\"wrap-items\">\n        <div class=\"items\">\n            <ul class=\"events\">\n\n            </ul>\n        </div>\n        \n      <button class=\"arrow prev\">\u2B9D</button>\n      <button class=\"arrow next\">\u2B9F</button>\n    </div>\n    ";
        ////////////////////// code for load data to blocks /////////////////////////
        var ul = document.querySelector('.wrap-items ul');
        events.forEach(function (event) {
            var liHTMLelem = document.createElement('li');
            liHTMLelem.id = "li" + event.id;
            var liContent = "<div class=\"event-type\">" + event.status + "</div>\n                                <div class=\"event-description\">\n                                <b>" + event.title + "</b><br>" + event.genre + "\n                                </div>\n                                <div class=\"event-date\">\n                                " + event.date + "\n                                </div>\n                            ";
            liHTMLelem.innerHTML = liContent;
            ul.appendChild(liHTMLelem);
        });
        ////////////////////////////////////////////////////////////////////////////
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
        var listLi = document.querySelectorAll('.events li');
        var prev = document.querySelector('.prev');
        var next = document.querySelector('.next');
        var scrollThumb = document.querySelector('.scroll-thumb');
        listLi.forEach(function (li) {
            li.addEventListener('click', function (event) {
                scrollThumb.style.marginLeft = (li.offsetLeft - ul.offsetLeft) + "px";
                var urlImg = (events[Number(li.id.slice(2))].img);
                document.body.setAttribute("style", "background-image: url(" + urlImg + ")");
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
