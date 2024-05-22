const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Simulated data - replace this with actual data source
const robotData = require('./robotData.json');

app.get('/api/robot', (req, res) => {
    res.json(robotData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
