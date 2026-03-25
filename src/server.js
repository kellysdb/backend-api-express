//const express = require('express')
import express from 'express'
import userRouter from './routers/userRouter.js'
import publicationRouter from './routers/publicationRouter.js'
import { logger } from './middlewares/logger.js'

const app = express()
const port = 3000

app.use(logger)
app.use(express.json())

app.get('/', (req, res) => { 
  res.send("Olá mundo Express API")
})

app.use('/user', userRouter)
app.use('/publication', publicationRouter)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})

