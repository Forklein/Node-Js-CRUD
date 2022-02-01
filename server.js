//Express
const express = require('express');
//For ENV
const dotenv = require('dotenv');
//For logs request
const morgan = require('morgan');
//Parse request to body parser
const bodyParser = require('body-parser');

const path = require('path');

const app = express();

dotenv.config({ path: 'config.env' })
const PORT = process.env.port || 8080;

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));

//set view engine
app.set('view engine', 'ejs')
// app.set('/views', path.resolve(__dirname, 'views/ejs'));

//load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
//http://localhost:3000/css/style.css
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

app.get('/', (req, res) => {
    res.render('index', { title: res.statusCode })
})

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) });