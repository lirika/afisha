"use strict";
exports.__esModule = true;
require("../styles/buyPop.css");
//
var BuyPop = /** @class */ (function () {
    function BuyPop(child) {
        this.destroyBoundWithThis = this.destroy.bind(this);
        var tempElement = document.createElement("DIV");
        tempElement.innerHTML = "<div class='buy-pop'>\n        <a class='close'><!--&#x274c-->&#x2716</a>\n          <div class='childContainer'></div>\n       </div>";
        this.hostElement = tempElement.firstChild;
        this.hostElement.querySelector(".childContainer").appendChild(child);
    }
    BuyPop.prototype.show = function () {
        document.body.appendChild(this.hostElement);
        this.addListeners();
    };
    BuyPop.prototype.addListeners = function () {
        var closeElement = this.hostElement.querySelector("a");
        if (closeElement) {
            closeElement.addEventListener("click", this.destroyBoundWithThis);
        }
        var submitBtn = this.hostElement.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.addEventListener("click", this.destroyBoundWithThis);
        }
    };
    BuyPop.prototype.destroy = function () {
        this.hostElement.parentElement.removeChild(this.hostElement);
    };
    return BuyPop;
}());
exports["default"] = BuyPop;
