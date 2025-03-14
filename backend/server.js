// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const dataRoutes = require('./routes/dataRoutes');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// connectDB();

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

// app.use('/api/data', dataRoutes);

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });












const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const dataRoutes = require('./routes/dataRoutes');
const healthRoutes = require('./routes/healthRoutes'); // <-- Added
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectDB();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.get('/',(req, res) => {
  res.send('Hello!')
})
app.use('/api/data', dataRoutes);
app.use('/health', healthRoutes); // <-- Added health check route

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
