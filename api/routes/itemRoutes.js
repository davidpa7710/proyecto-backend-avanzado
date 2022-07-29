import express from 'express'
import { itemController } from '../controllers/index.js'

const router = express.Router()

router.post('/', itemController.default.create)
router.get('/', itemController.default.getAll)

export default router 