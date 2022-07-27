import jwt from 'jwt-simple'
import config from '../config/index.js'
import { User } from '../models/User.js'
const protectedRoute = async (req, res) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({
            msg: 'Token requerido en la cabecera Authorization',
        })
    }
    try {
        const payload = jwt.encode(token, config.token.secret)
        const user = await User.findById(payload.userId)
        if (!user) {
            return res.status(401).json({
                msg: 'Usuario no existe'
            })
        }
        req.user = user
    } catch (error) {
        return  res.status(401).json({
            msg: 'Token invalido',
            error
        })
    }
}

export default protectedRoute
