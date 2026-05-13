import { updateUser, validateUser } from "../../models/userModels.js"

export async function updateUserController(req, res) {
    
    try{
    const { id } = req.params
    const user = req.body
    user.id = +id


    const {sucess, error, data: userValidated} = validateUser(user)

    if (!sucess) {
        return res.status(400).json({
            message: "Error updating user",
            fieldErrors: error
        })
    }
    
    const result = await updateUser(userValidated, userValidated.id)

    return res.json({
        message: "Usuário atualizado com sucesso", 
        user: result
    })
    }   catch (error) {
        if(error.code === 'P2025') {
            return res.status(404).json({
                message: "Usuário não encontrado para ser atualizado",
            })
        }
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