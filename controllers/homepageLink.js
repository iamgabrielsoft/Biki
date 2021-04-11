
const urlModel = require('../models/url'); 
const generateShortCode = require('../middleware/generalShortCode')


const createShortLink = async (req, res) => {
    
}




const fecthing = async (req, res) => {
    console.log('Data Fetched from Mongodb')
    return res.send('<h3>Fetching</h3>')
}

const fecthingSingleData = async (req, res) => {
    return res.send("<h3>Single Data</h3>")
}


module.exports = {
    createShortLink, 
    fecthing, 
    fecthingSingleData
}