import express from 'express'
import SuggestionController from '../controller/SuggestionController.js';

const router = express.Router();

router.get("/", SuggestionController);

export default router;