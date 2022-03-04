interface IUserRequest {
  name: string
  email: string
  admin?: boolean
  password: string
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {

    // if (!email) {
    //   throw new Error('Email incorreto')
    // }

    var vuser = {
      name: "Nome 1", email: "email 2", admin: false, password: 1234
    }
    return vuser;
  }
}
export { CreateUserService };