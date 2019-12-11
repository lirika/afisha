var Data = /** @class */ (function () {
    function Data() {
        this.baseUrl = 'http://localhost:3000/';
    }
    Data.prototype.getData = function (url) {
        return fetch(this.baseUrl + url)
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
    };
    return Data;
}());
export default Data;
//# sourceMappingURL=DataService.js.map