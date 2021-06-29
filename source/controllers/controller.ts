import { Request, Response, NextFunction } from 'express';

const dataBooks = require('../data/books.json');
const dataHouses = require('../data/houses.json');

const home = (req: Request, res: Response, next: NextFunction) => {
    return res.sendfile('public/index.html');
};

const books = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(dataBooks);
};

const houses = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(dataHouses);
};

export default { home, books, houses };
