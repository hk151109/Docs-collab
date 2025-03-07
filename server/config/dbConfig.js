const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(mongodb+srv://harikrishnang:4NJa7SpFhhHo9P2F@cluster0.ekb6c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0);
        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
}

module.exports = connectDB;