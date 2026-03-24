import { updateUser } from "../../models/userModels.js"

export async function updateUserController(req, res) {
    const { id } = req.params
    const user = req.body

    const result = await updateUser(user, +id)

    return res.json({
        message: "Usuário atualizado com sucesso", 
        user: result})
}