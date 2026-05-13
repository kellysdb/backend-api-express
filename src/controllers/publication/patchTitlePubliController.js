import { updatePublication, validatePublication } from "../../models/publicationModels.js";


export async function patchTitlePubliController(req, res) {
    
    try {
    const {id} = req.params
    const publication = req.body

    const { sucess, error, data } = validatePublication({id: +id, title: publication.title}, {id: true, title: true}, {description: true, author: true})

    if (!sucess) {
        return res.status(400).json({
            message: "Error updating publication title",
            fieldErrors: error
        })
    }

    const result = await updatePublication(data, data.id)

    res.json({
        message: "Publication title updated successfully",
        publication: result
    }) 
    } catch (error) {
        if (error.message === "Publication not found") {
            console.error(error.message);
            return res.status(404).json({
                message: "Publicação não encontrada para ser atualizada."
            })
        }
        next(error)
    }
}