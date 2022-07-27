import express from 'express'
import { authController } from '../controllers/index.js'

const router = express.Router()

router.post('/auth/register', authController.default.register)

router.post('/auth/login', authController.default.login)

export default router