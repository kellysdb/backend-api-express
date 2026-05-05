import { updateUser, validateUser } from "../../models/userModels.js"

export async function updateUserController(req, res) {
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
}