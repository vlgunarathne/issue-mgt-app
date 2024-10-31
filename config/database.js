const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://<user_name>:<password>@clustertutorial.zt4bb.mongodb.net/issues_mgt?retryWrites=true&w=majority&appName=ClusterTutorial', {
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;