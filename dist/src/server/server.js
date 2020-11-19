"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var server_1 = __importDefault(require("react-dom/server"));
var App_1 = require("../App");
var indexTemplate_1 = require("./indexTemplate");
var app = express_1.default();
app.use('/static', express_1.default.static('./dist/client'));
app.get('/', function (req, res) {
    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));
});
app.listen(3000, function () {
    console.log('Server started on http://localhost:3000');
});
//# sourceMappingURL=server.js.map