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
    }]
})

export default mongoose.model('Specs', specsSchema)