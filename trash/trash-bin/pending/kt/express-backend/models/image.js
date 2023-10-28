const mongoose = require('mongoose');



const ImageSchema = new mongoose.Schema({
    post: {
        type: String,
        maxlength: [50, 'Name must be less than 50 characters']
    },
    iurl: {
        type: String,
        require: [true, 'Provide A url'],
    },
});






module.exports = mongoose.model('IMAGE', ImageSchema);