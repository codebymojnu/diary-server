// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const noteRoutes = require('./routes/noteRoutes');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use('/api/notes', noteRoutes);

// MongoDB connection
mongoose.connect('mongodb://admin:mojnu13@ac-r7tsoou-shard-00-00.dgjlksi.mongodb.net:27017,ac-r7tsoou-shard-00-01.dgjlksi.mongodb.net:27017,ac-r7tsoou-shard-00-02.dgjlksi.mongodb.net:27017/diary?replicaSet=atlas-6g6n8a-shard-0&ssl=true&authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
