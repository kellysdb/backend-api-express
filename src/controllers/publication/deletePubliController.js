import { deletePublication, validatePublication } from "../../models/publicationModels.js";

export async function deletePubliController(req, res) {
    
    try {
    const id = req.params.id

    const {sucess, error, data} = await deletePublication({id: +id}, {title: true, description: true, author: true })

    if (!sucess) {
        return res.status(400).json({
            message: "Error deleting publication",
            fieldErrors: error
        })
    }

    const result = await deletePublication(data.id) //operador "+"" para converter string para número

    return res.json({message: "Publicação deletada com sucesso!",
        publication: result
    }) 

}  catch (error) {
        if(error.code === 'P2025') {
            console.log(error.message)
            return res.status(404).json({
                message: "Publicação não encontrada",
            })
        }
        next(error)
    }
}