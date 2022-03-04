import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController"
import { ListUserController } from "./controllers/ListUserController" 
import { DeleteUserController } from "./controllers/DeleteUserController"
import { UpdateUserController } from "./controllers/UpdateUserController"

const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const deleteUserController = new DeleteUserController()
const updateUserController = new UpdateUserController()

const router = Router()

router.post('/users', createUserController.handle)
router.get('/users', listUserController.handle)
router.delete('/users/:id', deleteUserController.handle)
router.put('/users', updateUserController.handle)

export { router }