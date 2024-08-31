import mongoose from 'mongoose';

const registerUserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
});

const registeruser = mongoose.model('RegisterUser', registerUserSchema);

export default registeruser;
