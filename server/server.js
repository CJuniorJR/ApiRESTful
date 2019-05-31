"use strict";
exports.__esModule = true;
var http = require("http");
var server = http.createServer();
server.listen(3000, function () { return console.log('Servidor rodando na porta 3000!'); });
