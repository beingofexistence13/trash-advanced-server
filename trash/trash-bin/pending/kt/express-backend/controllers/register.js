const UserSchema = require('../models/user');
const bcrypt = require('bcryptjs');


const createData = async (req, res) => {
    try {
        const { name, email, work, phone, password, cpassword } = req.body;
        const emailExits = await UserSchema.findOne({ email: email });
        if (!name || !email || !work || !phone || !password || !cpassword) {
            res.status(500).send('Plz fill all data');
            console.log('Plz fill all data');
        } else {
            // The problem is to returing many respone //////////////////////////////////
            console.log('Field verified');
            if (password != cpassword) {
                // Here is the culpit
                res.send('Wrong cpassword');
                console.log('Wrong cpassword');
            }else {
                console.log('password validation');
            }
            if (emailExits) {
                res.json({ massage: 'User Alrady exists'});
                console.log('User Already exits');
            } else {
                const geniunuser = new UserSchema({ name, email, work, phone, password, cpassword });
                const Newregister = await geniunuser.save();
                res.json({ geniunuser });
                console.log('New User register successfully');
                console.log(geniunuser);
            }
            
        }
    } catch (error) {
        // return res.status(500).json({ message: 'error' })
        console.log(error);
    }
}
const getOneItem = async (req, res) => {
    try {
        const { itemID: userId } = req.params;
        const user = await UserSchema.findOne({ _id: userId });

        if (!user) {
            return res.status(404).json({ message: 'Item does not Exist !!!' })
        }

        res.status(200).json( user )
    } catch (error) {
        res.status(500).json({ message: error })
    }
}
const updateData = async (req, res) => {
    try {
        const { itemID: userID } = req.params;
        const user = await UserSchema.findByIdAndUpdate({ _id: userID }, req.body, {
            new: true,
            runValidators: true
        })

        if (!user) {
            return res.statusnode(404).json({ messgae: 'No Items with that ID' })
        }
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}


const deleteData = async (req, res) => {
    try {
        const { itemID: userID } = req.params;
        const crud = await UserSchema.findByIdAndDelete({ _id: userID });

        if (!user) {
            return res.status(404).json({ messgae: 'No Items with that ID' })
        }

        res.status(200).json( user )
    } catch (error) {
        res.status(500).json({ message: error })
    }
}




module.exports = {
    createData,
    getOneItem,
    updateData,
    deleteData
}