import express from "express"
import { complaints, holidaysApplication, roomMaintaince, suggestions ,user,holidayApplicationResponse} from "../controllers/user.controller.js";
const router = express.Router();
router.get('/user',user);
router.post('/addSuggestions',suggestions)
router.post('/addComplaints',complaints)
router.post('/holidaysApplication',holidaysApplication)
router.post('/roomMaintaince',roomMaintaince)
router.get('/applicationResult/:userId',holidayApplicationResponse)

export default router;