
import { deleteUser } from "../../models/userModels.js";

export async function deleteUserController(req, res) {
    const id = req.params.id

    const result = await deleteUser(+id) //operador "+"" para converter string para número

    return res.json({message: "Usuario deletado com sucesso!",
        user: result
    })
}