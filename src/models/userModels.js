import {prisma} from '../helpers/dbConnection.js';

// const user = {
//     name: "Kelly Silva Dantas Barboza",
//     email:"kellysdb25@example.com",
//     pass: "securepassword",
//     role: "user"
//     avatar: "https://example.com/avatar.jpg"
// }

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