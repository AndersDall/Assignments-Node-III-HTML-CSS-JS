'use strict';
/*
 * handlers.js
 * Requesthandlers to be called by the router mechanism
 */
const fs = require("fs");                           // file system access
const httpStatus = require("http-status-codes");    // http sc

module.exports = {
    home(req, res) {
        let path = "views/index.html";
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(`Not found file: ${path}.`);
            }
            res.writeHead(httpStatus.OK, {      // yes, write header
                "Content-Type": "text/html; charset=utf-8"
            });
            console.log(`served routed file: ${path}.`);
            res.write(data);
            res.end();
        });
    },

    about(req, res) {
        let path = "views/about.html";
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(`Not found file: ${path}.`);
            }
            res.writeHead(httpStatus.OK, {      // yes, write header
                "Content-Type": "text/html; charset=utf-8"
            });
            console.log(`served routed file: ${path}.`);
            res.write(data);
            res.end();
        });
    },

    contact(req, res) {
        let path = "views/contact.html";
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(`Not found file: ${path}.`);
            }

            let body = [];
            req.on("data", function (bodyData) {    // eventhandling for data reception
                body.push(bodyData);                // bodyData is an object
            });
            req.on("end", function () {             // eventhandling for end-of-data
                body = Buffer.concat(body).toString();
                console.log("Log: Request Body Contents: " + body);
            });


            res.writeHead(httpStatus.OK, {      // yes, write header
                "Content-Type": "text/html; charset=utf-8"
            });
            console.log(`served routed file: ${path}.`);
            res.write(data);
            res.end();
        });
    },



    js(req, res) {
        let path = "public/js" + req.url;
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(`Not found file: ${path}.`);
            }
            res.writeHead(httpStatus.OK, {      // yes, write header
                "Content-Type": "application/javascript; charset=utf-8"
            });
            console.log(`served routed file: ${path}.`);
            res.write(data);
            res.end();
        });
    },

    css(req, res) {
        let path = "public/css" + req.url;
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(`Not found file: ${path}`);
            }
            res.writeHead(httpStatus.OK, {      // yes, write header
                "Content-Type": "text/css; charset=utf-8"
            });
            console.log(`served routed file: ${path}.`);
            res.write(data);
            res.end();
        });
    },

    png(req, res) {
        let path = "public/images" + req.url;
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(`Not found file: ${path}`);
            }
            res.writeHead(httpStatus.OK, {      // yes, write header
                "Content-Type": "image/png"
            });
            console.log(`served routed file: ${path}.`);
            res.write(data);
            res.end();
        });
    },

    jpg(req, res) {
        let path = "public/images" + req.url;
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(`Not found file: ${path}`);
            }
            res.writeHead(httpStatus.OK, {      // yes, write header
                "Content-Type": "image/jpeg"
            });
            console.log(`served routed file: ${path}.`);
            res.write(data);
            res.end();
        });
    },

    notfound(req, res) {
        console.log(`Handler 'notfound' was called for route ${req.url}`);
        res.end();
    }
}
