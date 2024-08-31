import mongoose from "mongoose";

// MongoDB URI for the registration database
const mongoURI = "mongodb+srv://person2:person2@cluster0.mongodb.net/registerdb?retryWrites=true&w=majority";

// Function to connect to MongoDB
const connectDBRegister = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to registerdb");
    } catch (error) {
        console.error("Error connecting to registerdb:", error);
        process.exit(1);
    }
};

// Exporting the function using ES6 syntax
export default connectDBRegister;
