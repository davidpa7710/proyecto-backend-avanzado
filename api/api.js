import express from 'express'
import { authRoutes } from './routes/index.js';

const api = express()

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.use(authRoutes)
api.get('/', (_, res) => {
    return res.json({
        msg: 'API funcionando'
    })
})


export default api