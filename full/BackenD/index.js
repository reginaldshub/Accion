const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
app.use(express.json());

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, (err) => {
if(err){
    console.log('error occured');
} else{
    console.log('successful connection');
} 
});

const user = require('./routers/router');

app.get('/', (req, res) => {
    res.send("WELCOME TO Node");
});
app.use('/users',user);

PORT = process.env.PORT;
app.listen(PORT, () => console.log(`AT ${PORT} port is running!`));