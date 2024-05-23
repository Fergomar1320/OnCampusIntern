const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//MondgoDB Database Connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("MongoDB database connection established successfully");
})
.catch((error) => {
    console.error("Failed to connect to MongoDB:", error.message);
});

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB database connection established successfully");
})

//import routes
const teachersRouter = require('./routes/teachers');

//implement routes
app.use('/teachers', teachersRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});