
import { createUser, validateUser } from "../../models/userModels.js";
import { tr } from "zod/locales"
import { flattenError, treeifyError } from "zod"

export async function createUserController(req, res) {
   
    try {
    const user = req.body;
   //const result = await createUser(user)

const {success, data, error} = validateUser(user, {id: true})

if (!success) {
    return res.status(400).json({
        message: "Error creating user",
        fieldErrors: error.flattenError(error).fieldErrors
    })
}

        const result = await createUser(data)
        res.json({
        message: "User created successfully",
        user: result
    })
    }
    catch (error) {
        console.log(error)

        if(error.code === 'P2002' && error.message.includes("email")) {
            return res.status(400).json({
                message: "Erro de validação",
                fieldErrors: {
                    email: ["Email já está em uso por outro usuário"]
                }
            })
        }
        next(error)
    }
}
