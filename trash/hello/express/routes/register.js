const express = require('express');
const router = express.Router();

const {
        createData,
        getOneItem,
        updateData,
        deleteData
} = require('../controllers/register');



router.route('/').post(createData);
router.route('/:itemID').get(getOneItem).patch(updateData).delete(deleteData);

module.exports = router;