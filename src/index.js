"use strict";
exports.__esModule = true;
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var helmet_1 = require("helmet");
var morgan_1 = require("morgan");
console.log('working');
var config_1 = require("config");
console.log('port', config_1["default"].get('port'));
var app = (0, express_1["default"])();
// TODO: add mongo uri in .env and uncomment the line below
// connectDB();
// configure env variables
dotenv_1["default"].config();
// Routes Imports
// Middleware configuration
app.use((0, helmet_1["default"])());
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: false }));
app.use((0, morgan_1["default"])('tiny'));
app.use(express_1["default"].static('public'));
// Routes Configuration
app.get('/', function (req, res) {
    res.send('working');
});
// Server Setup
var PORT = process.env.PORT;
var NODE_ENV = process.env.NODE_ENV;
app.listen(PORT, function () {
    console.log("App is not really listening on ".concat(PORT, " in ").concat(NODE_ENV));
});
