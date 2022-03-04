import { Request, Response } from 'express'
import { DeleteUserService } from '../services/DeleteUserService'

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const deleteUserService = new DeleteUserService()
    const id = request.params.id
    const users = await deleteUserService.execute({ id })
    return response.json(users)
  }
}

export { DeleteUserController };