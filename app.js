const express = require('express');
const path = require('path');


// inittiozing express server
const app = express();

app.use(express.json());

// Assiging port number
const PORT = process.env.PORT || 4000;

// product Build
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}
// below Function runs every day midnight
// var job = schedule.scheduleJob('0 0 * * *', CheckAution());

app.listen(PORT, () => {
    console.log("server is running at port " + PORT);
});