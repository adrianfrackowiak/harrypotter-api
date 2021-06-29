import express from 'express';
import controller from '../controllers/controller';

const router = express.Router();

router.get('/books', controller.books);
router.get('/houses', controller.houses);

export = router;
