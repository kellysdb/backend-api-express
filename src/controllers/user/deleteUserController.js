
import { deleteUser, validateUser } from "../../models/userModels.js";

export async function deleteUserController(req, res) {
    
    try {
    const id = req.params.id

    const {sucess, error, data} = await deleteUser({id: +id}, 
        {name: true, email: true, avatar: true})
    
    if (!sucess) {
        return res.status(400).json({
            message: "Error deleting user",
            fieldErrors: error
        })
    }

    const result = await deleteUser(data.id)

    return res.json({
        message: "Usuario deletado com sucesso!",
        user: result
    })
}   catch (error) {
        if(error.code === 'P2025') {
            console.log(error.message)
            return res.status(404).json({
                message: "Usuário não encontrado",
            })
        }
        next(error)
    }

} 