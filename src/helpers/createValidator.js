import { flattenError } from "zod"

export const createValidator = (schema) => {

    const validator = (data, partial = false) => {
        let result 
        if(partial) {
           result = schema.partial(partial).safeParse(data)
        } else {
            result = schema.safeParse(data)
        }
        const {sucess, error, data: validatedData} = result
        if (!sucess) {
            return {
                sucess: false,
                error: flattenError(error).flieldErrors
            }
        }
        return {
            sucess: true,
            data: validatedData }
    }
}