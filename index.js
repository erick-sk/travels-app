import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

const app = express();

// Connected to DB
db.authenticate()
    .then(() => console.log('Database connected!'))
    .catch((error) => console.log(error));

// Define a port
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

// Available PUG
app.set('view engine', 'pug');

// Get year current
app.use((req, res, next) => {
    const year = new Date();
    res.locals.currentYear = year.getFullYear();
    res.locals.nameSite = 'Travel Agency';
    return next();
});

// Add body parser for read data from form
app.use(express.urlencoded({ extended: true }));

// Define file public
app.use(express.static('public'));

// Add router
app.use('/', router);

app.listen(port, host, () => {
    console.log(`Service port is working on port ${port}`);
});
