//this will allow the css/JS files to hookup
const path = require('path');

const express = require('express');
//sets up express-session and sequelize-store
const session = require('express-session');
//this sets up Handlebars.js functionality
const exphbs = require('express-handlebars');

const routes = require('./controllers');

//start off connection to server===============

const app = express();
const PORT = process.env.PORT || 3001;

//=============================================

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: process.env.SECRET,
    cookie: { maxAge: 10 * 60 * 1000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

//turn on session storage
app.use(session(sess));

//import helper functions
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

//set handlbars as the default engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Middleware=========================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//this is an express.js middleware function that can take all of the contents of a folder and serve them as
//static assets. This is useful for front end specific files like images, style sheets, and javascript files.
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now Listening on Port: ${PORT}!`));
});
