import express from 'express'
import { itemController } from '../controllers/index.js'

const router = express.Router()

router.post('/items', itemController.default.create)
router.get('/items', itemController.default.getAll)

export default router 