import { classToPlain } from 'class-transformer'
import { json } from 'express'

interface IUserDelete {
  id: string
}

class DeleteUserService {
  async execute({ id }: IUserDelete) {
    var messageDelete = {
      message: 'Registro excluido com sucesso'
    }
    return messageDelete
  }
}

export { DeleteUserService }