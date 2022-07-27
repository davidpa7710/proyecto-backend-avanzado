import mongoose from "mongoose";

const specsSchema = new mongoose.Schema({
    color: String,
    heigth: String,
    width: String,
    provider: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
        required: true,
    }]
})

export default mongoose.model('Specs', specsSchema)