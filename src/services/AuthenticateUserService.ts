import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface IAuthenticateRequest {
  email: string
  password: string
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    if (email != 'prog@fatec.sp.gov.br') {
      throw new Error('Email incorreto')
    }

    const passwordHash = await hash('fatec', 8)
    // 123456 / 783645734-sdhfhsdf7762374234234
    const passwordMatch = await compare(password, passwordHash)

    if (!passwordMatch) {
      throw new Error('Password incorrect')
    }

    // Gerar token
    const token = sign(
      {
        email: 'prog@fatec.sp.gov.br',
      },
      '4f93ac9d10cb751b8c9c646bc9dbccb9',
      {
        subject: 'Admin',
        expiresIn: '1d',
      }
    )
    return token
  }

}
export { AuthenticateUserService }