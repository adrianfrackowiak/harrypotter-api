import express from 'express';
import controller from '../controllers/controller';

const router = express.Router();

router.get('/', controller.home);
router.get('/books', controller.books);
router.get('/houses', controller.houses);
router.get('/sortinghat', controller.sorting);

export = router;
