import { Router } from "express";
const Hellocontroller = require('../controllers/get/basicController')

const AgentCreateController = require('../controllers/post/agentPostController')

const AgentViewAllController = require('../controllers/get/agentGetAllController')
const ViewAgentById = require('../controllers/get/agentGetOneController')

const DeleteById = require('../controllers/delete/agentDeleteController')
const DeleteAllAgents = require('../controllers/delete/agentDeleteAllControler')

const router = Router()

router.get('/HelloWorld', Hellocontroller.hello);
router.get('/', AgentViewAllController.viewAllAgents)
router.get('/:id', ViewAgentById.findById)

router.post('/', AgentCreateController.create);

router.delete('/:id', DeleteById.deleteById)
router.delete('/', DeleteAllAgents.deleteAll)

module.exports = router;
