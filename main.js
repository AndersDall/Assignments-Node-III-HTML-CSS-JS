"use strict";

var server = require("./server");                   // make server module available
var router = require("./router");                   // router module

server.start(router);                               // start server
                                                    // callback to route
const bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({ extended: false});
