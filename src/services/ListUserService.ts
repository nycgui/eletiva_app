import { classToPlain } from 'class-transformer'

class ListUserService {
  async execute(){

    const usersret = [{
       "id": "1",
       "nome": "Nyc",
       "email": "nyc.gui@gmail.com",
       "admin": "1",
       "password": "xxxxx",
       "status": "Ativo"
    },
    {
      "id": "2",
      "nome": "Gui",
      "email": "nyc.gui@gmail.com",
      "admin": "0",
      "password": "xxxxx",
      "status": "Ativo"
    }
  ]

  return classToPlain(usersret)
  }
}

export { ListUserService }