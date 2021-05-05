const express = require ('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//routes
app.use(require('./routes/index'));


port= 3000;
app.listen(port);
console.log('Server on port ' + port);

