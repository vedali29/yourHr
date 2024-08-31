import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './models/user.js';
import connectDB from './db.js';
import upload from './multer.js';
import 'dotenv/config'


const app = express();
app.use(cors());
app.use(express.json());


// Connect to MongoDB
connectDB();

// Route to get user data by ID
app.get('/user/:userId', async (req, res) => {
    const { userId } = req.params;

    // Validate userId format
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ error: "Invalid userId format" });
    }

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json(user);
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
});

// Route to fetch all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
});

// Route to handle user registration and file upload
app.post('/register', upload.single('resume'), async (req, res) => {
    const { name, email, password } = req.body;
    const resume = req.file?.filename; // Use filename, not path

    try {
        const newUser = new User({ name, email, password, resume });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: "Error registering user", details: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Server is running on port ${PORT}`);
});
