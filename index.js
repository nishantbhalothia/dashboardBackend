const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const multer = require('multer');
const connectdb = require('./db/database');
const routes = require('./routes/index');
const Event = require('./modles/eventsSchema');
const fs = require('fs');
const mongoose = require('mongoose');

const upload = multer({ dest: './public/uploads/' });

const app = express();
const port = process.env.PORT || 4000;

// Serve static files
app.use(express.static('public'));

// Enable CORS
app.use(cors( { origin: true, credentials: true }));

// Parse incoming JSON and url-encoded requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse cookies
app.use(cookieParser());

// Mount routes
app.use('/', routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Connect to DB
connectdb.db(); // Call the db function to establish the connection to DB

// const data = fs.readFileSync('../eve.json', 'utf8').split('\n').filter(line => line).map(line => JSON.parse(line));

// // Insert data into MongoDB
// Event.insertMany(data).then(() => {
//   console.log('Data inserted successfully');
//   mongoose.connection.close();
// }).catch(err => {
//   console.error('Failed to insert data', err);
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
