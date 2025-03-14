const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/health', async (req, res) => {
    const healthCheck = {
        uptime: process.uptime(),          // App uptime in seconds
        message: 'OK',
        timestamp: new Date(),
    };

    try {
        await mongoose.connection.db.admin().ping();  // MongoDB health check
        healthCheck.mongoDB = 'Connected';
        res.status(200).json(healthCheck);
    } catch (error) {
        healthCheck.mongoDB = 'Disconnected';
        res.status(503).json(healthCheck);
    }
});

module.exports = router;
