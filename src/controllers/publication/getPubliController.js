import { getPublication, validatePublication } from "../../models/publicationModels.js";

export async function getPubliController(req, res) {

    const result = await getPublication()
    const { sucess, error, data } = validatePublication(result, {id: true}, {title: true}, {description: true}, {author: true})

    if (!sucess) {
        return res.status(400).json({
            message: "Error retrieving publications",
            fieldErrors: error
        })
    }

    res.json({
        message: "Publications retrieved successfully",
        publication: result
    });
}