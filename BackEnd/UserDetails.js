const mongoose= require('mongoose');

const userDetailSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    phone: Number,
    password: String,
    
},{
    collection: 'UserInfo'
});
mongoose.model('UserInfo',userDetailSchema);