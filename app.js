const express = require('express');
const mongoose = require('mongoose');
const baseRoute = require('./routes/auth.route');




mongoose.connect('mongodb://127.0.0.1:27017/gratitude').then(()=>{
    console.log('mongodb connected .......');
});




const app = express();




app.use(express.json());


app.use('/auth',baseRoute);








const port = 3000
app.listen(port,()=>{
    console.log(`server started at ${port}`)
});



