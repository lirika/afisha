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
var renderCategoryPage_1 = require("./services/renderCategoryPage");
var renderEventsPage_1 = require("./services/renderEventsPage");
var renderAboutPage_1 = require("./services/renderAboutPage");
var renderAdminPage_1 = require("./services/renderAdminPage");
var TodoApp_1 = require("./Components/TodoApp");
var renderSupportUsPage_1 = require("./services/renderSupportUsPage");
var DataService_1 = require("./services/DataService");
window.addEventListener('load', init);
function init() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, renderCategoryPage_1["default"]()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var root = document.querySelector('#root');
root.addEventListener('click', function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var target, _a, subIdStr, todo, input_search, tooltipText, dataS, subC, buttonSnow;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                target = event.target;
                _a = target.className;
                switch (_a) {
                    case 'subcategoryHomePage': return [3 /*break*/, 1];
                    case 'item support': return [3 /*break*/, 3];
                    case 'item eventPage': return [3 /*break*/, 5];
                    case 'item TodoApp': return [3 /*break*/, 7];
                    case 'item aboutPage': return [3 /*break*/, 8];
                    case 'item adminPage': return [3 /*break*/, 10];
                    case 'item homePage': return [3 /*break*/, 12];
                    case 'btns_more': return [3 /*break*/, 12];
                    case 'button-search': return [3 /*break*/, 13];
                    case 'button-settings': return [3 /*break*/, 16];
                }
                return [3 /*break*/, 17];
            case 1:
                subIdStr = target.id.slice(4);
                root.innerHTML = "";
                return [4 /*yield*/, renderEventsPage_1["default"](subIdStr, target.innerHTML)];
            case 2:
                _b.sent();
                return [3 /*break*/, 17];
            case 3:
                root.innerHTML = "";
                return [4 /*yield*/, renderSupportUsPage_1["default"]()];
            case 4:
                _b.sent();
                return [3 /*break*/, 17];
            case 5:
                root.innerHTML = "";
                return [4 /*yield*/, renderEventsPage_1["default"]('0', 'rock')];
            case 6:
                _b.sent();
                return [3 /*break*/, 17];
            case 7:
                todo = new TodoApp_1["default"]();
                todo.render();
                return [3 /*break*/, 17];
            case 8: return [4 /*yield*/, renderAboutPage_1["default"]()];
            case 9:
                _b.sent();
                return [3 /*break*/, 17];
            case 10:
                root.innerHTML = "";
                return [4 /*yield*/, renderAdminPage_1["default"]()];
            case 11:
                _b.sent();
                return [3 /*break*/, 17];
            case 12:
                init();
                return [3 /*break*/, 17];
            case 13:
                event.preventDefault();
                input_search = document.querySelector('.icons-help input');
                tooltipText = document.querySelector('.icons-help .tooltiptext');
                dataS = new DataService_1["default"]();
                return [4 /*yield*/, dataS.getSubCategoryByTitle(input_search.value)];
            case 14:
                subC = _b.sent();
                if (!subC[0]) {
                    tooltipText.style.visibility = 'visible';
                    return [2 /*return*/];
                }
                /*    console.log(subC[0].id); */
                root.innerHTML = "";
                return [4 /*yield*/, renderEventsPage_1["default"](subC[0].id, input_search.value)];
            case 15:
                _b.sent();
                return [3 /*break*/, 17];
            case 16:
                buttonSnow = document.querySelector('.snowContainer');
                buttonSnow.classList.toggle('snowVisible');
                _b.label = 17;
            case 17: return [2 /*return*/];
        }
    });
}); });
