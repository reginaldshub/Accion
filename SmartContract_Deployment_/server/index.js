const express= require('express')
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// const api=require('../routes/api');
const app = express()

const users = require('./../callmethod');

const port=3000

//Middleware
app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());

app.use('/',users)

app.get('/', (req, res) => {
    res.send('Invalid');
})

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// })

app.listen(port, () => {
console.log('Server started on port'+port);
})
