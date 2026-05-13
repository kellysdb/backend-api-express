import { updatePublication, validatePublication } from "../../models/publicationModels.js";

export async function updatePubliController(req, res) {
    
    try {
    const { id } = req.params;
    const publication = req.body;
    publication.id = +id;

    const { success, error, data } = validatePublication(publication);

    if (!success) {
        return res.status(400).json({
            message: "Error updating publication",
            fieldErrors: error
        });
    }

    const result = await updatePublication(data, data.id);

    return res.json({
        message: "Publication updated successfully",
        publication: result
    });
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