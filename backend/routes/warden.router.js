
import express from "express"
import {holidaysApplicationStatus} from '../controllers/warden.controller.js'
const router = express.Router();
router.put("/holidaysApplication/updateStatus/:userId",holidaysApplicationStatus)
export default router;
