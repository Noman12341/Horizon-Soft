const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// inittiozing express server
const app = express();

// middlewares
app.use(express.json());

// connecting with mongodb Atlus
mongoose.connect("mongodb+srv://Noman12341:62ra6ARLF9MzhYPM@horizon-soft-cluster-ma.erthu.mongodb.net/HorizonSoftDB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => {
        console.log("MongoDB is connected.");
    }).catch(err => {
        throw err;
    });

// Using routes
app.use("/admin", require('./Routes/Admin'));
app.use("/static", express.static(path.join(__dirname + '/Public')));


// Assiging port number
const PORT = process.env.PORT || 4000;

// product Build
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}

app.listen(PORT, () => {
    console.log("server is running at port " + PORT);
});