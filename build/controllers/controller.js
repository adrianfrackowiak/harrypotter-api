"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataBooks = require('../data/books.json');
const dataHouses = require('../data/houses.json');
const home = (req, res, next) => {
    return res.sendfile('public/index.html');
};
const books = (req, res, next) => {
    return res.status(200).json(dataBooks);
};
const houses = (req, res, next) => {
    return res.status(200).json(dataHouses);
};
exports.default = { home, books, houses };
