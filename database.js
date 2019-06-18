const mongoose = require('mongoose');
//const URI = 'mongodb://localhost/clientes';

const URI = 'mongodb://root:ce42286ddaba98f3@162.212.130.145:7822/clientes';


mongoose.connect(URI)
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;