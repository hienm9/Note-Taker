// Dependencies
const express = require('express');

// Set port
const PORT = process.env.PORT || 3001;

// Initialize the app using express server
const app = express();

// Routes files locations
const apiRoutes = require('./routes/apiRoutes/noteRoutes');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');

// Set up parsing for incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming json data
app.use(express.json());
// Add middleware
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Server listener on port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });