const path = require('path');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin.js');
const userRoutes = require('./routes/user');

const expressHandlebars = require('express-handlebars');

app.engine('hbs', expressHandlebars({layoutsDir: 'views/layouts/', defaultLayout:'main-layout', extname:'hbs'}));
app.set('view engine', 'hbs');
//app.set('view engine', 'pug');
//app.set('views', 'views'); //By default it always looks for views at /views so this line is not needed.

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(userRoutes);


//Express create server and listen:
app.listen(3000);