import { updateUser } from "../../models/userModels.js";   

export async function updateAvatarUserController(req, res) {
    const { id } = req.params
    const { avatar } = req.body

    const result = await updateUser({ avatar }, +id)

    return res.json({
        message: "Avatar atualizado com sucesso",
        user: result
    })

}