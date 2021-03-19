const { Db } = require('mongodb');
const mongoose = require('mongoose');
// mongoose.connect
// ('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedtopology: true });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('yayyy!!!!');
// });
               

const schema = new mongoose.Schema({
    date: new Date(),
    data: 'data'
})