export const errorHandler = (error, req, res, next) => {
    console.log(error.menssage)
    console.log(error.name)

    if(error?.menssage?.includes("in JSON at position")){ {
        return res.status(500).json({
            menssage: "Erro de sintaxe no JSON, por favor verifique os dados enviados",
        })
    }
}    
    
    return res.status(500).json({
        menssage: "Error no servidor, por favor tente novamente mais tarde",
    })
}
