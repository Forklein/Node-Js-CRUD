//# Express
const express = require('express');
//#For ENV
const dotenv = require('dotenv');
//#For logs request
const morgan = require('morgan');
//#Parse request to body parser
const bodyParser = require('body-parser');
//#For use layouts
const expressLayouts = require('express-ejs-layouts');
//# For router
const route = require('./server/routes/router');
//# for Override
const methodOverride = require('method-override');
//# Connect DB MONGO
const connectDB = require('./server/database/connection');
//# path node core module
const path = require('path');

const app = express();

dotenv.config({ path: 'config/config.env' });
const PORT = process.env.port || 8080;

app.use(morgan('tiny'));
app.use(expressLayouts);

app.use(bodyParser.urlencoded({ extended: true }));

//!set view engine
app.set('view engine', 'ejs')
// app.set('/views', path.resolve(__dirname, 'views/ejs'));
//!use default layouts
app.set('layout', 'layout/app');

//!load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
//http://localhost:3000/css/style.css
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

//!connect DB
connectDB();

//! Use methodOverride
app.use(methodOverride('_method'));

//! Use Router
app.use(route);


app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) });