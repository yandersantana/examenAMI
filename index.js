const express = require('express');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');
var path = require('path')

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use('/',express.static('client',{redirect:false}));
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());

// Routes
app.use('/api/employees', require('./routes/employee.routes'));


// starting the server

app.get('*',function(req,res,next){
    res.sendFile(path.resolve('client/index.html'))
  });
  
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});