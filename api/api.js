import express from 'express'
import protectedRoute from './middleware/protectedMiddleware.js';
import { authRoutes, itemRoutes } from './routes/index.js';

const api = express()

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.use(authRoutes)
api.get('/', (_, res) => {
    return res.json({
        msg: 'API funcionando'
    })
})

api.use(protectedRoute)

api.use('/items', itemRoutes)


export default api