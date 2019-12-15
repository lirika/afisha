"use strict";
exports.__esModule = true;
var BuyPop_1 = require("../Components/BuyPop");
function renderBuyPage() {
    var child = document.createElement("DIV");
    child.innerHTML = "<p>This is Buy Page</p>\n           <p>Some Text</p>\n           <button type=\"submit\">Submit</button>\n        ";
    var popup = new BuyPop_1["default"](child);
    popup.show();
}
exports["default"] = renderBuyPage;
