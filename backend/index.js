const express = require('express');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');
const connectDB = require('./config/db');

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL
}));

app.use(express.json());

connectDB().then(() => {
  app.use('/api/data', dataRoutes);

  const port = process.env.PORT || 5000;
  console.log('FRONTEND_URL:', process.env.FRONTEND_URL); // Debug the URL
  app.listen(port, () => {
    console.log(`Backend server running on port ${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use.`);
      process.exit(1);
    }
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
  process.exit(1);
});