const mongoose = require('mongoose');
const { Schema } = mongoose;




const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    emial:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }

});


const user = mongoose.model('user',userSchema);



module.exports = user;