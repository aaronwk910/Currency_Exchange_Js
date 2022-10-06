const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;

mongoose.connect(uri);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => {
console.log("MongoDB database connection established successfully");
})

const ratesRouter = require('./routes/rates');
app.use('/rates', ratesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

