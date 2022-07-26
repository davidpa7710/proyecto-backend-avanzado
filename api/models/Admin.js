import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName : {
        type: String,
        required: true,
    },
    birthday: Date,
    address: String,
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
     type: String,
     required: true,
    }
});

export default mongoose.model('Admin', adminSchema)