// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const connectDB = require('./config/db');
// // const dataRoutes = require('./routes/dataRoutes');
// // require('dotenv').config();

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // app.use(cors());
// // app.use(express.json());

// // connectDB();

// // app.use((req, res, next) => {
// //   console.log(`${req.method} ${req.url}`);
// //   next();
// // });

// // app.use('/api/data', dataRoutes);

// // app.use((err, req, res, next) => {
// //   console.error(err.stack);
// //   res.status(500).send('Something broke!');
// // });

// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });





// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const dataRoutes = require('./routes/dataRoutes');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors({
//   origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Restrict to frontend URL in production
//   methods: ['GET', 'POST'],
// }));
// app.use(express.json());

// // Logging for debugging (optional, remove in production if not needed)
// if (process.env.NODE_ENV !== 'production') {
//   app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
//   });
// }

// // Connect to MongoDB
// connectDB();

// // Routes
// app.use('/api/data', dataRoutes);
// app.get('/health')

// // Error Handling Middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Internal Server Error' });
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const dataRoutes = require('./routes/dataRoutes');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors({
//   origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Restrict to frontend URL
//   methods: ['GET', 'POST'],
//   credentials: true, // Optional: if you need cookies/auth
// }));
// app.use(express.json());

// // Logging middleware (disabled in production)
// if (process.env.NODE_ENV !== 'production') {
//   app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
//   });
// }

// // Health check endpoint
// app.get('/health', (req, res) => {
//   res.status(200).json({ status: 'OK', message: 'Backend is running' });
// });

// // Connect to MongoDB
// connectDB();

// // Routes
// app.use('/api/data', dataRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Internal Server Error' });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





const express = require('express');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');
const connectDB = require('./config/db');

const app = express();

app.use(cors({
  origin: 'https://my-frontend-app-eufggghjd0e3dcbt.canadacentral-01.azurewebsites.net'
}));

app.use(express.json());

connectDB().then(() => {
  app.use('/api/data', dataRoutes);

  const port = process.env.PORT || 5000;
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














// const express = require('express');
// const cors = require('cors');
// const dataRoutes = require('./routes/dataRoutes');
// // const connectDB = require('./config/db'); // Comment out for now

// const app = express();

// // Enable CORS for the frontend domain
// app.use(cors({
//   origin: 'https://my-frontend-app-eufggghjd0e3dcbt.canadacentral-01.azurewebsites.net'
// }));

// // Parse JSON bodies
// app.use(express.json());

// // Use data routes
// app.use('/api/data', dataRoutes);

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Backend server running on port ${port}`);
// }).on('error', (err) => {
//   if (err.code === 'EADDRINUSE') {
//     console.error(`Port ${port} is already in use.`);
//     process.exit(1);
//   }
// });