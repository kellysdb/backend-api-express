import { prisma } from "../helpers/dbConnection.js";
import * as z from "zod"
import { createValidator} from "../helpers/createValidator.js"
// const user = {
//     name: "Kelly Silva Dantas Barboza",
//     email:"kellysdb25@example.com",
//     pass: "securepassword",
//     role: "user"
//     avatar: "https://example.com/avatar.jpg"
// }

const userSchema = z.object({
    id: z.int("Id é obrigatório e deve ser um valor numérico")
      .positive("Id deve ser um valor numérico positivo"),
    avatar: z.string("Avatar é obrigatório e deve ser uma string")
      .url("Avatar deve ser uma URL válida")
      .max(500, "Avatar deve ter no máximo 500 caracteres"),
    name: z.string("Nome deve ser uma string")
      .min(3, "Nome deve ter no mínimo 3 caracteres")
      .max(255, "Nome deve ter no máximo 255 caracteres"),
    email: z.string("Email é obrigatório e deve ser uma string")
      .email("Email deve ser um endereço de email válido"),
    pass: z.string("Senha é obrigatória e deve ser uma string")
      .min(6, "Senha deve ter no mínimo 6 caracteres")
      .max(255, "Senha deve ter no máximo 255 caracteres")
})

export const validateUser = createValidator(userSchema)

export const createUser = async (user) => {
    return await prisma.user.create({
        data: user
    })
}

export const getUser = async () => {
    return await prisma.user.findMany(
        name ? {
            where: {
                name: {
                    contains: name
                }
            }
        } : {}
    )
}


export const deleteUser = async (id) => {
    return await prisma.user.delete({
        where: { 
            id 
        }
    })
}

export const updateUser = async (user, id) => {
    return await prisma.user.update({
        data: user,
        where: {
            id
        }
    })
}