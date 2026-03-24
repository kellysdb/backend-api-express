import express from 'express'
import { getPubliController } from '../controllers/publication/getPubliController.js'
import { createPubliController } from '../controllers/publication/createPubliController.js'
import { updatePubliController } from '../controllers/publication/updatePubliController.js'
import { patchTitlePubliController } from '../controllers/publication/patchTitlePubliController.js'
import { deletePubliController } from '../controllers/publication/deletePubliController.js'

const router = express.Router()

router.get('/', getPubliController)
router.post('/', createPubliController)
router.put('/', updatePubliController)
router.patch('/', patchTitlePubliController)
router.delete('/:id', deletePubliController)

export default router
