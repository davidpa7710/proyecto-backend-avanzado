import express from 'express'

const api = express()

api.get('/', (_, res)=> {
    return res.json({
        msg: 'API funcionando'
    })
})

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

export default api