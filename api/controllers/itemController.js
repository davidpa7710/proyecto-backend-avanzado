import { Items } from '../models/index.js'

const create = async (req, res) => {
    try {
        const newItem = await Items.create(req.body)
        return res.json({
            msg: 'Producto creado',
            newItem
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al crear item'
        })
    }
}

export default { create }