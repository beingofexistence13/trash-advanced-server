const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Provide A name'],
        trim: true,
        maxlength: [50, 'Name must be less than 50 characters']
    },
    comment: String,
    completed: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    tokens: {
        type: String,
    }

});


// Generating Token
UserSchema.methods.generateAuthToken = async function() {
    try {
        const token = jwt.sign({ _id: this._id }, "xgidgidgidyidyodyofyfyfyfufyfig");
        this.tokens = token;
        this.save();
        console.log(token);
    } catch (e) {
        console.log(e);
    };
}






// We are hashing password
// UserSchema.pre('save', async function hashpassword(next) {
//     console.log('Password saved');
//     try {
//         const hashadPassword = await bcrypt.hash(this.password, 10);
//         const hashadCpassword = await bcrypt.hash(this.cpassword, 10);

//         this.password = hashadPassword;
//         this.cpassword = hashadCpassword;

//         next();
//     } catch (e) {
//         console.log(e);
//     }
// });


module.exports = mongoose.model('USER', UserSchema);