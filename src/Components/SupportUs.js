"use strict";
exports.__esModule = true;
require("../styles/supportUs.css");
var SupportUs = /** @class */ (function () {
    function SupportUs() {
    }
    SupportUs.prototype.render = function (data) {
        var root = document.querySelector('#root');
        root.innerHTML = "\n            <div class=\"dark\" id=\"dark\"></div>\n        <div class=\"burger-icon\" id=\"burger\">\n          <div class=\"burger-line\"></div>\n        </div>\n        <header id=\"header\">\n          <div class=\"navbar\" id=\"navbar\">\n            <div class=\"all-items\">\n              <div class=\"item homePage\">HOME PAGE</div>\n              <div class=\"item TodoApp\">PLAN YOUR VISIT</div>\n              <div class=\"item eventPage\">Events</div>\n              <div class=\"item support active\">SUPPORT US</div>\n              <div class=\"item aboutPage\">ABOUT US</div>\n              <div class=\"item adminPage \">ADMIN PAGE</div>\n            </div>\n          </div>\n        </header>\n        <div class=\"contentSupport\">\n        <form class=\"formSupport\">\n        <div class=\"titleSupport\"> Support Us</div>\n            <label for=\"name\">Your name</label>\n            <input type=\"text\" name=\"name\" class=\"input\">\n             <label for=\"name\">Your last name</label>\n            <input type=\"text\" name=\"last-name\" class=\"input\">\n             <label for=\"name\">Your email</label>\n            <input type=\"email\" name=\"email\" class=\"input\">\n            <input type=\"submit\" class =\"button\" value=\"send\">\n         </form>\n         <div class=\"contacts-wrapper\">\n         <div class=\"titleSupport\"> Our contacts</div>\n         <p class=\"contacts\"><b>Phone:</b> " + data.phone + "</p>\n         <p class=\"contacts\"><b>Email:</b> " + data.email + "</p>\n         <p class=\"contacts\"><b>Address:</b> " + data.address + "</p>\n    </div>\n</div>\n        ";
    };
    return SupportUs;
}());
exports["default"] = SupportUs;
