const mongoose = require('mongoose');



const VideoSchema = new mongoose.Schema({
    tittle: {
        type: String,
        maxlength: [50, 'Name must be less than 50 characters']
    },
    description: String,
    vurl: {
        type: String,
        require: [true, 'Provide A url'],
    },
});






module.exports = mongoose.model('VIDEO', VideoSchema);