"use strict";
exports.__esModule = true;
var DataService = /** @class */ (function () {
    function DataService() {
        this.baseUrl = 'http://localhost:3000/';
    }
    DataService.prototype.getCategory = function () {
        return fetch(this.baseUrl + 'categories/')
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
    };
    DataService.prototype.getSubCategory = function (id) {
        return fetch(this.baseUrl + 'categories/' + id + '/subCategories')
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
    };
    DataService.prototype.getEvents = function () {
        return fetch(this.baseUrl + 'events')
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
    };
    return DataService;
}());
exports["default"] = DataService;
