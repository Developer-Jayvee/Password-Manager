const express = require('express')
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const port  = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views'))); 


// Routes
app.use('/', require('./routes/index'));



app.listen(port , () => console.log(`Running in port: ${port}!!`));