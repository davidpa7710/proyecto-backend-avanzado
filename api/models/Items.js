import mongoose from "mongoose";

const specsSchema = new mongoose.Schema({
    color: String,
    dimension: String,
    provider: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
    }]
})

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    stock: Number,
    price: Number,
    category: String,
    description: String,
    specs: { specsSchema }
})

export default mongoose.model('Items', itemSchema)