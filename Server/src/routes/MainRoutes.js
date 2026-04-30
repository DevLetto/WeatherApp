import express from 'express'
import RequisitionsController from "../controller/RequisitionsController.js"

const router = express.Router();

router.get("/", RequisitionsController);

export default router;