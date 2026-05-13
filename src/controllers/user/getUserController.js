import { getUser } from "../../models/userModels.js";

export async function getUserController(req, res) {
    const {name} = req.query
    
    const result = await getUser(name)

    res.json({
        message: "Users retrieved successfully",
        user: result
    });
}