import { deletePublication } from "../../models/publicationModels.js";

export async function deletePubliController(req, res) {
    const id = req.params.id

    const result = await deletePublication(+id) //operador "+"" para converter string para número

    return res.json({message: "Publicação deletada com sucesso!",
        publication: result
    })

}