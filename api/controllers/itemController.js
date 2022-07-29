import { Items } from '../models/index.js'

const create = async (req, res) => {
    try {
        const newItem = await Items.create(req.body)
        return res.json({
            msg: 'Producto creado',
            newItem
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error al crear item'
        })
    }
}

const getAll = async (req, res) => {
    try {
      const items = await Item.find();
      return res.json({
        msg: 'Items obtenidos',
        items,
      });
    } catch (error) {
      return returnError('Error al obtener items', res);
    }
  };

export default { create, getAll }