"use strict";
exports.__esModule = true;
var SupportUs = /** @class */ (function () {
    function SupportUs() {
    }
    SupportUs.prototype.render = function (data) {
        var root = document.querySelector('#root');
        root.innerHTML = "\n            <div class=\"dark\" id=\"dark\"></div>\n        <div class=\"burger-icon\" id=\"burger\">\n          <div class=\"burger-line\"></div>\n        </div>\n        <header id=\"header\">\n          <div class=\"navbar\" id=\"navbar\">\n            <div class=\"all-items\">\n              <div class=\"item homePage\">HOME PAGE</div>\n              <div class=\"item TodoApp\">PLAN YOUR VISIT</div>\n              <div class=\"item eventPage\">Events</div>\n              <div class=\"item support active\">SUPPORT US</div>\n              <div class=\"item aboutPage\">ABOUT US</div>\n              <div class=\"item adminPage \">ADMIN PAGE</div>\n            </div>\n          </div>\n        </header>\n        <h1>Support Us</h1>\n        <form >\n            <label for=\"name\">Your name</label>\n            <input type=\"text\" name=\"name\">\n             <label for=\"name\">Your last name</label>\n            <input type=\"text\" name=\"last-name\">\n             <label for=\"name\">Your email</label>\n            <input type=\"email\" name=\"email\">\n            <input type=\"submit\">\n         </form>\n         <div class=\"contacts-wrapper\">\n         <h1>Our contacts</h1>\n         <p>Phone: " + data.phone + "</p>\n         <p>Email: " + data.email + "</p>\n         <p>Address: " + data.address + "</p>\n  \n</div>\n        ";
    };
    return SupportUs;
}());
exports["default"] = SupportUs;
