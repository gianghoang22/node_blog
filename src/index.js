const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//connect to DB
db.connect();

//override
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')));

//Template Engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
