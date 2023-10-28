const express = require('express');
const router = express.Router();

const {
        getAllData
        // createData,
        // getOneItem,
        // updateData,
        // deleteData
} = require('../controllers/about');



router.route('/').get(getAllData);
// router.route('/:itemID').get(getOneItem).patch(updateData).delete(deleteData);

module.exports = router;