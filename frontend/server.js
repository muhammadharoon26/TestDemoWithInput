// const express = require('express');
// const path = require('path');
// const app = express();

// // Serve static files from the current directory (where server.js will reside after deployment)
// app.use(express.static(__dirname));

// // Handle all routes by serving index.html (necessary for React's client-side routing)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Listen on the port provided by Azure or default to 3000
// app.listen(process.env.PORT || 3000, () => {
//   console.log('Server running');
// });










const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the build folder (relative to server.js)
app.use(express.static(path.join(__dirname, 'build')));

// Handle all routes with index.html for React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Listen on the port provided by Azure
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});