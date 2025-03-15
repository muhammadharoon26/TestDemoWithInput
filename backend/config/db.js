const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.AZURE_COSMOS_CONNECTIONSTRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;