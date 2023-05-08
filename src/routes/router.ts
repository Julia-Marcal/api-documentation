import { Router } from "express";
const Hellocontroller = require('../controllers/get/basicController')

const AgentCreateController = require('../controllers/post/agentPostController')

const AgentViewAllController = require('../controllers/get/agentGetAllController')
const ViewAgentById = require('../controllers/get/agentGetOneController')

const DeleteById = require('../controllers/delete/agentDeleteController')
const DeleteAllAgents = require('../controllers/delete/agentDeleteAllControler')

const AgentUpdate = require('../controllers/update/agentUpdateController')

//Users
const UserCreate = require('../controllers/register/UserPostController')
const LoginRequired = require('../middlewares/loginRequired')

const router = Router()

router.get('/HelloWorld', Hellocontroller.hello);
router.get('/', AgentViewAllController.viewAllAgents)
router.get('/:id', ViewAgentById.findById)

router.post('/', AgentCreateController.create);

router.delete('/:id', LoginRequired.CheckToken ,DeleteById.deleteById)
router.delete('/', DeleteAllAgents.deleteAll)

router.patch('/:id', AgentUpdate.updateName)

//Users
router.post('/users', UserCreate.create)

module.exports = router;
