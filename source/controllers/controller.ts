import { Request, Response, NextFunction } from 'express';

const dataBooks = require('../data/books.json');
const dataHouses = require('../data/houses.json');
const dataSorting = require('../data/sortinghat.json');
const dataWizards = require('../data/wizards.json');
const dataPlacesAndTransport = require('../data/placestransport.json');
const dataSpellsAndPotions = require('../data/spellspotions.json');

const home = (req: Request, res: Response, next: NextFunction) => {
    return res.sendfile('./public/index.html');
};

const books = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(dataBooks);
};

const houses = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(dataHouses);
};

const sorting = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(dataSorting);
};

const wizards = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(dataWizards);
};

const placesandtransport = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    return res.status(200).json(dataPlacesAndTransport);
};

const spellsandpotions = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(dataSpellsAndPotions);
};

export default {
    home,
    books,
    houses,
    sorting,
    placesandtransport,
    spellsandpotions,
    wizards,
};
