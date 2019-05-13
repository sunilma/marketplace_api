//importing all the required modules
const express = require('express'); //using express framework
const path = require('path');
const mongoose = require('mongoose'); //server communication
const bodyParser = require('body-parser'); //access form data
const passport = require('passport'); // user authentication
const config = require('./config/database'); // database variable
const cors = require('cors');

//connecting to the database
mongoose.connect(config.database);

mongoose.connection.on('connected', ()=> {
    console.log('Connected to database ' + config.database);
});

//initializing port
const port = process.env.PORT || 3000;

//initializing an express app
const app = express();

//using cors middleware for development
app.use(cors());

//configuring user and user's post routes
const users = require('./routes/users');
const jobs = require('./routes/jobs');

//set static folder
app.use(express.static(path.join(__dirname, '/public')));

//using bodyParser middleware
app.use(bodyParser.json());

//Passport initialization
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//using the configured routes
app.use('/users', users);
app.use('/api', jobs);

//index route
app.get('/', (req, res) => {
  res.send("invalid endpoint");
});

//redirecting every other possible route to index page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//creating a server and listening to the port
app.listen(port, () => {
  console.log('server listening on port ' + port);
});
