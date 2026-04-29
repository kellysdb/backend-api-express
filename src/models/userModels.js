import { prisma } from "../helpers/dbConnection.js";
import * as z from "zod";
// const user = {
//     name: "Kelly Silva Dantas Barboza",
//     email:"kellysdb25@example.com",
//     pass: "securepassword",
//     role: "user"
//     avatar: "https://example.com/avatar.jpg"
// }


const userSchema = z.object({
    id: z.int().positive(),
    avatar: z.url().max(500),
    name: z.string().min(3).max(255),
    email: z.email(),
    pass: z.string().min(6).max(255)
})

export const validateUser = (user, partial = false) => {
    if (partial) {
        return userSchema.partial().safeParse(user)
    }
    return userSchema.safeParse(user)
}


export const createUser = async (user) => {
    return await prisma.user.create({
        data: user
    })
}

export const getUser = async () => {
    return await prisma.user.findMany()
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