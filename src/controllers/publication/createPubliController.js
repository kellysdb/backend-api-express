import { createPublication, validatePublication } from "../../models/publicationModels.js";
import { flattenError } from "zod"

export async function createPubliController(req, res) {
   
    const publication = req.body;

    const { sucess, error, data } = validatePublication(publication, {id: true})
    if (!sucess) {
        return res.status(400).json({
            message: "Error creating publication",
            fieldErrors: error
        })
    }


   const result = await createPublication(publication)

    res.json({
        message: "Publication created successfully",
        publication: result
    })
}
