"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../../modules/user/routes");
var Routes = /** @class */ (function () {
    function Routes(app) {
        this.router = new routes_1.default;
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/api/user').get(this.router.index);
        app.route('/api/user').post(this.router.create);
        app.route('/api/user/:id').get(this.router.findOne);
        app.route('/api/user/:id').put(this.router.update);
        app.route('/api/user/:id').delete(this.router.delete);
    };
    return Routes;
}());
exports.default = Routes;
