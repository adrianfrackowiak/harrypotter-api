import { Request, Response, NextFunction } from 'express';

const dataBooks = require('../../data/books.json');
const dataHouses = require('../../data/houses.json');

const books = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(dataBooks);
};

const houses = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(dataHouses);
};

export default { books, houses };
