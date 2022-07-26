import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    stock: Number,
    price: Number,
    category: String,
    description: String,
    specs: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Specs'
    }
})