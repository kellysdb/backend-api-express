import { updateUser, validateUser } from "../../models/userModels.js";   

export async function updateAvatarUserController(req, res, next) {
    
    try {
    const { id } = req.params
    const { avatar } = req.body

    const {sucess, error, data: userValidated} = validateUser({id: + id, avatar: user.avatar}, {name: true, email: true, pass: true}) 

    if (!sucess) {
        return res.status(400).json({
            message: "Error updating user",
            fieldErrors: error
        })
    }

    const result = await updateUser(data, data.id)

    return res.json({
        message: "Avatar atualizado com sucesso",
        user: result
    })
    }   catch (error) {
        if(error.code === 'P2025') {
            return res.status(404).json({
                message: "Usuário não encontrado para ser atualizado",
            })
        }
        next(error)
    }
} 