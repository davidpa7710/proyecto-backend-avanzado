import express from 'express'
import { itemController } from '../controllers/index.js'

const router = express.Router()

router.post('/', itemController.default.create)

export default router 