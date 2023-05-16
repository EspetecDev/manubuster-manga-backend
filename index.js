const express = require('express');
// const dotenv = require('dotenv').config();
const cors = require('cors');
const {errorHandler} = require('./middleware/error_middleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const app = express();

// connectDB();
app.use(cors({
  methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
  optionsSuccessStatus: 200,
  origin: `http://localhost:${port}`
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// API routes
app.use('/api/users', require('./routes/user_routes'));
app.use('/api/manga', require('./routes/manga_routes'));

app.use(errorHandler);
app.listen(port, () => console.log(`server started on ${port}`));