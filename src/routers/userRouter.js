import express from 'express'
import { getUserController } from '../controllers/user/getUserController.js'
import { createUserController } from '../controllers/user/createUserController.js'
import { updateUserController } from '../controllers/user/update.UserController.js'
import { updateAvatarUserController } from '../controllers/user/updateAvatarUserController.js'
import { deleteUserController } from '../controllers/user/deleteUserController.js'
const router = express.Router()

router.get('/', getUserController)
router.post('/', createUserController)
router.put('/:id', updateUserController)
router.patch('/:id', updateAvatarUserController)
router.delete('/:id', deleteUserController)

export default router
