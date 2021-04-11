


const mongoose = require('mongoose')
const { MONGODBURL, MONGODBOPTION } = require('./constant')


mongoose.Promise = global.Promise; 
module.exports = dbConst = () => {
    mongoose.connect(MONGODBURL, MONGODBOPTION).then(() => {
        console.log('MongoDB Connected...')
     
    }).catch(err => {
        console.log('UnEstablished Connection!', err)
        process.exit(1)
    })
}