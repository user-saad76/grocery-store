import express from "express";
import { CreateNewfreshMilk, deletefreshMilk, getAllfreshMilk, getfreshMilkById, updatefreshMilk } from "../controllers/freshMilk.controller.js";

const server = express();
const router = express.Router()

router.route('/freshmilk/add').post(CreateNewfreshMilk)
router.route('/freshmilk').get(getAllfreshMilk)
router.route('/freshmilk/:name/:price').get(getfreshMilkById)
router.route('/freshmilk/update/:id').put(updatefreshMilk)
router.route('/freshmilk/delete/:id').delete(deletefreshMilk)


export default router