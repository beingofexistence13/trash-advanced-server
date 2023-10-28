





const getAllData = async (req,res) => {
    try {
        res.status(200).send('Express Router go baby');
    } catch (e) {
        res.status(500).send(e)
        console.log(e);
    }
};





module.exports = {
    getAllData
}