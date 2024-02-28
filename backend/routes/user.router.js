import express from "express"
import { complaints, holidaysApplication, roomMaintaince, suggestions ,user} from "../controllers/user.controller.js";
const router = express.Router();
router.get('/user',user);
router.post('/addSuggestions',suggestions)
router.post('/addComplaints',complaints)
router.post('/holidaysApplication',holidaysApplication)
router.post('/roomMaintaince',roomMaintaince)
export default router;