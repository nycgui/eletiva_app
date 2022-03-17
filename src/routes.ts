import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController"
import { ListUserController } from "./controllers/ListUserController" 
import { DeleteUserController } from "./controllers/DeleteUserController"
import { UpdateUserController } from "./controllers/UpdateUserController"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"

import { ensureAdmin } from "./middlewares/ensureAdmin"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"

const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const deleteUserController = new DeleteUserController()
const updateUserController = new UpdateUserController()
const authenticateUserController = new AuthenticateUserController()

const router = Router()

router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)

router.get('/users', ensureAuthenticated, ensureAdmin, listUserController.handle)

router.use(ensureAdmin)
router.delete('/users/:id', deleteUserController.handle)
router.put('/users', updateUserController.handle)

export { router }