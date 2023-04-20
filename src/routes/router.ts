import { Router } from "express";
const controller = require('../controllers/basicController')


const router = Router()

router.get('/', controller.hello);

module.exports = router;
