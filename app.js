const path = require('path');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin.js');
const userRoutes = require('./routes/user');


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(userRoutes);


//Express create server and listen:
app.listen(3000);