import { prisma } from "../helpers/dbConnection.js";
import * as z from "zod"
import { createValidator} from "../helpers/createValidator.js"

const publicationSchema = z.object({
    id: z.int("Id é obrigatório e deve ser um valor numérico")
      .positive("Id deve ser um valor numérico positivo"),  
    title: z.string("Título é obrigatório e deve ser uma string")
      .min(3, "Título deve ter no mínimo 3 caracteres")
      .max(255, "Título deve ter no máximo 255 caracteres"),    
    description: z.string("Conteúdo é obrigatório e deve ser uma string")
      .min(3, "Conteúdo deve ter no mínimo 3 caracteres")
      .max(500, "Conteúdo deve ter no máximo 500 caracteres"),
    author: z.string("Autor é obrigatório e deve ser uma string")
      .min(3, "Autor deve ter no mínimo 3 caracteres")
      .max(255, "Autor deve ter no máximo 255 caracteres")
})

export const validatePublication = createValidator(publicationSchema)

export const createPublication = async (publication) => {
    return await prisma.publication.create({
        data: publication
    })
}

export const getPublication = async () => {
    return await prisma.publication.findMany()
}

export const updatePublication = async (publication, id) => {
    return await prisma.publication.update({
        data: publication,
        where: {
            id
        }   
    })
}

export const deletePublication = async (id) => {
    return await prisma.publication.delete({
        where: {   
            id 
        }
    })
}