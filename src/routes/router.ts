import { Router } from "express";
const controller = require('../controllers/basicController')


const router = Router()

router.get('/', controller.hello);
router.post('/', controller.store);

module.exports = router;
